const podcasts = {
    movidas: {
        name:'Movidas Minúsculas',
        image:'https://pbs.twimg.com/profile_images/1098200602931326976/I9Kd2Fjc.png'
    },
    paletada: {
        name: 'La Paletada',
        image:'https://pbs.twimg.com/profile_images/1276218439250726912/tVV_bc_d_400x400.jpg'
    },
    cof: {
        name: 'Cofondecauch',
        image: 'https://pbs.twimg.com/profile_images/1096340490138632192/wWAUnEvA_400x400.jpg'
    },
    tercio: {
        name: 'Cambiando de tercio',
        image: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/38/07/c9/3807c9a0-7e3b-ccc5-eee3-27be35fd7415/mza_5430331627468055432.jpg/1200x1200bb.jpg'
    },
    otro: {
        name:'El otro día',
        image:'https://static-1.ivoox.com/canales/8/6/8/9/5431567419868_XXL.jpg'
    },
    flamenca: {
        name: 'Flamenca y Tapete',
        image: 'https://pbs.twimg.com/profile_images/1301839231485128704/CY7pFpk1_400x400.jpg'
    },
    minority: {
        name:'Minority Report',
        image:'https://i1.sndcdn.com/avatars-000701161450-pc65dy-t500x500.jpg'
    },
    gente: {
        name:'Gente que tuitea cosas',
        image:'https://pbs.twimg.com/profile_images/1310887258711560192/jUuY3a4s.jpg'
    },
    script: {
        name:'Script Fighters',
        image:'https://pbs.twimg.com/profile_images/1361604566043791360/LxcHJWTF_400x400.jpg'
    }
}

const getNameByKey = (channel) => {
    return podcasts[channel]
}

const getChannels = () => Object.keys(podcasts).map(item => ({
    id: item,
    title: podcasts[item].name,
    image:  podcasts[item].image
}))

export {
    getNameByKey,
    getChannels,
}
