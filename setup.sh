#!/bin/sh
# Bash script for importing genie CMS from plantgenie.org to MySQL database
DB_HOST="localhost"
DB_PORT=3306
DB_NAME="genie_cms"

BASE_URL="http://geniecms.org/latest/"

usage() {
    PN=`basename "$0"`
    echo >&2 "Usage: $PN [OPTIONS] <action>"
    echo >&2 " Where <action>:"
    echo >&2 "    install_genie     Install the GenIE-CMS"
    echo >&2 "    init              Initialize CMS database"
    echo >&2 "    import            Import initial data files"
    echo >&2 "    update            Update database (usually should run daily by cron)"
    echo >&2 " Options:"
    echo >&2 "    -u <user>         Username to access database"
    echo >&2 "    -p <password>     User password to access database"
    echo >&2 "    -h <host>         MySQL server address (default: $DB_HOST)"
    echo >&2 "    -r <port>         MySQL server port (default: $DB_PORT)"
    echo >&2 "    -n <database>     MySQL database name (default: $DB_NAME)"
    echo >&2 ""
    exit 1
}

install_genie(){
	file="genie.tar.gz"
	if [ -f "$file" ]
	then
		echo "Removing old $file and Downloading $file.."
		rm $file
	else
 		echo >&2 "Downloading $file..."
	fi	
 	wget -c $BASE_URL"$file"
	echo >&2 "unpack $file..."
	tar -zxvf $file
	echo >&2 "Excellent! GenIE CMS is available on http://localhost/genie. The password is admin, please change the password as soon as possible "
	exit 0
}


init() {
    TODAY=`date +%F`

    echo >&2 "Creating directory $TODAY..."
    mkdir -p "$TODAY"

    echo >&2 "Downloading database file..."
    wget -c $BASE_URL"mirrors/egrandis.sql.txt" -P $TODAY

    echo >&2 "Creating database $DB_NAME..."
    mysql -h$DB_HOST -P$DB_PORT -u$DB_USERNAME -p$DB_PASSWORD -Bse "DROP DATABASE IF EXISTS $DB_NAME;"
    mysql -h$DB_HOST -P$DB_PORT -u$DB_USERNAME -p$DB_PASSWORD -Bse "CREATE DATABASE $DB_NAME DEFAULT CHARACTER SET utf8;"
    mysql -h$DB_HOST -P$DB_PORT -u$DB_USERNAME -p$DB_PASSWORD $DB_NAME < $TODAY/egrandis.sql.txt
    echo >&2 "Done"
    exit 0
}

import() {
    FILES_TO_DOWNLOAD="transcript_info.txt transcript_potri.txt transcript_atg.txt"
    FILES_TO_UNZIP=""

    TODAY=`date +%F`
    echo >&2 "Creating directory $TODAY..."
    mkdir -p "$TODAY"

    cp -v continentCodes.txt "$TODAY/"

    cd "$TODAY"

    for FILE in $FILES_TO_DOWNLOAD; do
        echo >&2 "Downloading $FILE...\n"
        wget -c "$BASE_URL/$FILE"
    done
    for FILE in $FILES_TO_UNZIP; do
        echo >&2 "Unzipping $FILE..."
        unzip "$FILE"
    done

    echo >&2 "Importing geonames into database $DB_NAME..."
 
    for FILE in $FILES_TO_DOWNLOAD; do
        db_str=${FILE%%.*}
        mysql  -h$DB_HOST -P$DB_PORT -u$DB_USERNAME -p$DB_PASSWORD $DB_NAME  --local_infile=1 -Bse "TRUNCATE TABLE $db_str;ALTER TABLE $db_str AUTO_INCREMENT = 1;load data local infile '$db_str.txt' replace INTO TABLE $db_str fields terminated by '\t' LINES TERMINATED BY '\n' ignore 0 lines;"
        echo >&2 "Loading table for $db_str...\n"
    done

    for FILE in $FILES_TO_DOWNLOAD; do
        db_str=${FILE%%.*}
        if [ $db_str != "transcript_info" ] ;then
        mysql  -h$DB_HOST -P$DB_PORT -u$DB_USERNAME -p$DB_PASSWORD $DB_NAME  --local_infile=1  -Bse "UPDATE $db_str INNER JOIN transcript_info on transcript_info.transcript_id = $db_str.transcript_id SET $db_str.transcript_i = transcript_info.transcript_i;"
        echo >&2 "Loading index for $db_str...\n"
        fi
    done

    echo >&2 "Done"
    cd ..

    exit 0
}

