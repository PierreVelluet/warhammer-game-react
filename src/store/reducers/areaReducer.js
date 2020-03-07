const initialState = {
    space: {
        background:'https://www.azutura.com/media/catalog/product/cache/49/image/650x/040ec09b1e35df139433887a97daa66f/W/S/WS-47373_WP.jpg',
        monsterBackground: '',
        planetBackground: 'https://vignette.wikia.nocookie.net/planetstar/images/1/1b/Green_planet.jpg/revision/latest?cb=20130401020147',
    },
    desert: {
        background: 'https://www.wallpaperflare.com/static/581/364/24/artwork-fantasy-art-digital-art-desert-wallpaper.jpg',
        monsterBackground: 'https://images.unsplash.com/photo-1522046310824-b844b4b5806f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        planetBackground: 'https://upload.wikimedia.org/wikipedia/commons/2/23/DesertPlanet.jpg',
        bioType: 'Desert',
        inhabited: 'Orks',
        temperature: '45°'
    },
    jungle: {
        background: 'https://i.pinimg.com/originals/1d/34/cd/1d34cdbcbc3ebb9d59d2e455c249a82c.jpg',
        monsterBackground: 'https://i.pinimg.com/originals/a4/1c/bc/a41cbc641383f94a2db319d90fad5996.jpg',
        planetBackground: 'https://vignette.wikia.nocookie.net/planetstar/images/1/1b/Green_planet.jpg/revision/latest?cb=20130401020147',
        bioType: 'Jungle',
        inhabited: 'Tyranids',
        temperature: '35°'
    },
    iceland: {
        background: 'https://c.wallhere.com/photos/aa/d7/fantasy_art_snow_mountains_landscape-211055.jpg!d',
        monsterBackground: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTmHiUUs_tkMalPosYQsn_m7VcKry-ryvUsUKT5Feq1dokbTwi',
        planetBackground: 'https://vignette.wikia.nocookie.net/sinsofasolarempire/images/0/02/Ice_Planet.jpg/revision/latest/scale-to-width-down/340?cb=20080211062100',
        bioType: 'Iceland',
        inhabited: 'Unknown',
        temperature: '-25°'
    },

}

const reducer = (state = initialState) => {
return state;
}

export default reducer;