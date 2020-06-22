var config = {
    style: 'mapbox://styles/jiaqishi187/ckbp5o8800bd51iqfvnw3wcm2',
    accessToken: 'pk.eyJ1IjoiamlhcWlzaGkxODciLCJhIjoiY2thdnI5cjRrMGh1bjJ6a3kwY2l2YWM0aiJ9.BOGjg2QBv1lFFcg4e6RYKA',
    showMarkers: false,
    theme: 'light',
    alignment: 'right',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'l',
            title: '??',
            image: '',
            description: '??,????340?????????(?????)???,??,??,??;??????,?????????????????',
            location: {
                center: [111.293, 30.747],
                zoom: 8.6,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2',
            title: '????',
            image: '',
            description: '?314?,????????????,???????,??????????,??????????304?,??????(???)??????(????,????????????)?',
            location: {
                center: [111.649,33.115],
                zoom: 8,
                pitch: 55.50,
                bearing: -7.20
            },
            onChapterEnter: [
                {
                    layer: 'quyuan',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: '3',
            title: '????',
            image: '',
            description: '???299?,??????????????????????, ???,??????????,?:�?,????,???,?????????,????????3??,??????????????????????,????,???????????,????,???????????(?????????)???? �???????,???????� ',
            location: {
                center: [110.599823,27.913453],
                zoom: 11.15,
                pitch: 60.00,
                bearing: -16.80
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            title: '????',
            image: './4.jpg',
            description: '???278?,???????,?????????,??????? ????????????????????????????????????????????????????,???????????????,??62??',
            location: {
                center: [113.183935,28.79475],
                zoom: 9,
                pitch: 44.00,
                bearing: -40.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