update() {
    YESTERDAY=`date --date='1 day ago' +%F`

    FILES_TO_DOWNLOAD="modifications-$YESTERDAY.txt deletes-$YESTERDAY.txt alternateNamesModifications-$YESTERDAY.txt alternateNamesDeletes-$YESTERDAY.txt"

    TODAY=`date +%F`
    echo >&2 "Creating directory $TODAY..."
    mkdir -p "$TODAY" && cd "$TODAY"

    for FILE in $FILES_TO_DOWNLOAD; do
        echo >&2 "Downloading $FILE..."
        wget -c "$BASE_URL/$FILE"
    done

    echo >&2 "Deleting old names..."
    cat "deletes-$YESTERDAY.txt" | cut -f1 | while read ID; do
        mysql -h$DB_HOST -P$DB_PORT -u$DB_USERNAME -p$DB_PASSWORD -Bse "DELETE FROM names WHERE name_id = $ID" $DB_NAME
    done

    echo >&2 "Applying changes to names..."
    cat "modifications-$YESTERDAY.txt" | cut -f1 | while read ID; do
        mysql -h$DB_HOST -P$DB_PORT -u$DB_USERNAME -p$DB_PASSWORD -Bse "DELETE FROM names WHERE name_id = $ID" $DB_NAME
    done

    mysql -h$DB_HOST -P$DB_PORT -u$DB_USERNAME -p$DB_PASSWORD --local-infile=1 -Bse "LOAD DATA LOCAL INFILE 'modifications-$YESTERDAY.txt' INTO TABLE names CHARACTER SET 'utf8'" $DB_NAME


    echo >&2 "Deleting old alternate names..."
    cat "alternateNamesDeletes-$YESTERDAY.txt" | cut -f1 | while read ID; do
        mysql -h$DB_HOST -P$DB_PORT -u$DB_USERNAME -p$DB_PASSWORD -Bse "DELETE FROM alternate_names WHERE alternate_name_id = $ID" $DB_NAME
    done

    echo >&2 "Applying changes to alternate names..."
    cat "alternateNamesModifications-$YESTERDAY.txt" | cut -f1 | while read ID; do
        mysql -h$DB_HOST -P$DB_PORT -u$DB_USERNAME -p$DB_PASSWORD -Bse "DELETE FROM alternate_names WHERE alternate_name_id = $ID" $DB_NAME
    done

    mysql -h$DB_HOST -P$DB_PORT -u$DB_USERNAME -p$DB_PASSWORD --local-infile=1 -Bse "LOAD DATA LOCAL INFILE 'alternateNamesModifications-$YESTERDAY.txt' INTO TABLE alternate_names CHARACTER SET 'utf8'" $DB_NAME

    echo >&2 "Done"
    cd ..

    exit 0
}

# Main procedure
cd "$( dirname "$0" )"

while getopts "u:p:h:r:n:" opt; do
    case $opt in
        u) DB_USERNAME=$OPTARG ;;
        p) DB_PASSWORD=$OPTARG ;;
        h) DB_HOST=$OPTARG ;;
        r) DB_PORT=$OPTARG ;;
        n) DB_NAME=$OPTARG ;;
        \?) usage ;;            # unknown flag
    esac
done
shift `expr $OPTIND - 1`

if [ $# -eq 1 ]; then
    case $1 in
        init)   init ;;
	install_genie) install_genie;;
        import) import ;;
        update) update ;;
        *)      usage ;;        # unknown command
    esac
else
    usage
fi
