/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='themes/eucgenie/home2/images/',
        aud='themes/eucgenie/home2/media/',
        vid='themes/eucgenie/home2/media/',
        js='themes/eucgenie/home2/js/',
        fonts = {
            'artifika, serif': '<script src=\"http://use.edgefonts.net/artifika:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Asset_2',
                            type: 'image',
                            rect: ['0px', '0px', '1401px', '600px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Asset%202.svg",'0px','0px']
                        },
                        {
                            id: 'Asset_32',
                            type: 'image',
                            rect: ['39px', '71px', '460px', '479px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Asset%203.svg",'0px','0px']
                        },
                        {
                            id: 'Asset_22',
                            type: 'image',
                            rect: ['0px', '0px', '1401px', '0px', 'auto', 'auto'],
                            clip: 'rect(0px 1401px 603.436279296875px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"Asset%202.svg",'0%','0%','1401px','600px', 'no-repeat']
                        },
                        {
                            id: 'genelist_btn',
                            display: 'none',
                            type: 'image',
                            rect: ['247px', '535px', '44px', '47px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Asset%2019.svg",'0px','0px']
                        },
                        {
                            id: 'Asset_5',
                            display: 'none',
                            type: 'image',
                            rect: ['267px', '418px', '2px', '70px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "0px", "0px"],
                            fill: ["rgba(0,0,0,0)",im+"Asset%205.svg",'0px','0px','100%','100%', 'no-repeat']
                        },
                        {
                            id: 'Asset_18',
                            display: 'none',
                            type: 'image',
                            rect: ['250px', '378px', '40px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Asset%2018.svg",'0px','0px']
                        },
                        {
                            id: 'chrdiagram_highlighter',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['222px', '111px', '31px', '31px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(229,9,9,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'blast_highlighter',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['223px', '183px', '32px', '32px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(229,9,9,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'eximage_highlighter',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['153px', '240px', '26px', '26px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(229,9,9,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'explot_highlighter',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['112px', '239px', '26px', '26px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(229,9,9,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'gene_pages_highlighter',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['281px', '111px', '30px', '30px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(229,9,9,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'jbrowse_highlighter',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['275px', '185px', '31px', '31px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(229,9,9,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'complex_highlighter',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['373px', '248px', '26px', '27px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(229,9,9,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Asset_8',
                            type: 'image',
                            rect: ['200px', '316px', '56px', '70px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Asset%208.svg",'0px','0px']
                        },
                        {
                            id: 'Asset_6',
                            type: 'image',
                            rect: ['283px', '276px', '65px', '108px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Asset%206.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'Asset_7',
                            type: 'image',
                            rect: ['267px', '249px', '2px', '129px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Asset%207.svg",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'Asset_202',
                            type: 'image',
                            rect: ['57px', '534px', '476px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Asset%2020.svg",'0px','0px']
                        },
                        {
                            id: 'blast_btn',
                            type: 'image',
                            rect: ['221px', '182px', '35px', '48px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Asset%2012.svg",'0px','0px']
                        },
                        {
                            id: 'chdiagram_btn',
                            type: 'image',
                            rect: ['208px', '110px', '59px', '44px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Asset%2010.svg",'0px','0px']
                        },
                        {
                            id: 'genepages_btn',
                            type: 'image',
                            rect: ['270px', '110px', '51px', '44px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Asset%2011.svg",'0px','0px']
                        },
                        {
                            id: 'jbrowse_btn',
                            type: 'image',
                            rect: ['265px', '184px', '51px', '44px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"jbrowse_1.svg",'0px','0px']
                        },
                        {
                            id: 'galaxy_btn',
                            type: 'image',
                            rect: ['346px', '197px', '32px', '34px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"galaxy.svg",'0px','0px']
                        },
                        {
                            id: 'complex_btn',
                            type: 'image',
                            rect: ['369px', '248px', '37px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Asset%2016.svg",'0px','0px']
                        },
                        {
                            id: 'enirichment_btn',
                            type: 'image',
                            rect: ['385px', '198px', '44px', '34px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Asset%2017.svg",'0px','0px']
                        },
                        {
                            id: 'eximage_btn',
                            type: 'image',
                            rect: ['149px', '239px', '35px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Asset%2014.svg",'0px','0px']
                        },
                        {
                            id: 'exnet_btn',
                            type: 'image',
                            rect: ['135px', '297px', '29px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"exnet.svg",'0px','0px']
                        },
                        {
                            id: 'explot_btn',
                            type: 'image',
                            rect: ['113px', '239px', '26px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Asset%2015.svg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'chrdiagram_img',
                            type: 'image',
                            rect: ['583px', '110px', '713px', '456px', 'auto', 'auto'],
                            clip: 'rect(27.606201171875px 713px 395.24658203125px 0px)',
                            borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"chrdiagram.png",'1.89208984375px','25.35400390625px']
                        },
                        {
                            id: 'eximage_img',
                            type: 'image',
                            rect: ['583px', '54px', '730px', '492px', 'auto', 'auto'],
                            clip: 'rect(80.999755859375px 712.89208984375px 451.02099609375px 0px)',
                            borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                            opacity: '0.99',
                            fill: ["rgba(0,0,0,0)",im+"eximage.png",'0px','0px']
                        },
                        {
                            id: 'blast_img',
                            type: 'image',
                            rect: ['559px', '135px', '753px', '371px', 'auto', 'auto'],
                            clip: 'rect(0px 737.9658203125px 371px 23.76953125px)',
                            borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                            opacity: '0.99',
                            fill: ["rgba(0,0,0,0)",im+"blast.png",'0px','0px']
                        },
                        {
                            id: 'explot_img',
                            type: 'image',
                            rect: ['575px', '135px', '745px', '371px', 'auto', 'auto'],
                            clip: 'rect(0px 720.83642578125px 371px 8.13720703125px)',
                            borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"explot.png",'0px','0px']
                        },
                        {
                            id: 'gene_pages_img',
                            type: 'image',
                            rect: ['575px', '136px', '745px', '371px', 'auto', 'auto'],
                            clip: 'rect(0px 720.83642578125px 371px 8.13720703125px)',
                            borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Screen%20Shot%202017-01-14%20at%2011.10.52.png",'7.6689453124995px','1.9570312500009px']
                        },
                        {
                            id: 'jbrowse_img',
                            type: 'image',
                            rect: ['575px', '136px', '745px', '371px', 'auto', 'auto'],
                            clip: 'rect(0px 720.83642578125px 371px 8.13720703125px)',
                            borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Screen%20Shot%202017-01-14%20at%2021.53.47.png",'7.6689453124995px','1.9570312500009px']
                        },
                        {
                            id: 'complex_img',
                            type: 'image',
                            rect: ['575px', '136px', '745px', '371px', 'auto', 'auto'],
                            clip: 'rect(0px 720.83642578125px 371px 8.13720703125px)',
                            borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Screen%20Shot%202017-01-14%20at%20222.10.23.png",'7.6689453124995px','1.9570312500009px']
                        },
                        {
                            id: 'notice_board',
                            type: 'image',
                            rect: ['583px', '135px', '713px', '371px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"Asset%201.svg",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            display: 'none',
                            type: 'rect',
                            rect: ['585px', '439px', '710px', '64px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "10px 10px", "10px 10px"],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'BLAST_txt',
                            display: 'block',
                            type: 'text',
                            rect: ['598px', '456px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0.000000',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-family: artifika, serif;\">The Basic Local Alignment Search Tool (BLAST) for Eucalyptus grandis database.</span></p>",
                            font: ['Verdana, Geneva, sans-serif', [24, ""], "rgba(235,5,5,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'chromosome_txt',
                            display: 'block',
                            type: 'text',
                            rect: ['598px', '456px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0.000000',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 16px;\">Chromosome Diagram: Draw maps of the Eucalyptus genome using a list of genes.</span></p>",
                            font: ['artifika, serif', [24, ""], "rgba(235,5,5,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'eximage_txt',
                            display: 'block',
                            type: 'text',
                            rect: ['598px', '456px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0.99',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-family: artifika, serif;\">exImage: Graphical interface to analyse Eucalyptus tissue expression.</span></p>",
                            font: ['Verdana, Geneva, sans-serif', [24, "px"], "rgba(235,5,5,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'explot_txt',
                            display: 'none',
                            type: 'text',
                            rect: ['598px', '456px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 16px;\">exPlot: Visualize gene expression in various charts.</span></p>",
                            font: ['artifika, serif', [24, "px"], "rgba(235,5,5,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'genelist_txt',
                            display: 'none',
                            type: 'text',
                            rect: ['598px', '456px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 16px;\">Gene Pages: Detailed information about Eucalyptus genes.</span></p>",
                            font: ['artifika, serif', [24, "px"], "rgba(235,5,5,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'jbrowse_txt',
                            display: 'none',
                            type: 'text',
                            rect: ['598px', '456px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 16px;\">JBrowse: Genome browser to navigate through Eucalyptus grandis genome.   </span></p>",
                            font: ['artifika, serif', [24, "px"], "rgba(235,5,5,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'complex_txt',
                            display: 'none',
                            type: 'text',
                            rect: ['598px', '456px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 16px;\">ComPlEX: Comparative analysis of Plant co-EXpression networks in E. grandis.</span></p>",
                            font: ['artifika, serif', [24, "px"], "rgba(235,5,5,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Ecugenieorg',
                            display: 'none',
                            type: 'text',
                            rect: ['236px', '406px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 10px; color: rgb(0, 2, 6);\">EucGenIE.org</span></p>",
                            font: ['artifika, serif', [24, "px"], "rgba(235,5,5,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'plantgenie22',
                            type: 'image',
                            rect: ['1438px', '525px', '210px', '70px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"plantgenie2.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1400px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 26890,
                    autoPlay: true,
                    labels: {
                        "chdiagram": 3000,
                        "eximage": 6000,
                        "blast": 9500,
                        "explot": 13408,
                        "gene_pages": 16930,
                        "jbrowse": 20250,
                        "complex": 23597
                    },
                    data: [
                        [
                            "eid14501",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${jbrowse_img}",
                            '0',
                            '0'
                        ],
                        [
                            "eid14502",
                            "opacity",
                            20223,
                            3320,
                            "linear",
                            "${jbrowse_img}",
                            '1',
                            '0.99'
                        ],
                        [
                            "eid207",
                            "scaleX",
                            2500,
                            223,
                            "linear",
                            "${Asset_8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid725",
                            "scaleX",
                            2705,
                            295,
                            "easeOutBounce",
                            "${chdiagram_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid728",
                            "scaleY",
                            2705,
                            344,
                            "easeOutBounce",
                            "${blast_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid28",
                            "height",
                            750,
                            1000,
                            "linear",
                            "${Asset_22}",
                            '600px',
                            '0px'
                        ],
                        [
                            "eid723",
                            "scaleX",
                            2705,
                            295,
                            "easeOutBounce",
                            "${genepages_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10841",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${eximage_txt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1174",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${jbrowse_btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1071",
                            "opacity",
                            2705,
                            0,
                            "linear",
                            "${jbrowse_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1754",
                            "scaleY",
                            2705,
                            295,
                            "easeOutBounce",
                            "${exnet_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12221",
                            "display",
                            0,
                            0,
                            "linear",
                            "${genelist_txt}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12222",
                            "display",
                            16930,
                            0,
                            "linear",
                            "${genelist_txt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12223",
                            "display",
                            20250,
                            0,
                            "linear",
                            "${genelist_txt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4105",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${BLAST_txt}",
                            '0',
                            '0'
                        ],
                        [
                            "eid9970",
                            "opacity",
                            9500,
                            3908,
                            "linear",
                            "${BLAST_txt}",
                            '1',
                            '0.99'
                        ],
                        [
                            "eid11670",
                            "opacity",
                            54,
                            0,
                            "linear",
                            "${gene_pages_img}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11671",
                            "opacity",
                            16930,
                            3320,
                            "linear",
                            "${gene_pages_img}",
                            '1',
                            '0.99'
                        ],
                        [
                            "eid727",
                            "scaleX",
                            2705,
                            344,
                            "easeOutBounce",
                            "${blast_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10922",
                            "display",
                            13408,
                            0,
                            "linear",
                            "${BLAST_txt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12324",
                            "display",
                            16930,
                            0,
                            "linear",
                            "${gene_pages_highlighter}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12325",
                            "display",
                            20250,
                            0,
                            "linear",
                            "${gene_pages_highlighter}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10718",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${chromosome_txt}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10719",
                            "opacity",
                            3000,
                            3000,
                            "linear",
                            "${chromosome_txt}",
                            '1',
                            '0.99'
                        ],
                        [
                            "eid15302",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Ecugenieorg}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15363",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${Ecugenieorg}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14867",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${complex_img}",
                            '0',
                            '0'
                        ],
                        [
                            "eid14868",
                            "opacity",
                            23570,
                            3320,
                            "linear",
                            "${complex_img}",
                            '1',
                            '0.99'
                        ],
                        [
                            "eid1755",
                            "scaleY",
                            2705,
                            295,
                            "easeOutBounce",
                            "${explot_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14643",
                            "display",
                            20277,
                            0,
                            "linear",
                            "${jbrowse_highlighter}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14644",
                            "display",
                            23597,
                            0,
                            "linear",
                            "${jbrowse_highlighter}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1476",
                            "scaleX",
                            2705,
                            295,
                            "easeOutBounce",
                            "${complex_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1070",
                            "scaleX",
                            2705,
                            295,
                            "easeOutBounce",
                            "${jbrowse_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8198",
                            "display",
                            0,
                            0,
                            "linear",
                            "${blast_highlighter}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8199",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${blast_highlighter}",
                            'none',
                            'block'
                        ],
                        [
                            "eid8200",
                            "display",
                            13408,
                            0,
                            "linear",
                            "${blast_highlighter}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3124",
                            "opacity",
                            54,
                            0,
                            "linear",
                            "${eximage_img}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3962",
                            "opacity",
                            6000,
                            3500,
                            "linear",
                            "${eximage_img}",
                            '1',
                            '0.99'
                        ],
                        [
                            "eid12160",
                            "background-position",
                            18236,
                            0,
                            "linear",
                            "${gene_pages_img}",
                            [7.6689453124995,1.9570312500009],
                            [7.6689453124995,1.9570312500009],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1756",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${explot_btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1752",
                            "opacity",
                            2705,
                            0,
                            "linear",
                            "${explot_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid35",
                            "display",
                            1760,
                            0,
                            "linear",
                            "${genelist_btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid34",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${genelist_btn}",
                            'block',
                            'block'
                        ],
                        [
                            "eid115",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Asset_18}",
                            'none',
                            'none'
                        ],
                        [
                            "eid113",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${Asset_18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid693",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${blast_btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid696",
                            "opacity",
                            2705,
                            0,
                            "linear",
                            "${blast_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2961",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${chrdiagram_img}",
                            '0',
                            '0'
                        ],
                        [
                            "eid6050",
                            "opacity",
                            3000,
                            3000,
                            "easeOutQuad",
                            "${chrdiagram_img}",
                            '1',
                            '0.99'
                        ],
                        [
                            "eid33",
                            "top",
                            1750,
                            250,
                            "linear",
                            "${genelist_btn}",
                            '535px',
                            '488px'
                        ],
                        [
                            "eid1072",
                            "scaleY",
                            2705,
                            295,
                            "easeOutBounce",
                            "${jbrowse_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1475",
                            "scaleX",
                            2705,
                            295,
                            "easeOutBounce",
                            "${galaxy_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10131",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${eximage_txt}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10132",
                            "opacity",
                            6000,
                            0,
                            "linear",
                            "${eximage_txt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10133",
                            "opacity",
                            9500,
                            0,
                            "linear",
                            "${eximage_txt}",
                            '1',
                            '0.99'
                        ],
                        [
                            "eid14397",
                            "display",
                            3347,
                            0,
                            "linear",
                            "${jbrowse_txt}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14398",
                            "display",
                            20250,
                            0,
                            "linear",
                            "${jbrowse_txt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14399",
                            "display",
                            23597,
                            0,
                            "linear",
                            "${jbrowse_txt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2259",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${notice_board}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2280",
                            "opacity",
                            3000,
                            0,
                            "linear",
                            "${notice_board}",
                            '0',
                            '1'
                        ],
                        [
                            "eid206",
                            "-webkit-transform-origin",
                            2500,
                            0,
                            "linear",
                            "${Asset_8}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16624",
                            "-moz-transform-origin",
                            2500,
                            0,
                            "linear",
                            "${Asset_8}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16625",
                            "-ms-transform-origin",
                            2500,
                            0,
                            "linear",
                            "${Asset_8}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16626",
                            "msTransformOrigin",
                            2500,
                            0,
                            "linear",
                            "${Asset_8}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16627",
                            "-o-transform-origin",
                            2500,
                            0,
                            "linear",
                            "${Asset_8}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16628",
                            "transform-origin",
                            2500,
                            0,
                            "linear",
                            "${Asset_8}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid14972",
                            "display",
                            23597,
                            0,
                            "linear",
                            "${complex_highlighter}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14973",
                            "display",
                            26890,
                            0,
                            "linear",
                            "${complex_highlighter}",
                            'block',
                            'none'
                        ],
                        [
                            "eid7888",
                            "display",
                            0,
                            0,
                            "linear",
                            "${eximage_highlighter}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7889",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${eximage_highlighter}",
                            'none',
                            'block'
                        ],
                        [
                            "eid7890",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${eximage_highlighter}",
                            'block',
                            'none'
                        ],
                        [
                            "eid120",
                            "opacity",
                            2250,
                            250,
                            "linear",
                            "${Asset_18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8092",
                            "display",
                            13408,
                            0,
                            "linear",
                            "${explot_highlighter}",
                            'none',
                            'block'
                        ],
                        [
                            "eid8093",
                            "display",
                            16930,
                            0,
                            "linear",
                            "${explot_highlighter}",
                            'block',
                            'none'
                        ],
                        [
                            "eid37",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Asset_5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid36",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Asset_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid80",
                            "scaleY",
                            2000,
                            250,
                            "linear",
                            "${Asset_5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1482",
                            "scaleY",
                            2705,
                            295,
                            "easeOutBounce",
                            "${complex_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1481",
                            "scaleY",
                            2705,
                            295,
                            "easeOutBounce",
                            "${galaxy_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1753",
                            "scaleY",
                            2705,
                            295,
                            "easeOutBounce",
                            "${eximage_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid350",
                            "scaleY",
                            2500,
                            250,
                            "linear",
                            "${Asset_7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid726",
                            "scaleY",
                            2705,
                            295,
                            "easeOutBounce",
                            "${chdiagram_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1477",
                            "scaleX",
                            2705,
                            295,
                            "easeOutBounce",
                            "${enirichment_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7825",
                            "display",
                            0,
                            0,
                            "linear",
                            "${chrdiagram_highlighter}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7826",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${chrdiagram_highlighter}",
                            'none',
                            'block'
                        ],
                        [
                            "eid7827",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${chrdiagram_highlighter}",
                            'block',
                            'none'
                        ],
                        [
                            "eid208",
                            "scaleY",
                            2500,
                            223,
                            "linear",
                            "${Asset_8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10656",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10657",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1747",
                            "scaleX",
                            2705,
                            295,
                            "easeOutBounce",
                            "${eximage_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1749",
                            "scaleX",
                            2705,
                            295,
                            "easeOutBounce",
                            "${explot_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10820",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${chromosome_txt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14949",
                            "display",
                            6640,
                            0,
                            "linear",
                            "${complex_txt}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14950",
                            "display",
                            23597,
                            0,
                            "linear",
                            "${complex_txt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14951",
                            "display",
                            26890,
                            0,
                            "linear",
                            "${complex_txt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16845",
                            "left",
                            250,
                            2750,
                            "linear",
                            "${plantgenie22}",
                            '1438px',
                            '1174px'
                        ],
                        [
                            "eid724",
                            "scaleY",
                            2705,
                            295,
                            "easeOutBounce",
                            "${genepages_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1483",
                            "scaleY",
                            2705,
                            295,
                            "easeOutBounce",
                            "${enirichment_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid691",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${genepages_btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid694",
                            "opacity",
                            2705,
                            0,
                            "linear",
                            "${genepages_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid5454",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${explot_img}",
                            '0',
                            '0'
                        ],
                        [
                            "eid6053",
                            "opacity",
                            13408,
                            3522,
                            "linear",
                            "${explot_img}",
                            '1',
                            '0.99'
                        ],
                        [
                            "eid1486",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${galaxy_btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1478",
                            "opacity",
                            2705,
                            0,
                            "linear",
                            "${galaxy_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1485",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${complex_btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1479",
                            "opacity",
                            2705,
                            0,
                            "linear",
                            "${complex_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1757",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${exnet_btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1751",
                            "opacity",
                            2705,
                            0,
                            "linear",
                            "${exnet_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Asset_202}",
                            '629px',
                            '534px'
                        ],
                        [
                            "eid692",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${chdiagram_btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid695",
                            "opacity",
                            2705,
                            0,
                            "linear",
                            "${chdiagram_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid229",
                            "-webkit-transform-origin",
                            2500,
                            0,
                            "linear",
                            "${Asset_6}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16629",
                            "-moz-transform-origin",
                            2500,
                            0,
                            "linear",
                            "${Asset_6}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16630",
                            "-ms-transform-origin",
                            2500,
                            0,
                            "linear",
                            "${Asset_6}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16631",
                            "msTransformOrigin",
                            2500,
                            0,
                            "linear",
                            "${Asset_6}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16632",
                            "-o-transform-origin",
                            2500,
                            0,
                            "linear",
                            "${Asset_6}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16633",
                            "transform-origin",
                            2500,
                            0,
                            "linear",
                            "${Asset_6}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1748",
                            "scaleX",
                            2705,
                            295,
                            "easeOutBounce",
                            "${exnet_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid83",
                            "-webkit-transform-origin",
                            2000,
                            0,
                            "linear",
                            "${Asset_5}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16634",
                            "-moz-transform-origin",
                            2000,
                            0,
                            "linear",
                            "${Asset_5}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16635",
                            "-ms-transform-origin",
                            2000,
                            0,
                            "linear",
                            "${Asset_5}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16636",
                            "msTransformOrigin",
                            2000,
                            0,
                            "linear",
                            "${Asset_5}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16637",
                            "-o-transform-origin",
                            2000,
                            0,
                            "linear",
                            "${Asset_5}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16638",
                            "transform-origin",
                            2000,
                            0,
                            "linear",
                            "${Asset_5}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1758",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${eximage_btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1750",
                            "opacity",
                            2705,
                            0,
                            "linear",
                            "${eximage_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3123",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${blast_img}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4390",
                            "opacity",
                            9500,
                            3908,
                            "linear",
                            "${blast_img}",
                            '1',
                            '0.99'
                        ],
                        [
                            "eid11387",
                            "display",
                            0,
                            0,
                            "linear",
                            "${explot_txt}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11448",
                            "display",
                            13408,
                            0,
                            "linear",
                            "${explot_txt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11383",
                            "display",
                            16930,
                            0,
                            "linear",
                            "${explot_txt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1484",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${enirichment_btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1480",
                            "opacity",
                            2705,
                            0,
                            "linear",
                            "${enirichment_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid347",
                            "-webkit-transform-origin",
                            2500,
                            0,
                            "linear",
                            "${Asset_7}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16639",
                            "-moz-transform-origin",
                            2500,
                            0,
                            "linear",
                            "${Asset_7}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16640",
                            "-ms-transform-origin",
                            2500,
                            0,
                            "linear",
                            "${Asset_7}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16641",
                            "msTransformOrigin",
                            2500,
                            0,
                            "linear",
                            "${Asset_7}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16642",
                            "-o-transform-origin",
                            2500,
                            0,
                            "linear",
                            "${Asset_7}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16643",
                            "transform-origin",
                            2500,
                            0,
                            "linear",
                            "${Asset_7}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid234",
                            "scaleX",
                            2500,
                            223,
                            "linear",
                            "${Asset_6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid236",
                            "scaleY",
                            2500,
                            223,
                            "linear",
                            "${Asset_6}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "bird-forward-back_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bird-forward-back',
                            type: 'image',
                            rect: ['0px', '0px', '540px', '246px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'themes/eucgenie/home2/images/bird-forward-back.png', '0px', '0px', '540px', '246px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '175px', '123px']
                        }
                    }
                },
                timeline: {
                    duration: 416,
                    autoPlay: true,
                    data: [
                        [
                            "eid6294",
                            "height",
                            0,
                            0,
                            "linear",
                            "${bird-forward-back}",
                            '0px',
                            '123px'
                        ],
                        [
                            "eid6295",
                            "width",
                            0,
                            0,
                            "linear",
                            "${bird-forward-back}",
                            '0px',
                            '175px'
                        ],
                        [
                            "eid6296",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${bird-forward-back}",
                            [0,0],
                            [-14,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid6297",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${bird-forward-back}",
                            [-14,0],
                            [-189,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid6298",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${bird-forward-back}",
                            [-189,0],
                            [-364,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid6299",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${bird-forward-back}",
                            [-364,0],
                            [-14,-123],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid6300",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${bird-forward-back}",
                            [-14,-123],
                            [-189,-123],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid6301",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${bird-forward-back}",
                            [-189,-123],
                            [-364,-123],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("themes/eucgenie/home2/new_banner_2_edgeActions.js");
})("EDGE-4069874");
