<template>
    <div class="phi-home">
        <PhiHeader />
        <div v-if="myChannels.length" class="phi-home__wrapper">
            <div class="phi-home__title">
                Mis Podcast
            </div>
            <div class="phi-home__menu">
                <PhiImageCard
                    v-for="podcast in myChannels"
                    :id="podcast.id"
                    :key="podcast.id"
                    :image="podcast.image"
                    :title="podcast.title"
                    :fav="isFav(podcast.id)"
                    @onStar="toggleFav"
                    @onNext="goTo"
                />
            </div>
        </div>
        <div class="phi-home__wrapper">
            <div class="phi-home__title">
                Los Podcasts
            </div>
            <div class="phi-home__menu">
                <PhiImageCard
                    v-for="podcast in channels"
                    :id="podcast.id"
                    :key="podcast.id"
                    :image="podcast.image"
                    :title="podcast.title"
                    :fav="isFav(podcast.id)"
                    @onStar="toggleFav"
                    @onNext="goTo"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import { ref, computed } from 'vue'
    import { useStore } from 'vuex'
    import api from '@/api'
    import PhiHeader from '@/components/Commons/Header.vue'
    import PhiImageCard from '@/components/Cards/Image.vue'
    import { getChannels } from '@/services/channels'
    import { useRouter } from 'vue-router'


    export default {
        components: {
            PhiHeader,
            PhiImageCard
        },
        setup () {
            const store = useStore()
            const router = useRouter()
            const posts = ref([])
            const favs = computed(() => store.state.channels.values)
            const channels = ref(getChannels())
            const isFav = (id) => {
                return favs.value.includes(id)
            }
            const getMyChannels = () => {
                return channels.value.filter((channel) =>isFav(channel.id))
            }
            const myChannels = ref(getMyChannels())

            const toggleFav = (name, state) => {
                store.dispatch(`channels/${state ? 'remove' : 'add'}`, name)
            }

            const goTo = (name) => {
                router.push({ name: 'podcast', params: { id: name } })
            }

            const mapItem = item => ({
                id: item.id,
                title: item.snippet.title,
                image: item.snippet.thumbnails.maxres?.url,
                date: item.publishedAt
            })
            if (import.meta.env.PROD) {
                api.post.byChannel('movidas').then((data) => {
                    posts.value = data.data.items.map(item => mapItem(item))
                })
            } else {
                posts.value = [
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "-vpC4uueNEYGqMDxAXLsHDYNb58",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLk93TkE3cTlkUzRV",
                        "snippet": {
                            "publishedAt": "2021-04-16T14:28:14Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Gente que tuitea cosas x13 | @PabloSobrado7",
                            "description": "En el decimocuarto podcast de Gente que tuitea cosas tenemos al amo del troleo, tótem del retuit y top 3 de personas gallegas más conocidas que nunca se han dedicado al tráfico de drogas Pablo Sobrado. Por cierto, un saludo para él. \n\nREDES SOCIALES DEL PROGRAMA/PRESENTADORES (CON URLs):\n\nhttps://twitter.com/GenteQueTuitea_\nhttps://twitter.com/QTorresBalao/\nhttps://twitter.com/RomeGulere/\nhttps://twitter.com/manueldpastrana \n\nhttps://www.instagram.com/gentequetuitea_/\nhttps://www.instagram.com/qtorresbalao/\nhttps://www.instagram.com/romegulere/ \n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/OwNA7q9dS4U/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/OwNA7q9dS4U/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/OwNA7q9dS4U/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/OwNA7q9dS4U/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/OwNA7q9dS4U/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 0,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "OwNA7q9dS4U"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "FBMDgJ2gL_zBzDe1y9FWnWhFtTo",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLmdVRlAwMTRfVFR3",
                        "snippet": {
                            "publishedAt": "2021-04-16T10:03:11Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "📺F&T💃🏼 x29 | 🎙️ DENLE UN CONCURSO A LUIS FABRA 📺",
                            "description": "Hoy en ‘Flamenca y Tapete’, tu podcast sobre la caja tonta en el que rajamos de lo que nos ha hecho la tele y lo que deseamos hacerle nosotros a ella, nos visita Luis Fabra, guionista, actor y voz de \"El castillo de Takeshi\" con quien hablamos de concursos, del estreno de Love Island y ¡del retorno de Masterchef! \n\nY al final, como estamos hartos de escuchar que vuelve \"Allá tú\" pero después nanai, ¡Hemos recreado el concurso!\n¡GRACIAS POR SINTONIZAR!\n\n#TV #Televisión #Masterchef #Allátú #LoveIsland\n\n📺 Cuatro teleadictos se unen para rajar de la caja tonta, de lo que nos ha hecho y de lo que le hacemos nosotros a ella.\nCon Ana Bravo, Sonia Mangas, Carles Cuevas, Nico López y nuestra mascota, Bruce Wayne. 💃🏼\n\n¡Síguenos!\nInstagram → https://www.instagram.com/flamencaytapete/\nTwitter → https://twitter.com/flamencaytapete\n\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/gUFP014_TTw/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/gUFP014_TTw/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/gUFP014_TTw/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/gUFP014_TTw/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/gUFP014_TTw/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 1,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "gUFP014_TTw"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "e5xz4F-U6d8Jv7JtEfEszeuw06A",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLmVzZjAtek4tODhJ",
                        "snippet": {
                            "publishedAt": "2021-04-15T17:02:39Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "La Paletada (de hacer un podcast) x42 | Carles Cuevas",
                            "description": "La Paletada de interpretar tus sueños. La Paletada de vestirte de blanco y celebrar una fiesta ibicenca en Toledo. La Paletada de preguntar qué tal te ha ido la actuación a tus amigos. Y sobre todo, la Paletada de Carles Cuevas de llevarse a su maravilloso chihuahua Bruce y que sea el protagonista del póscar.\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/esf0-zN-88I/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/esf0-zN-88I/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/esf0-zN-88I/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/esf0-zN-88I/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/esf0-zN-88I/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 2,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "esf0-zN-88I"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "XSib50ZqbEoAXaJvFmemP3wDI1E",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLkhJaF9abWFDSDZN",
                        "snippet": {
                            "publishedAt": "2021-04-15T08:07:39Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Script Fighters x10 | Porra de muertes en The Suicide Squad",
                            "description": "Phi Beta Lambda Podcast acoge su peor concurso. Un debate cinéfilo en el que unos amigos frikis se ponen violentos hablando de sus cosas en La Llama Store.\n\nEsta semana no discutimos entre nosotros y nos unimos para decir qué personaje de The Suicide Squad morirán y en qué orden.\n\n#ScriptFighters, #TheSuicideSquad, #deathorder #TierList \n\nInstagram → https://www.instagram.com/script_fighters/\nTwitter → https://twitter.com/ScriptFighters\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/HIh_ZmaCH6M/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/HIh_ZmaCH6M/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/HIh_ZmaCH6M/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/HIh_ZmaCH6M/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/HIh_ZmaCH6M/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 3,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "HIh_ZmaCH6M"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "QoDy4T5Dwb4Wzq84_WCy36yCO4M",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLlN5Vkx5NWl0Z0Zn",
                        "snippet": {
                            "publishedAt": "2021-04-13T11:03:20Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Minority Report x18 | Con Miguel Campos y Andrés Costa",
                            "description": "Esta semana nos visitan dos humoristas para hablar de temas como La Resistencia, el Bitcoin y el barrio de Lavapiés. Presenta Adel Aït Zineb.\n\nMinority Report, es un programa presentado por Adel Aït Zineb en el que se da un espacio y una voz a las minorías del mundo artístico y del entretenimiento para hablar de sus proyectos y para que puedan expresar sus ideas y preocupaciones libremente.\n\nRedes sociales:\n\nAdel Aït Zineb (IG) – https://www.instagram.com/adel.ait.zineb/\n\nMiguel Campos (IG) - https://www.instagram.com/mcamposgalan/ \n\nMiguel Campos (TW) - https://twitter.com/mcamposgalan \n\nAndrés Costa (IG) - https://www.instagram.com/andresnotieneinsta/ \n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/SyVLy5itgFg/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/SyVLy5itgFg/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/SyVLy5itgFg/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/SyVLy5itgFg/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/SyVLy5itgFg/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 4,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "SyVLy5itgFg"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "Ic7TmLhq8xy-x5-fVMIX2tjJG7Q",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLlNCZEhSMUFsdUV3",
                        "snippet": {
                            "publishedAt": "2021-04-12T11:55:02Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "El sótano de la Galván x05 | Con Mar Abascal - La llamada (de la farándula)",
                            "description": "Quinto episodio de una serie de 20 charlas con artistas que consiguieron lo que tienen desde lo más bajo. Hoy tenemos a Mar Abascal, actriz, cómica y ahora, Sor Bernarda.\n\n¡Apóyanos en Patreon para acceder a contenidos exclusivos y programas que solo haremos en esta plataforma!\nhttps://www.patreon.com/patriciagalvan\n\n\"El sótano de la Galván\" el podcast del mundo de la farándula que mezcla confesiones, actuaciones en directo y reportajes callejeros con toda la poca vergüenza del mundo. Idiomas andaluz y americano a ratos.\n\nRedes sociales del programa:\nTwitter →  https://twitter.com/Patgalvan\nInstagram →  https://www.instagram.com/pattgalvan/\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/SBdHR1AluEw/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/SBdHR1AluEw/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/SBdHR1AluEw/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/SBdHR1AluEw/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/SBdHR1AluEw/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 5,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "SBdHR1AluEw"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "pWuD14NPunNMmlDk8vfptDpHdmM",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLm1GV0ZqdHBRcHVn",
                        "snippet": {
                            "publishedAt": "2021-04-10T18:01:10Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Movidas Minúsculas x80 | Mapas, mentiras bélicas y continentes hundidos",
                            "description": "Brújulas, el Sol y otras estrellas, una persona a la que preguntas por la calle, todos ellos te ayudan a orientarte. Sin embargo, nosotros hoy decidimos dedicarle el programa a los mapas. Los dibujitos que nos permiten suspender un examen de capitales mundiales y no perdernos cuando estamos de visita en Mérida.\n\n¡Apóyanos en Patreon para acceder a contenidos exclusivos y programas que solo haremos en esta plataforma!\nhttps://www.patreon.com/MovidasMinusculas\n\n\"Movidas Minúsculas\" es el podcast humorístico e histórico de Alex Gozalo y Jorge Yorya. Un programa de importancia mayúscula.\n\nRedes sociales del programa:\nTwitter →  https://twitter.com/MovidasMinus\nInstagram →  https://www.instagram.com/movidasminusculas/\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/mFWFjtpQpug/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/mFWFjtpQpug/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/mFWFjtpQpug/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/mFWFjtpQpug/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/mFWFjtpQpug/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 6,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "mFWFjtpQpug"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "32WSddTrNZyBtbI0X5oWfJHEvxo",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLlAzQnB5M2ZjSkxV",
                        "snippet": {
                            "publishedAt": "2021-04-08T21:59:25Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "📺F&T💃🏼 x28 | 🎙️ El Efecto Rociíto y el Precio Injusto 📺",
                            "description": "Hoy en ‘Flamenca y Tapete’, tu podcast sobre la caja tonta en el que rajamos de lo que nos ha hecho la tele y lo que deseamos hacerle nosotros a ella, analizamos la vuelta de el Precio Justo, que ha creado disparidad de opiniones.\n\nReseñamos también el otro programa que se estrenó el lunes, THE DANCER, que para qué.\n\nY al final, por supuesto, hacemos un follow up sobre el terremoto de Rociíto y sus efectos en la sociedad y en la parrilla de Mediaset.\n\nNos ponemos intensas, vamos.\n\n¡GRACIAS POR SINTONIZAR!\n\n#TV #Televisión #Rociito \n\n📺 Cuatro teleadictos se unen para rajar de la caja tonta, de lo que nos ha hecho y de lo que le hacemos nosotros a ella.\n\nCon Ana Bravo, Sonia Mangas, Carles Cuevas, Nico López y nuestra mascota, Bruce Wayne. 💃🏼\n\n¡Síguenos!\n\nInstagram → https://www.instagram.com/flamencaytapete/\n\nTwitter → https://twitter.com/flamencaytapete\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/P3Bpy3fcJLU/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/P3Bpy3fcJLU/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/P3Bpy3fcJLU/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/P3Bpy3fcJLU/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/P3Bpy3fcJLU/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 7,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "P3Bpy3fcJLU"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "0JDmW_jIeyCX3qKYYe5tSDPk6_s",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLjFacGZvRllsMmk4",
                        "snippet": {
                            "publishedAt": "2021-04-05T22:27:51Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "La Paletada (de hacer un LIVE SHOW) x41",
                            "description": "La Paletada de celebrar el show en directo de tu propio podcast el pasado Domingo de Ramos.\n\nNacho y Miguel se ponen sus mejores galas (chándal - Nacho / gafas horteras - Miguel) y charlan entre ellos y con el público sobre cualquier cosa que haya sucedido en el universo conocido por ellos. Se llenó y nos pusimos muy contentos. El 10 de abril hay otra, como siempre, en El Golfo Comedy Club.\n\nENTRADAS: https://www.atrapalo.com/entradas/la-paletada-show-miguel-iribar-y-nacho-garcia-_e4857104/\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/1ZpfoFYl2i8/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/1ZpfoFYl2i8/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/1ZpfoFYl2i8/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/1ZpfoFYl2i8/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/1ZpfoFYl2i8/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 8,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "1ZpfoFYl2i8"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "kmeskywkmWdfuT_LhPl068GPr2g",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLnFQcWY2Q2NQMzZr",
                        "snippet": {
                            "publishedAt": "2021-04-05T16:03:04Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Susi Caramelo: \"Me puse el nombre a la primera\" 🍬 / Cofondecauch",
                            "description": "¿Recuerdas el paso de Susi Caramelo por Cofondecauch?\nElla y Kaco Forns hablaron de toser en el sofá, de comedia, de la vida y de las locas maneras en que llegaron a tener sus nombres artísticos.\n\nEpisodio completo →  https://youtu.be/ZJ1QKJTU-H4\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/qPqf6CcP36k/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/qPqf6CcP36k/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/qPqf6CcP36k/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/qPqf6CcP36k/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/qPqf6CcP36k/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 9,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "qPqf6CcP36k"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "LXURB2xqx2sM177GXmIYu0n_mJs",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLkFMaW00azRKcGFF",
                        "snippet": {
                            "publishedAt": "2021-04-07T12:29:19Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "El Otro Día x66 | \"¡Mira, un gato!\" - con Rober Bodegas",
                            "description": "Señoras, señores, deténganse, no circulen, aquí hay algo que ver. En este programa de \"El Otro Día\" presentado por Galder Varas y Urko Vázquez sale ROBER BODEGAS. Aprovechen la ocasión, no sean tímidos, acérquense, pongan la velocidad del video a 0,75 para que les dure más y disfruten del tiempo a buen pasar, la vida no es un camino, la vida es el momento.\n\nRedes sociales del programa: \nInstagram → https://www.instagram.com/elotrodiapodcast/\nTwitter → https://twitter.com/ElOtroDiaPod\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/ALim4k4JpaE/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/ALim4k4JpaE/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/ALim4k4JpaE/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/ALim4k4JpaE/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/ALim4k4JpaE/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 10,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "ALim4k4JpaE"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "vYfgt_9a1LbeCc-8QMvA9-pE_0A",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLjhoY1FFOWk4WkxR",
                        "snippet": {
                            "publishedAt": "2021-04-06T08:21:35Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Minority Report x17 | con Laura del Val, Carla Sadornil y Dani Alés",
                            "description": "Esta semana nos visitan tres humoristas para hablar de la escena de la comedia en Estados Unidos y también de polémicas varias. Presenta Adel Aït Zineb.\n\nMinority Report, es un programa presentado por Adel Aït Zineb en el que se da un espacio y una voz a las minorías del mundo artístico y del entretenimiento para hablar de sus proyectos y para que puedan expresar sus ideas y preocupaciones libremente.\n\nRedes sociales:\n\nAdel Aït Zineb (IG) – https://www.instagram.com/adel.ait.zineb/\n\nCarla Sadornil (IG) - https://www.instagram.com/carlasadornil/ \n\nLaura Del Val (IG) - https://www.instagram.com/lauradelvalcomica/ \n\nDani Alés (IG) - https://www.instagram.com/daniales_/ \n\nDani Alés (TW) - https://twitter.com/daniales_ \n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/8hcQE9i8ZLQ/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/8hcQE9i8ZLQ/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/8hcQE9i8ZLQ/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/8hcQE9i8ZLQ/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/8hcQE9i8ZLQ/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 11,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "8hcQE9i8ZLQ"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "8R4RJeidNm-cwMofo0asquuVyBk",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLkJtRV96c1hlUlJr",
                        "snippet": {
                            "publishedAt": "2021-04-05T13:59:49Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Palabrotes x16 | Meme",
                            "description": "Hoy hablamos de la palabra Meme. Algo tan de moda e instaurado desde hace muchos años que sin embargo pasa de moda rápidamente. La vida eh, qué cosa. ¿Cuáles fueron los primeros memes registrados? Igual te resolvemos la duda, igual no, pero qué buena gente somos.\n\nRedes sociales del programa:\nTwitter → https://twitter.com/Palabrotxs\nInstagram → https://www.instagram.com/palabrotxs/\nGráficas → https://www.instagram.com/superfoner/\nMúsica de “Txuminos Imberbes”: https://txuminosimberbes.bandcamp.com/\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/BmE_zsXeRRk/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/BmE_zsXeRRk/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/BmE_zsXeRRk/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/BmE_zsXeRRk/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/BmE_zsXeRRk/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 12,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "BmE_zsXeRRk"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "ePYw0gCPqpzhJ7XoE4oz4_bcNFg",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLnlYdkpOLVBNUWk0",
                        "snippet": {
                            "publishedAt": "2021-04-05T14:04:15Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "👾 Comedy Con x01 | \"Los FUNKOS son BASURA\" con ANTONIO CASTELO",
                            "description": "👾 Descubre el lado más friki de nuestro invitado: Antonio Castelo\n\n¡Primer episodio de tu Late Show Friki! ¡Star Wars, juegos, comics y cualquier cosa de la cultura nerd tiene cabida en la Comedy Con!\n\nIG → https://instagram.com/comedycon_\nTwitch → https://www.twitch.tv/comedycon_\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/yXvJN-PMQi4/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/yXvJN-PMQi4/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/yXvJN-PMQi4/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/yXvJN-PMQi4/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/yXvJN-PMQi4/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 13,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "yXvJN-PMQi4"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "G5Sf8wLkdYuJQofRJPuJXM8w9-E",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLkFObFhSTDlEZ1c4",
                        "snippet": {
                            "publishedAt": "2021-04-05T14:00:00Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "El sótano de la Galván x04 | Cómo ser guionista con Marta González de Vega (AKA con la puta ama)",
                            "description": "Cuarto episodio de una serie de 20 charlas con artistas que consiguieron lo que tienen desde lo más bajo. Hoy tenemos a la guionista mas taquillera de los dos últimos años.\n\n¡Apóyanos en Patreon para acceder a contenidos exclusivos y programas que solo haremos en esta plataforma!\nhttps://www.patreon.com/patriciagalvan\n\n\"El sótano de la Galván\" el podcast del mundo de la farándula que mezcla confesiones, actuaciones en directo y reportajes callejeros con toda la poca vergüenza del mundo. Idiomas andaluz y americano a ratos.\n\nRedes sociales del programa:\nTwitter →  https://twitter.com/Patgalvan\nInstagram →  https://www.instagram.com/pattgalvan/\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/ANlXRL9DgW8/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/ANlXRL9DgW8/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/ANlXRL9DgW8/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/ANlXRL9DgW8/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/ANlXRL9DgW8/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 14,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "ANlXRL9DgW8"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "cQtFRXgQvCeJQJePVZW4lb6S-hs",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLm5rdVVrS1l1aFVV",
                        "snippet": {
                            "publishedAt": "2021-04-03T07:05:38Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "📺F&T💃🏼 x27 | 🎙️ ESPECIAL ROCIÍTO 📺",
                            "description": "Hoy en ‘Flamenca y Tapete’, tu podcast sobre la caja tonta en el que rajamos de lo que nos ha hecho la tele y lo que deseamos hacerle nosotros a ella, analizamos pormenorizadamente el evento televisivo de la temporada: “ROCÍO, CONTAR LA VERDAD PARA SEGUIR VIVA”\n\nHacemos un repaso a las noticias televisivas semanales, desgranamos los finales de MAESTROS DE LA COSTURA y LA ISLA DE LAS TENTACIONES y nos metemos de lleno en opinar sobre ROCÍO, CONTAR LA VERDAD PARA SEGUIR VIVA y el impacto televisivo del mismo en la sociedad y en la prensa del corazón.\n\n¡GRACIAS POR SINTONIZAR!\n\n#TV #Televisión #Rociito \n\n📺 Cuatro teleadictos se unen para rajar de la caja tonta, de lo que nos ha hecho y de lo que le hacemos nosotros a ella.\nCon Ana Bravo, Sonia Mangas, Carles Cuevas, Nico López y nuestra mascota, Bruce Wayne. 💃🏼\n\n¡Síguenos!\nInstagram → https://www.instagram.com/flamencaytapete/\nTwitter → https://twitter.com/flamencaytapete\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/nkuUkKYuhUU/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/nkuUkKYuhUU/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/nkuUkKYuhUU/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/nkuUkKYuhUU/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/nkuUkKYuhUU/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 15,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "nkuUkKYuhUU"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "Hb1fHO0HzNDCPIqCZVSCWmrbMWY",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLjQ2UGp0cXVYRnpF",
                        "snippet": {
                            "publishedAt": "2021-04-02T17:08:23Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "El Gran Podcast de la Oca x02 | Luis Larrodera",
                            "description": "¿Quién puede decir que haya presentado el “UN, DOS, TRES”, que haya sustituido al mítico Jordi Hurtado en “SABER Y GANAR”, que haya cogido el relevo a Constantino Romero en “ALTA TENSIÓN” y que en el camino haya presentado muchos concursos más? Sólo un presentador en el mundo. ¡Hoy, en nuestro programa, el gran Luis Larrodera!\n\nPresentado por Luis Fabra, ‘El Gran Podcast de la oca’ es un programa de entrevistas a presentadores de concursos en el que los concursantes son ellos. Charlamos y jugamos a la Oca; no hay más. Nuestro objetivo: que algún día nos visite el gran Emilio Aragón.\n\nDiseño logo: Rafael Jurado\nInstagram → https://instagram.com/raffitidesign\nTwitter → https://twitter.com/RaffitiDesign \n\nAnimación cabecera: Aarón Aguilera\nInstagram → https://instagram.com/aaron_noseque\nTwitter  → https://twitter.com/Aaron_Noseque \n\nPresentador: Luis Fabra\nInstagram →  https://www.instagram.com/luisfabrafuis/\nTwitter →  https://twitter.com/luisfabrafuis \n\nMusic by : MagicMusicStudio\nComposer: Iros Young\nTrack name: Circus\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/46PjtquXFzE/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/46PjtquXFzE/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/46PjtquXFzE/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/46PjtquXFzE/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/46PjtquXFzE/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 16,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "46PjtquXFzE"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "FNMqMJY4q971MldI93jMfAEjDO0",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLkRyQ1VBbDRNMElR",
                        "snippet": {
                            "publishedAt": "2021-04-01T15:13:04Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "La Paletada (de hacer un podcast) x40 | No pasa nada",
                            "description": "Ser mayor, ver el Snyder's Cut y el Mandaloriano, lámparas con forma de metralleta, tratar bien a los camareros, repetición de anécdotas anteriores, muertes y caca... todo eso fue antes del show con público del pasado día 28 en El Golfos Comedy, que desde aquí decimos que nos hizo muy felices. Deseando volver el próximo el 10 de abril.\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/DrCUAl4M0IQ/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/DrCUAl4M0IQ/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/DrCUAl4M0IQ/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/DrCUAl4M0IQ/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/DrCUAl4M0IQ/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 17,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "DrCUAl4M0IQ"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "wmC9Qkk-qTs5EoopQV6DjxPLF8w",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLl9yV3R6WFBQNUtv",
                        "snippet": {
                            "publishedAt": "2021-04-01T15:16:22Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Script Fighters x09 | El peor villano del MCU, Gina Carano y directores españoles",
                            "description": "Phi Beta Lambda Podcast acoge su peor concurso. Un debate cinéfilo en el que unos amigos frikis se ponen violentos hablando de sus cosas en La Llama Store.\n\nEn el programa que consiste en no respetar las opiniones de los otros le haremos una película a Tarantino, debatimos sobre los cineastas de Españita y discutimos sobre quién es el peor villano del MCU\n\n#ScriptFighters, #MCUVillain, #cineespañol #Tarantino #GinaCarano\n\n¡Síguenos!\nInstagram → https://www.instagram.com/script_fighters/\nTwitter → https://twitter.com/ScriptFighters\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/_rWtzXPP5Ko/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/_rWtzXPP5Ko/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/_rWtzXPP5Ko/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/_rWtzXPP5Ko/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/_rWtzXPP5Ko/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 18,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "_rWtzXPP5Ko"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "UMHDiqN5afYVFoT60LfdpjBBpus",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLmtsZHR2NzN5cGZj",
                        "snippet": {
                            "publishedAt": "2021-03-31T16:48:35Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Cofondecauch x100 | Nacho Vigalondo: Los felices 100",
                            "description": "Programa 100 con invitado de 10. El director y showman favorito de PhiBeta, viene a desplegar todo su arsenal de creatividad y buenrollismo, under “The influence”. Gracias vercuchantes por acompañarnos en cada volada. Seguimos dándole. Este peta no se acaba.\n\n¡Programa patrocinado por Flower Farm! Recordad que tenéis un 15% de descuento en su web utilizando el código COFONDECAUCH.\nhttp://flowerfarm.es\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com\n\n► Music Credit: LAKEY INSPIRED\nTrack Name: \"Better Days\"\nMusic By: LAKEY INSPIRED @ https://soundcloud.com/lakeyinspired\nOriginal upload HERE - https://www.youtube.com/watch?v=RXLzvo6kvVQ\nOfficial \"LAKEY INSPIRED\" YouTube Channel HERE - https://www.youtube.com/channel/UCOmy8wuTpC95lefU5d1dt2Q\nLicense for commercial use: Creative Commons Attribution 3.0 Unported \"Share Alike\" (CC BY-SA 3.0) License.\nFull License HERE - https://creativecommons.org/licenses/by-sa/3.0/legalcode\nMusic promoted by NCM https://goo.gl/fh3rEJ",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/kldtv73ypfc/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/kldtv73ypfc/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/kldtv73ypfc/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/kldtv73ypfc/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/kldtv73ypfc/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 19,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "kldtv73ypfc"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "2mp7cji8bpdqEtjJL6Kb3Fqc53U",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLk9KZlpsWktmZGpV",
                        "snippet": {
                            "publishedAt": "2021-03-30T09:46:41Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Minority Report x16 | con Rober Bodegas, Himar Armas y Andrés Costa",
                            "description": "Esta semana nos visitan tres humoristas para hablar de la escena de la comedia en España. Presenta Adel Aït Zineb.\n\nMinority Report, es un programa presentado por Adel Aït Zineb en el que se da un espacio y una voz a las minorías del mundo artístico y del entretenimiento para hablar de sus proyectos y para que puedan expresar sus ideas y preocupaciones libremente.\n\nRedes sociales:\n\nAdel Aït Zineb (IG) – https://www.instagram.com/adel.ait.zineb/\n\nRober Bodegas (IG) - https://www.instagram.com/roberbodegas/ \n\nRober Bodegas (TW) - https://twitter.com/roberbodegas\n\nAndrés Costa (IG) - https://www.instagram.com/andresnotieneinsta/ \n\nHimar Armas (IG) - https://www.instagram.com/himararmas/ \n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/OJfZlZKfdjU/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/OJfZlZKfdjU/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/OJfZlZKfdjU/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/OJfZlZKfdjU/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/OJfZlZKfdjU/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 20,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "OJfZlZKfdjU"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "3h7jkRD3o-qZd7I1clzdqPYj_IQ",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLlA0MTZsXzFFUHBj",
                        "snippet": {
                            "publishedAt": "2021-03-28T18:05:24Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Movidas Minúsculas x79 | Ríos, enanos gallegos y subcontratas horribles",
                            "description": "Seguimos nuestro curso como las aguas discurren por un caudaloso río. Y es que venimos a hablar de eso, de ríos. Con numerosos afluentes continuamos nuestro ciclo de geografía hablando de ríos patrios como el Manzanares, puentes que los cruzan, seres subterráneos, Da Vinci, Maquiavelo, ríos de sangre... ¡Menudo torrente de historias el de esta semana en Movidas Minúsculas!\n\n¡Apóyanos en Patreon para acceder a contenidos exclusivos y programas que solo haremos en esta plataforma!\nhttps://www.patreon.com/MovidasMinusculas\n\n\"Movidas Minúsculas\" es el podcast humorístico e histórico de Alex Gozalo y Jorge Yorya. Un programa de importancia mayúscula.\n\nRedes sociales del programa:\nTwitter →  https://twitter.com/MovidasMinus\nInstagram →  https://www.instagram.com/movidasminusculas/\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/P416l_1EPpc/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/P416l_1EPpc/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/P416l_1EPpc/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/P416l_1EPpc/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/P416l_1EPpc/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 21,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "P416l_1EPpc"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "SAl0a5KiYl4SOHa6aciAR06T6kM",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLnFld1FRRXRWeXA4",
                        "snippet": {
                            "publishedAt": "2021-03-27T22:59:33Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "📺F&T💃🏼 x26 | 😋 LA RULETA RUSA DE CHICOTE 🤢",
                            "description": "Hoy en ‘Flamenca y Tapete’, tu podcast sobre la caja tonta en el que rajamos de lo que nos ha hecho la tele y lo que deseamos hacerle nosotros a ella, salimos con el estómago lleno.\n\nHacemos un repaso a las noticias televisivas semanales, probamos comida de restaurantes que participaron en \"Pesadilla en la cocina\" de Chicote sin morir en el intento y conocemos un reality holandés muy loco: Utopía.\n\n¡GRACIAS POR SINTONIZAR!\n\n#TV #Televisión #Chicote #Rociito \n\nCuatro teleadictos se unen para rajar de la caja tonta, de lo que nos ha hecho y de lo que le hacemos nosotros a ella.\nCon Ana Bravo, Sonia Mangas, Carles Cuevas, Nico López y nuestra mascota, Bruce Wayne. ¡Y Nacho Di Llama al control de realización! 📺💃🏼\n\n¡Síguenos!\nInstagram → https://www.instagram.com/flamencaytapete/\nTwitter → https://twitter.com/flamencaytapete\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/qewQQEtVyp8/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/qewQQEtVyp8/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/qewQQEtVyp8/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/qewQQEtVyp8/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/qewQQEtVyp8/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 22,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "qewQQEtVyp8"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "I-L6BxJ0ouGzl6vzU6bP3mwhfEQ",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLkhvZnRlcmZoQl9F",
                        "snippet": {
                            "publishedAt": "2021-03-26T08:20:46Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Gente que tuitea cosas x13 | @Coronavid19",
                            "description": "En el decimotercer podcast de Gente que tuitea cosas tenemos al auténtico CORONAVIRUS de Twitter, alias @coronavid19, el tuitero revelación de la temporada, el Ansu Fati de las redes, que nos hablará de su nuevo libro “Cómo acabar sigilosamente con la humanidad”, los haters, sus inicios, sobre Rociíto y muchas pamplinas virales más, jaja, “virales”.\n\nREDES SOCIALES DEL PROGRAMA/PRESENTADORES (CON URLs):\n\nhttps://twitter.com/GenteQueTuitea_\nhttps://twitter.com/QTorresBalao/\nhttps://twitter.com/RomeGulere/\nhttps://twitter.com/manueldpastrana \n\nhttps://www.instagram.com/gentequetuitea_/\nhttps://www.instagram.com/qtorresbalao/\nhttps://www.instagram.com/romegulere/ \n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/HofterfhB_E/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/HofterfhB_E/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/HofterfhB_E/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/HofterfhB_E/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/HofterfhB_E/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 23,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "HofterfhB_E"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "ThmRioX4bSOzs_daJKEuLeOsdSc",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLlRBQlEwVk04UlNr",
                        "snippet": {
                            "publishedAt": "2021-03-22T22:01:13Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "La Paletada (de hacer un podcast) x39 | La Paletada al Sol",
                            "description": "José Feliciano y Resacón en las Vegas, el crossover que nadie esperaba. La paletada de las gafas de sol de clip y la paletada de decir que has encontrado algo más barato que nadie o que no has estudiado. También hablaremos de PCR anales y lo que surja, avisados estáis.\n\nEntradas a la Paletada Live Show el próximo domingo 28 de Marzo.\nhttps://www.atrapalo.com/entradas/los-monologos-de-el-golfo-comedy-club-en-madrid_e4855895/fecha-28-03-2021/#listado_fechas\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/TABQ0VM8RSk/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/TABQ0VM8RSk/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/TABQ0VM8RSk/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/TABQ0VM8RSk/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/TABQ0VM8RSk/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 24,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "TABQ0VM8RSk"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "sA_W3rc7g2HW_lPRaxNllDKy9PQ",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLkVRd2h0TDAwWTNR",
                        "snippet": {
                            "publishedAt": "2021-03-22T22:02:30Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Cofondecauch x99 | Carolina Noriega + Isma Juárez: Sexo, risas y reportajes",
                            "description": "Una cómica australiana y un reportero mallorquín se sientan a fumar hierba en un podcast de otro planeta. Si en este programa no hacemos por unir culturas, yo ya no sé.\n\n¡Programa patrocinado por Flower Farm! Recordad que tenéis un 15% de descuento en su web utilizando el código COFONDECAUCH.\nhttp://flowerfarm.es\n\nRedes sociales del programa:\nTwitter → https://twitter.com/cofondecauch\nInstagram →  https://www.instagram.com/cofondecauch/\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com\n\n► Music Credit: LAKEY INSPIRED\nTrack Name: \"Better Days\"\nMusic By: LAKEY INSPIRED @ https://soundcloud.com/lakeyinspired\nOriginal upload HERE - https://www.youtube.com/watch?v=RXLzvo6kvVQ\nOfficial \"LAKEY INSPIRED\" YouTube Channel HERE - https://www.youtube.com/channel/UCOmy8wuTpC95lefU5d1dt2Q\nLicense for commercial use: Creative Commons Attribution 3.0 Unported \"Share Alike\" (CC BY-SA 3.0) License.\nFull License HERE - https://creativecommons.org/licenses/by-sa/3.0/legalcode\nMusic promoted by NCM https://goo.gl/fh3rEJ",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/EQwhtL00Y3Q/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/EQwhtL00Y3Q/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/EQwhtL00Y3Q/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/EQwhtL00Y3Q/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/EQwhtL00Y3Q/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 25,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "EQwhtL00Y3Q"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "UYhXa-qmh7z3DQhDlhoHPCAZ2hA",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLnd3ZTdtMVpzVnRn",
                        "snippet": {
                            "publishedAt": "2021-03-24T14:45:59Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "El Otro Día x65 | La Ruina con Tomás Fuentes e Ignasi Taltavull",
                            "description": "Este es el programa número 65 de El Otro Día Podcast presentado por Galder Varas y Urko Vázquez y ya estáis perdiendo el tiempo en la caja de descripción. Hoy no hay bromas aquí, maldita sea, prestad atención; HAN VENIDO TOMÁS FUENTES E IGNASI TALTAVULL. Titanes todopoderosos, capos de la comedia, referentes, faros para los fareros y cobijo para los huérfanos de sonrisa. Con sólo uno de sus chistes se podría hacer reír a un pueblo entero de África. No perdérselos. Casi muteamos a Galder y a Urko para ofrecéroslo más neto.\n\nRedes sociales del programa: \nInstagram → https://www.instagram.com/elotrodiapodcast/\nTwitter → https://twitter.com/ElOtroDiaPod\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/wwe7m1ZsVtg/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/wwe7m1ZsVtg/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/wwe7m1ZsVtg/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/wwe7m1ZsVtg/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/wwe7m1ZsVtg/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 26,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "wwe7m1ZsVtg"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "k1g9GT9urXmjSqKfypVuiUd_gD4",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLmZBbm9qMXZUQTZB",
                        "snippet": {
                            "publishedAt": "2021-03-22T17:07:56Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Cambiando de Tercio x58 | Toma 3 - Wandavisión y La Liga de la Justicia",
                            "description": "En Toma 3 nos hemos zampado todos los capítulos de Wandavisión y las cuatro horitas de La Liga de la Justicia, The Snyder Cut, dispuestos a comentarla con varias cervezas de por medio. A pesar de los esfuerzos de Marta y Miguel, parece que solo Santi Alverú se ha enterado de todo, si es que enterarse de todo es posible. También incluimos un extra comentando la película Relic, una cinta de terror psicológico que nos ha gustado bastante.\n\nRedes sociales del programa:\nTwitter → https://twitter.com/miguel_iribar\nInstagram → https://www.instagram.com/migueliribar/\nInstagram de \"Cambiando de Tercio\" → https://www.instagram.com/cambiandodetercio/\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/fAnoj1vTA6A/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/fAnoj1vTA6A/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/fAnoj1vTA6A/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/fAnoj1vTA6A/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/fAnoj1vTA6A/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 27,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "fAnoj1vTA6A"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "F2lLZPJEYM_qOlcEDnLHxnIarYo",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLkZuaU9NMXhSTXA4",
                        "snippet": {
                            "publishedAt": "2021-03-23T11:28:41Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Minority Report x15 | con LIL PIBI",
                            "description": "Esta semana nos visita LIL PIBI, un cantante de origen camerunés para hablar del trap, el drill y la calle. Presenta Adel Aït Zineb.\n\nMinority Report, es un programa presentado por Adel Aït Zineb en el que se da un espacio y una voz a las minorías del mundo artístico y del entretenimiento para hablar de sus proyectos y para que puedan expresar sus ideas y preocupaciones libremente.\n\nRedes sociales:\n\nAdel Aït Zineb (IG) – https://www.instagram.com/adel.ait.zineb/\n\nLIL PIBI (IG) - https://www.instagram.com/lilpibi.bk70/ \n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/FniOM1xRMp8/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/FniOM1xRMp8/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/FniOM1xRMp8/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/FniOM1xRMp8/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/FniOM1xRMp8/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 28,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "FniOM1xRMp8"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "FnYddRgdKTZvbdr0zUv8KCljsIY",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLnZDeTNjMm1sSjV3",
                        "snippet": {
                            "publishedAt": "2021-03-22T11:14:40Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Palabrotes x15 | Virgen",
                            "description": "La palabra de esta quincena podría haber dado rienda suelta al cuñado que todos llevamos dentro, pero no. Bueno, no tanto. Un poco. No mucho. Pero también charlamos de Madona, la semana santa y las monjas con tik tok. Gloria bendita.\n\nRedes sociales del programa:\nTwitter → https://twitter.com/Palabrotxs\nInstagram → https://www.instagram.com/palabrotxs/\nGráficas → https://www.instagram.com/superfoner/\nMúsica de “Txuminos Imberbes”: https://txuminosimberbes.bandcamp.com/\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/vCy3c2mlJ5w/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/vCy3c2mlJ5w/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/vCy3c2mlJ5w/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/vCy3c2mlJ5w/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/vCy3c2mlJ5w/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 29,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "vCy3c2mlJ5w"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "iE89RtTZdTAx3tSRJXLLGf8grGk",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLi1KX3NMOC1iNGI0",
                        "snippet": {
                            "publishedAt": "2021-03-22T11:15:55Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "El sótano de la Galván x03 | Tatiana Ballesteros “No soy fascista y otros crímenes”",
                            "description": "Tercer episodio de una serie de 20 charlas con artistas que consiguieron lo que tienen desde lo más bajo. \n\n¡Apóyame en Patreon para acceder a contenidos exclusivos y programas que solo haremos en esta plataforma!\nhttps://www.patreon.com/patriciagalvan\n\n\"El sótano de la Galván\" el podcast del mundo de la farándula que mezcla confesiones, actuaciones en directo y reportajes callejeros con toda la poca vergüenza del mundo. Idiomas andaluz y americano a ratos.\n\nRedes sociales del programa:\nTwitter →  https://twitter.com/Patgalvan\nInstagram →  https://www.instagram.com/pattgalvan/\n\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/-J_sL8-b4b4/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/-J_sL8-b4b4/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/-J_sL8-b4b4/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/-J_sL8-b4b4/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/-J_sL8-b4b4/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 30,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "-J_sL8-b4b4"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "ZvSO1vaHGxw31TO3m9Qs4U2b7Co",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLjIyOFUxdUtKaHBJ",
                        "snippet": {
                            "publishedAt": "2021-03-22T09:19:43Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Movidas Minúsculas x78 | Micronaciones, piratas y asaltos con helicópteros",
                            "description": "Hay lugares recónditos en el mundo que aún no has visto. Incluso algunos a los que el ser humano aún no ha llegado. Hoy hablamos de lugares conocidos por todos, pero a los que unos locos pusieron otro nombre y dijeron: \"pues esto es mío\". Hoy en Movidas Minúsculas te presentamos algunas micronaciones, o como hemos querido llamarlas nosotros: naciones minúsculas.\n\n¡Apóyanos en Patreon para acceder a contenidos exclusivos y programas que solo haremos en esta plataforma!\nhttps://www.patreon.com/MovidasMinusculas\n\n\"Movidas Minúsculas\" es el podcast humorístico e histórico de Alex Gozalo y Jorge Yorya. Un programa de importancia mayúscula.\n\nRedes sociales del programa:\nTwitter →  https://twitter.com/MovidasMinus\nInstagram →  https://www.instagram.com/movidasminusculas/\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/228U1uKJhpI/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/228U1uKJhpI/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/228U1uKJhpI/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/228U1uKJhpI/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/228U1uKJhpI/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 31,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "228U1uKJhpI"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "6j077PYeZxY7sMbRYQLo3_AotVY",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLmxCb3dZV0Q1dlRF",
                        "snippet": {
                            "publishedAt": "2021-03-19T12:24:13Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "📺F&T💃🏼 x25 | 🎤ÁLVARO VELASCO AMA “LOS SERRANO”💃🏼",
                            "description": "Hoy en ‘Flamenca y Tapete’, tu podcast sobre la caja tonta en el que rajamos de lo que nos ha hecho la tele y lo que deseamos hacerle nosotros a ella, traemos a Álvaro Velasco, guionista, periodista, futbolero y PAQUETE.\n\nHacemos un repaso a su currículum y a sus éxitos, pasamos de sus fracasos, hablamos un poco de FÚTBOL,  y ANALIZAMOS “LOS SERRANO” (bueno, los analiza él, que es un fiera que vino preparadísimo). Y cómo no, el TFG de Nico sobre el gran héroe de la serie: SANTI.\n\n¡GRACIAS POR SINTONIZAR!\n\n¡Y gracias a los chicos de Ruck N Roll Shirts por la camiseta de Ana!\nAquí puedes conseguir la tuya: https://rucknroll.es/\n\n#TV #Televisión #LosSerrano\n\nCuatro teleadictos se unen para rajar de la caja tonta, de lo que nos ha hecho y de lo que le hacemos nosotros a ella.\nCon Ana Bravo, Sonia Mangas, Carles Cuevas, Nico López y nuestra mascota, Bruce Wayne. ¡Y Nacho Di Llama al control de realización! 📺💃🏼\n\n¡Síguenos!\nInstagram → https://www.instagram.com/flamencaytapete/\nTwitter → https://twitter.com/flamencaytapete\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/lBowYWD5vTE/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/lBowYWD5vTE/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/lBowYWD5vTE/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/lBowYWD5vTE/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/lBowYWD5vTE/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 32,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "lBowYWD5vTE"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "ZH71GaLxMU7P4CQxXKyN3ZRR2M8",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLmxfeUNmeGlpVkk4",
                        "snippet": {
                            "publishedAt": "2021-03-18T18:29:02Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "La Paletada (de hacer un podcast) x38 | Patricia Espejo",
                            "description": "La Paletada de ponerte 17 avisos en el despertador, La Paletada de pronunciar mal las cosas en otros idiomas por no crear rechazo social, La Paletada de ir a grabar a Late Motiv y confundir a Buenafuente con un cartón pluma. Patricia Espejo es más maja que las pesetas y nos alegró con su presencia y su saber estar. Siéntense (o quédense de pie) y disfruten.\n\nEntradas a la Paletada Live Show el próximo domingo 28 de Marzo.\nhttps://www.atrapalo.com/entradas/los-monologos-de-el-golfo-comedy-club-en-madrid_e4855895/fecha-28-03-2021/#listado_fechas\n\nEn La Paletada (de hacer un podcast) Miguel Iríbar y Nacho García comparten sus \"paletadas\" sin rubor o elegancia algunos.\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/l_yCfxiiVI8/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/l_yCfxiiVI8/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/l_yCfxiiVI8/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 33,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "l_yCfxiiVI8"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "B2-f5O6rdnSSkXF6O6_wF1NwR8s",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLjBHM2FDa05venJr",
                        "snippet": {
                            "publishedAt": "2021-03-18T13:03:31Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Script Fighters x08 | Calvos de Hollywood y la Yonkis League",
                            "description": "Phi Beta Lambda Podcast acoge su peor concurso. Un debate cinéfilo en el que unos amigos frikis se ponen violentos hablando de sus cosas en La Llama Store.\n\nTenemos carne fresca en Script Fighters para hablar de calvos de cine, películas originales de Netflix y la Yonkis League\n\n#ScriptFighters, #JusticeLeague, #Netflix #calvos\n¡Síguenos!\nInstagram → https://www.instagram.com/script_fighters/\nTwitter → https://twitter.com/ScriptFighters\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/0G3aCkNozrk/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/0G3aCkNozrk/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/0G3aCkNozrk/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/0G3aCkNozrk/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/0G3aCkNozrk/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 34,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "0G3aCkNozrk"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "mVqbTLEavPnE9wInlaIeWk442Ks",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLnozUm0tUTZVS1Zj",
                        "snippet": {
                            "publishedAt": "2021-03-17T10:07:13Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Cofondecauch x98 | Galder Varas + Urko Vázquez: EL OTRO DÍA ME FUMÉ UN PORRO",
                            "description": "Les habíamos tenido por separado, pero nunca juntos. Los ya legendarios presentadores del ya mítico podcast “El otro día” nos ofrecen una buena charla de kenke. Comedians in Cofon smoking weed. Disfruten.\n\n¡Programa patrocinado por Flower Farm! Recordad que tenéis un 15% de descuento en su web utilizando el código COFONDECAUCH.\nhttp://flowerfarm.es\n\nRedes sociales del programa:\nTwitter → https://twitter.com/cofondecauch\nInstagram →  https://www.instagram.com/cofondecauch/\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com\n\n► Music Credit: LAKEY INSPIRED\nTrack Name: \"Better Days\"\nMusic By: LAKEY INSPIRED @ https://soundcloud.com/lakeyinspired\nOriginal upload HERE - https://www.youtube.com/watch?v=RXLzvo6kvVQ\nOfficial \"LAKEY INSPIRED\" YouTube Channel HERE - https://www.youtube.com/channel/UCOmy8wuTpC95lefU5d1dt2Q\nLicense for commercial use: Creative Commons Attribution 3.0 Unported \"Share Alike\" (CC BY-SA 3.0) License.\nFull License HERE - https://creativecommons.org/licenses/by-sa/3.0/legalcode\nMusic promoted by NCM https://goo.gl/fh3rEJ",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/z3Rm-Q6UKVc/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/z3Rm-Q6UKVc/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/z3Rm-Q6UKVc/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/z3Rm-Q6UKVc/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/z3Rm-Q6UKVc/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 35,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "z3Rm-Q6UKVc"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "9Q9KaU1z56QorysStQGk0avN8iA",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLi1oU3ZfeXZHelg0",
                        "snippet": {
                            "publishedAt": "2021-03-16T11:10:25Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Minority Report x14 | con Alicia Montoya",
                            "description": "Esta semana nos visita una cómica de origen venezolano para hablar de historias de acoso, los indonesios y el amor en el mundo de la comedia.\n\nMinority Report, es un programa presentado por Adel Aït Zineb en el que se da un espacio y una voz a las minorías del mundo artístico y del entretenimiento para hablar de sus proyectos y para que puedan expresar sus ideas y preocupaciones libremente.\n\nRedes sociales:\n\nAdel Aït Zineb (IG) – https://www.instagram.com/adel.ait.zineb/\n\nAlicia Montoya (IG) - https://www.instagram.com/alicia_montoya_h/ \n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/-hSv_yvGzX4/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/-hSv_yvGzX4/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/-hSv_yvGzX4/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/-hSv_yvGzX4/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/-hSv_yvGzX4/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 36,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "-hSv_yvGzX4"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "jG3CJDWzJ5EY2moFprAbeBjDXd8",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLk1xQWozZ1JqWmpN",
                        "snippet": {
                            "publishedAt": "2021-03-15T11:54:54Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "El Ejército Fantasma 👻 / Movidas Minúsculas",
                            "description": "¡Volvió 'Movidas minúsculas' con un episodio sobre EL SONIDO patrocinado por Blue Microphones!\n\n¿Conocías \"El ejército fantasma\" estadounidense? En el último Movidas minúsculas de Alex Gozalo y Jorge Yorya dedicado al sonido cuentan cómo esta parte militar de Estados Unidos utilizó todo tipo de tretas visuales y auditivas para ganar la segunda Guerra Mundial.\n\nCapítulo especial grabado con micrófonos de Blue Microphones. Consigue el tuyo aquí: https://www.pccomponentes.com/crea-tu-propio-estudio-con-blue#utm_source=referral&utm_medium=Phi_Beta_Lamba&utm_campaign=Crea%20tu%20propio%20estilo%20con%20blue\n\nEpisodio completo → https://youtu.be/Ul-yW5Pg-S8\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/MqAj3gRjZjM/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/MqAj3gRjZjM/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/MqAj3gRjZjM/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/MqAj3gRjZjM/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 37,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "MqAj3gRjZjM"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "y38wk5wW9C_9Glf_B_hqo3gffcU",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLlBETTU3QkFBVmtZ",
                        "snippet": {
                            "publishedAt": "2021-03-15T10:06:56Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "El sótano de la Galván x02 | Con Lamine Thior y Michael Arhin - Un chat llamado “Orgías”",
                            "description": "Segundo episodio de una serie de 20 charlas con artistas que consiguieron lo que tienen desde lo más bajo. \n\n¡Apóyanos en Patreon para acceder a contenidos exclusivos y programas que solo haremos en esta plataforma!\nhttps://www.patreon.com/patriciagalvan\n\n\"El sótano de la Galván\" el podcast del mundo de la farándula que mezcla confesiones, actuaciones en directo y reportajes callejeros con toda la poca vergüenza del mundo. Idiomas andaluz y americano a ratos.\n\nRedes sociales del programa:\nTwitter →  https://twitter.com/Patgalvan\nInstagram →  https://www.instagram.com/pattgalvan/\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/PDM57BAAVkY/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/PDM57BAAVkY/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/PDM57BAAVkY/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/PDM57BAAVkY/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/PDM57BAAVkY/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 38,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "PDM57BAAVkY"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "02F39_aTogfqgiYta6G9Cpc-m6w",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLncxZ0k3ZWgxYlIw",
                        "snippet": {
                            "publishedAt": "2021-03-14T15:22:40Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Joaquin Reyes: \"Pensábamos que La Hora Chanante no se iba a emitir\" 🍻 / Cambiando de Tercio",
                            "description": "El gran Joaquín Reyes visitó Cambiando de Tercio para hablar con Miguel Iribar de sus inicios en Paramount Comedy, de Capítulo Cero, de lo mal que sienta que los candidatos a presidente de gobierno sean más jóvenes que él y mucho MUCHO más.\n\nPrograma completo →  https://youtu.be/VRyAYYXITGQ\n\nRedes sociales del programa:\nTwitter → https://twitter.com/miguel_iribar\nInstagram → https://www.instagram.com/migueliribar/\nInstagram de \"Cambiando de Tercio\" → https://www.instagram.com/cambiandodetercio/\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/w1gI7eh1bR0/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/w1gI7eh1bR0/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/w1gI7eh1bR0/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/w1gI7eh1bR0/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/w1gI7eh1bR0/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 39,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "w1gI7eh1bR0"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "tx3UJRX4JgoOpEHpyV8t63I8OEk",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLlVsLXlXNVBnLVM4",
                        "snippet": {
                            "publishedAt": "2021-03-13T19:59:14Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Movidas Minúsculas x77 | Sonidos, zombies musicales y guerreros fantasma",
                            "description": "Pueden ser ultra y pueden ser sónicos, pero son los mejores si utilizas micrófonos Blue. Hoy en Movidas Minúsculas hablamos del sonido, de cómo en las guerras se ha utilizado para invocar a los muertos y de las primeras personas que quisieron plasmarlo como si fuera una fotografía.\n\nPrograma en colaboración con micrófonos Blue. Mil gracias por esos Blue Yeti Nano, esos Radius III y esos brazos más fuertes que Yorya cuando hacía pesas.\n¡Si queréis equiparos igual de bien que los MoMis entrad aquí!\nhttp://bit.ly/BlueMicrophonesMoMi\n\n¡Apóyanos en Patreon para acceder a contenidos exclusivos y programas que solo haremos en esta plataforma!\nhttps://www.patreon.com/MovidasMinusculas\n\n\"Movidas Minúsculas\" es el podcast humorístico e histórico de Alex Gozalo y Jorge Yorya. Un programa de importancia mayúscula.\n\nRedes sociales del programa:\nTwitter →  https://twitter.com/MovidasMinus\nInstagram →  https://www.instagram.com/movidasminusculas/\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/Ul-yW5Pg-S8/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/Ul-yW5Pg-S8/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/Ul-yW5Pg-S8/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/Ul-yW5Pg-S8/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/Ul-yW5Pg-S8/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 40,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "Ul-yW5Pg-S8"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "wwaRaAUUfghBxqdszgyklXYC8lM",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLm1ZTGw0bUU0bE5v",
                        "snippet": {
                            "publishedAt": "2021-03-12T16:11:46Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "El Gran Podcast de la Oca x01 | Juanra Bonet",
                            "description": "¡Estrenamos programa a lo grande!\n\nCoincidiendo con que presenta el especial 20 años de ‘Quién quiere ser Millonario’, Juanra Bonet nos cuenta sus entresijos y también los de 'BOOM', concurso que capitanea desde hace más de 6 años. También hablaremos de cómo se vivían detrás de las cámaras otros concursos míticos suyos como 'Lo sabe o no lo sabe'. Todo esto, mientras jugamos a la oca. \n\nPresentado por Luis Fabra, ‘El Gran Podcast de la oca’ es un programa de entrevistas a presentadores de concursos en el que los concursantes son ellos. Charlamos y jugamos a la Oca; no hay más. Nuestro objetivo: que algún día nos visite el gran Emilio Aragón.\n\nDiseño logo: Rafael Jurado\nInstagram → https://instagram.com/raffitidesign\nTwitter → https://twitter.com/RaffitiDesign \n\nAnimación cabecera: Aarón Aguilera\nInstagram → https://instagram.com/aaron_noseque\nTwitter  → https://twitter.com/Aaron_Noseque \n\nPresentador: Luis Fabra\nInstagram →  https://www.instagram.com/luisfabrafuis/\nTwitter →  https://twitter.com/luisfabrafuis \n\nMusic by : MagicMusicStudio\nComposer: Iros Young\nTrack name: Circus\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/mYLl4mE4lNo/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/mYLl4mE4lNo/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/mYLl4mE4lNo/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/mYLl4mE4lNo/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/mYLl4mE4lNo/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 41,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "mYLl4mE4lNo"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "vkr9cHntFq0nmuJ2mTa8mr2fOVk",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLkRESTFaRmdzOTlj",
                        "snippet": {
                            "publishedAt": "2021-03-11T07:46:01Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "La Paletada (de hacer un podcast) x37 | El Póscar de Nacho y Miguel",
                            "description": "Nacho y Miguel hablan de la honradez, de petar en la vida, de viajes y camisetas chulas, de Doctor en Alaska y de ser jueces. Bueno, y de un montón de cosas más, no os queremos estropear la sorpresa. Ah, y anunciamos que tenemos PALETADA SHOW en GOLFOS COMEDY (Huertas 57, Madrid) el día 28 de marzo. Os esperamos MUCHO allí también.\n\nEntradas a la Paletada Live Show el próximo domingo 28 de Marzo.\nhttps://www.atrapalo.com/entradas/los-monologos-de-el-golfo-comedy-club-en-madrid_e4855895/fecha-28-03-2021/#listado_fechas\n\nEn La Paletada (de hacer un podcast) Miguel Iríbar y Nacho García comparten sus \"paletadas\" sin rubor o elegancia algunos.\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/DDI1ZFgs99c/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/DDI1ZFgs99c/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/DDI1ZFgs99c/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/DDI1ZFgs99c/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/DDI1ZFgs99c/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 42,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "DDI1ZFgs99c"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "wikRkVOgSu92AMu3TGliPAVoSwY",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLlBwNjVsdVBQbWtj",
                        "snippet": {
                            "publishedAt": "2021-03-10T17:38:20Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Cofondecauch x97 | Berta Collado: Bichones y depresiones",
                            "description": "Periodista, presentadora, actriz y persona con la tensión baja que, a pesar de ello, se atrevió a sentarse en nuestro sofá de la tos. Nuestros dieses y agradecimientos infinitos. ¿No flipáis con la gente tan guay que viene a esta cochambre de programa? Nosotros mucho.\n\n¡Programa patrocinado por Flower Farm! Recordad que tenéis un 15% de descuento en su web utilizando el código COFONDECAUCH.\nhttp://flowerfarm.es\n\nRedes sociales del programa:\nTwitter → https://twitter.com/cofondecauch\nInstagram →  https://www.instagram.com/cofondecauch/\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com\n\n► Music Credit: LAKEY INSPIRED\nTrack Name: \"Better Days\"\nMusic By: LAKEY INSPIRED @ https://soundcloud.com/lakeyinspired\nOriginal upload HERE - https://www.youtube.com/watch?v=RXLzvo6kvVQ\nOfficial \"LAKEY INSPIRED\" YouTube Channel HERE - https://www.youtube.com/channel/UCOmy8wuTpC95lefU5d1dt2Q\nLicense for commercial use: Creative Commons Attribution 3.0 Unported \"Share Alike\" (CC BY-SA 3.0) License.\nFull License HERE - https://creativecommons.org/licenses/by-sa/3.0/legalcode\nMusic promoted by NCM https://goo.gl/fh3rEJ",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/Pp65luPPmkc/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/Pp65luPPmkc/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/Pp65luPPmkc/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/Pp65luPPmkc/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 43,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "Pp65luPPmkc"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "gXhpyKQ-7ufHNkTPiV9DEc71Cq4",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLlJlQWNtUFMxTHY4",
                        "snippet": {
                            "publishedAt": "2021-03-10T18:34:32Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "El Otro Día x64 | Espera lo esperable - con Taka Gómez",
                            "description": "Esta es la caja de la descripción del programa número 64 de El Otro Día, presentado por Galder Varas y Urko Vázquez. (Esto último el programa. La caja no está presentada por nadie, existe a través de sí misma y a través de la experiencia de quién la lee. Sí. Es física cuántica. Mientras tú no leas la caja de descripción, la caja de descripción existe y no existe a la vez. Te suena de algo verdad. Todos prestando tanta atención al gato de Schrödinger y lo interesante era la caja en la que estaba metido!)\n¡AH, Y QUE VINO TAKA DE SORPRESA!\n\nRedes sociales del programa: \nInstagram → https://www.instagram.com/elotrodiapodcast/\nTwitter → https://twitter.com/ElOtroDiaPod\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/ReAcmPS1Lv8/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/ReAcmPS1Lv8/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/ReAcmPS1Lv8/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/ReAcmPS1Lv8/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/ReAcmPS1Lv8/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 44,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "ReAcmPS1Lv8"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "hpgQRqZ2Pnc8x_K0njV3dCmuk8s",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLjBueDZDWmstVGJj",
                        "snippet": {
                            "publishedAt": "2021-03-09T10:11:14Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Minority Report x13 | con Yunez Chaib y Lamine Thior",
                            "description": "Esta semana nos visitan dos humoristas para hablar de la polémica de Aissa Aslani y del mundo de la comedia.\n\nMinority Report, es un programa presentado por Adel Aït Zineb en el que se da un espacio y una voz a las minorías del mundo artístico y del entretenimiento para hablar de sus proyectos y para que puedan expresar sus ideas y preocupaciones libremente.\n\nRedes sociales:\n\nAdel Aït Zineb (IG) – https://www.instagram.com/adel.ait.zineb/\n\nYunez Chaib (IG) - https://www.instagram.com/yunezchaib/ \n\nYunez Chaib (TW) - https://twitter.com/YunezChaib?s=20 \n\nLamine Thior (IG) - https://www.instagram.com/lamthior/ \n\nLamine Thior (TW) - https://twitter.com/LamThior\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/0nx6CZk-Tbc/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/0nx6CZk-Tbc/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/0nx6CZk-Tbc/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/0nx6CZk-Tbc/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/0nx6CZk-Tbc/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 45,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "0nx6CZk-Tbc"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "YeWqyPMJ_yvF-lqmTyMeVJIyfow",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLjdtZFhNYWhOcnpj",
                        "snippet": {
                            "publishedAt": "2021-03-08T17:00:38Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Palabrotes x14 | Adolescente (con Virginia Rodríguez)",
                            "description": "Hoy nos visita Virginia Rodríguez (Virpink) y hablamos de Adolescente, de su nuevo libro, de Compañeros, de Miley Cyrus, del origen del término teenager y, mira, de más cosas, que nos echamos un buen ratito ese día la verdad.\n\nRedes sociales del programa:\nTwitter → https://twitter.com/Palabrotxs\nInstagram → https://www.instagram.com/palabrotxs/\nGráficas → https://www.instagram.com/superfoner/\nMúsica de “Txuminos Imberbes”: https://txuminosimberbes.bandcamp.com/\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/7mdXMahNrzc/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/7mdXMahNrzc/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/7mdXMahNrzc/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/7mdXMahNrzc/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/7mdXMahNrzc/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 46,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "7mdXMahNrzc"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "QYKctrXZVG2hU9rj6qF_EIGX1tw",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLjJGLTQ2N0wycXA4",
                        "snippet": {
                            "publishedAt": "2021-03-08T14:20:40Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "El sótano de la Galván x01 | Con Abi Power - Bolleras de barrio y trapos sucios.",
                            "description": "Primer episodio de una serie de 20 charlas con artistas que consiguieron lo que tienen desde lo más bajo. Primer episodio Andalucía en vena, bolleras de barrio y trapos sucios. \nActuación en directo: Sara Marín. \nCorresponsal de guerra: Carolina Bona.\n\n\"El sótano de la Galván\", el podcast del mundo de la farándula que mezcla confesiones, actuaciones en directo y reportajes callejeros con toda la poca vergüenza del mundo. Idiomas andaluz y americano a ratos.\n\nRedes sociales del programa:\nTwitter →  https://twitter.com/Patgalvan\nInstagram →  https://www.instagram.com/pattgalvan/\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/2F-467L2qp8/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/2F-467L2qp8/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/2F-467L2qp8/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/2F-467L2qp8/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/2F-467L2qp8/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 47,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "2F-467L2qp8"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "eBLKs1kNyYN_R6TBNtD1ii15qiU",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLjJfa2FRMnI4ek5J",
                        "snippet": {
                            "publishedAt": "2021-03-07T13:35:36Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Movidas Minúsculas x76 | Golpes (Parte II) en la cara, vacaciones con samuráis y velas de colores",
                            "description": "¡Zas en toda la boca! O en la cara, o en la mejilla. Depende de la historia. Hoy venimos con una buena recopilación de golpes en su sentido más físico, violento y literal. Boxeadores, nazis, rusos, japoneses... Hoy tenemos casi de todo en Movidas Minúsculas.\n\n¡Apóyanos en Patreon para acceder a contenidos exclusivos y programas que solo haremos en esta plataforma!\nhttps://www.patreon.com/MovidasMinusculas\n\n\"Movidas Minúsculas\" es el podcast humorístico e histórico de Alex Gozalo y Jorge Yorya. Un programa de importancia mayúscula.\n\nRedes sociales del programa:\nTwitter →  https://twitter.com/MovidasMinus\nInstagram →  https://www.instagram.com/movidasminusculas/\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/2_kaQ2r8zNI/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/2_kaQ2r8zNI/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/2_kaQ2r8zNI/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/2_kaQ2r8zNI/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/2_kaQ2r8zNI/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 48,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "2_kaQ2r8zNI"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    },
                    {
                        "kind": "youtube#playlistItem",
                        "etag": "OpW6ImVIi25lcSOOZ55JANaFVL4",
                        "id": "VVVEaU5QOUV2V1JUUFV5amRtMjBwX2ZBLjBLbGoyRzZ3MWFB",
                        "snippet": {
                            "publishedAt": "2021-03-05T12:22:09Z",
                            "channelId": "UCDiNP9EvWRTPUyjdm20p_fA",
                            "title": "Script Fighters x07 | Agentes despedidos, el reparto de Fantastic Four y Pokémon",
                            "description": "Phi Beta Lambda Podcast acoge su peor concurso. Un debate cinéfilo en el que unos amigos frikis se ponen violentos hablando de sus cosas en La Llama Store.\n\nEn el séptimo programa de Script Fighters hablamos de agentes despedidos, películas de Pokémon y nos inventamos un nuevo reparto para Fantastic Four. Presenta de nuevo Maria, que no sabe cómo decirnos que dejemos de hacer esto.\n\n#ScriptFighters, #Pokemon​, #FantasticFour #cine\n\n¡Síguenos!\nInstagram → https://www.instagram.com/script_fighters/\nTwitter → https://twitter.com/ScriptFighters\n\nSuscríbete al canal y no te pierdas ninguno de nuestros podcast\nhttps://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA?sub_confirmation=1\n\n¡Sigue a Phi Beta Lambda Podcast en Twitch y vive en directo nuestros programas!\nhttps://www.twitch.tv/phibetapodcast\n\n¿Quieres escuchar todos nuestros podcast en iVoox?\nhttps://www.ivoox.com/escuchar-programas-phi-beta-lambda-podcast_al_14187352_1.html?show=programs\n\n¡Sigue a Phi Beta Lambda Podcast en sus redes y descubre más podcast geniales!\nPhi Beta Lambda Podcast → https://www.youtube.com/channel/UCDiNP9EvWRTPUyjdm20p_fA\nPhi Beta Lambda Sports → https://www.youtube.com/channel/UCG0hkPVLn_krcnru4fLi50g\nTwitter → https://twitter.com/PhiBetaPodcast\nInstagram → https://www.instagram.com/phibetapodcast/\n\nSi estás interesado en patrocinar uno de nuestros programas, escríbenos a la siguiente dirección dinero@phibetalambdapodcast.com",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/0Klj2G6w1aA/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/0Klj2G6w1aA/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/0Klj2G6w1aA/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/0Klj2G6w1aA/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/0Klj2G6w1aA/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Phi Beta Lambda Podcast",
                            "playlistId": "UUDiNP9EvWRTPUyjdm20p_fA",
                            "position": 49,
                            "resourceId": {
                                "kind": "youtube#video",
                                "videoId": "0Klj2G6w1aA"
                            },
                            "videoOwnerChannelTitle": "Phi Beta Lambda Podcast",
                            "videoOwnerChannelId": "UCDiNP9EvWRTPUyjdm20p_fA"
                        }
                    }
                ].map(item => mapItem(item))
            }

            return {
                posts,
                channels,
                toggleFav,
                favs,
                isFav,
                myChannels,
                goTo
            }
        }
    }
</script>

<style lang="postcss">
  .phi-home {
    padding: 20px;
  }

  .phi-home__menu {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    padding-bottom: 20px;
  }

  .phi-home__title {
    font-size: 26px;
    padding: 10px 0;
  }
</style>
