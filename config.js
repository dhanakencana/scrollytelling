var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoiZGhhbmFrZW5jYW5hIiwiYSI6ImNsNGVkZDR6ejAwaGczYnFvaHVvaWJtbzUifQ.yKhZVZgdjVCBARE3SA19lg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Tinggal Kenangan',
    subtitle: 'Kota Semarang terancam tenggelam oleh banjir rob',
    byline: 'oleh: Dhana Kencana',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Kota Semarang',
            image: '',
            description: 'Menjadi Ibu Kota Jawa Tengah, Kota Semarang terancam tenggelam. Banjir rob pesisir membuat Kota Atlas--julukannya--hanya tinggal kenangan.',
            location: {
                center: [110.40948, -6.98410],
                zoom: 15.95,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
             //   {
             //   layer: 'layer-name',
             //   opacity: 1,
             //   duration: 5000
             //   }
            ],
            onChapterExit: [
             //   {
             //   layer: 'layer-name',
             //   opacity: 0
             //   }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Pesisir Semarang',
            image: '',
            description: 'Kondisi pesisir Kota Semarang memprihatinkan karena abrasi terus melanda setiap tahunnya.',
            location: {
                center: [110.41096, -6.94538],
                zoom: 13.47,
                pitch: 43.99,
                bearing: -15.20,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                // speed: 2, // make the flying slow
                // curve: 1 // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Pantura Lenyap',
            image: '',
            description: 'Kondisinya memprihatinkan. Sepanjang pesisir di Semarang hampir rusak porak poranda oleh banjir rob dan abrasi.',
            location: {
                center: [110.41542, -6.92393],
                zoom: 10.14,
                pitch: 0.00,
                bearing: -16.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Bertahan Sampai Kapan?',
            image: '',
            description: 'Harusnya sedih. Sampai kapan pesisir Pantura, khususnya Semarang bisa bertahan dari gempuran banjir rob?',
            location: {
                center: [110.41887, -6.90707],
                zoom: 7.90,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
