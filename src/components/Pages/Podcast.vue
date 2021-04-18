<template>
    <div class="phi-podcast">
        <PhiIcon
            class="phi-podcast__icon"
            icon="angle-left"
            @click="goBack"
        />
        <PhiHeader />
        <div class="phi-podcast__wrapper">
            <div class="phi-podcast__banner">
                <PhiBannerCard
                    :id="channel.id"
                    :image="channel.image"
                    :title="channel.title"
                    :fav="isFav(channel.id)"
                    @onStar="toggleFav"
                />
            </div>
            <div class="phi-podcast__title">
                Videos de {{ channel.title }}
            </div>
            <PhiVideoCard
                v-for="video in videos"
                :id="video.id.videoId"
                :key="video.id.videoId"
                :image="video.image"
                :title="video.title"
                @onNext="openVideo"
            />
        </div>
    </div>
</template>

<script>
    import PhiIcon from '@/components/Commons/Icon.vue'
    import { ref, computed } from 'vue'
    import { useStore } from 'vuex'
    import api from '@/api'
    import PhiHeader from '@/components/Commons/Header.vue'
    import PhiBannerCard from '@/components/Cards/Banner.vue'
    import PhiVideoCard from '@/components/Cards/Video.vue'
    import { getChannels } from '@/services/channels'
    import { useRoute, useRouter } from 'vue-router'
    import { Browser } from '@capacitor/browser'


    export default {
        components: {
            PhiHeader,
            PhiBannerCard,
            PhiVideoCard,
            PhiIcon

        },
        setup () {
            const store = useStore()
            const route = useRoute()
            const router = useRouter()
            const videos = ref([])
            const favs = computed(() => store.state.channels.values)
            const channel = getChannels()
                .find((c)=> c.id === route.params.id)

            const openVideo = (video) => {
                Browser.open(`https://www.youtube.com/watch?v=${video}`)
            }
            const isFav = (id) => {
                return favs.value.includes(id)
            }

            const toggleFav = (name, state) => {
                store.dispatch(`channels/${state ? 'remove' : 'add'}`, name)
            }

            const goBack = (name) => {
                router.push({ name: 'home', params: { id: name }})
            }

            const mapItem = item => ({
                id: item.id,
                title: item.snippet.title,
                image: item.snippet.thumbnails.high?.url,
                date: item.publishedAt
            })
            api.post.byChannel({ podcast:route.params.id})
                .then((data) => {
                    videos.value = data.data.items
                        .filter(({ snippet }) => snippet.channelId === 'UCDiNP9EvWRTPUyjdm20p_fA')
                        .map(item => mapItem(item))
                })


            return {
                videos,
                channel,
                toggleFav,
                favs,
                isFav,
                goBack,
                openVideo
            }
        }
    }
</script>

<style lang="postcss">
  .phi-podcast {
    padding: 0 20px;
  }

  .phi-podcast__icon {
    position: absolute;
    left: 20px;
    top: 20px;
    font-size: 30px;
  }

  .phi-podcast__title {
    font-size: 20px;
    padding: 15px 0;
  }
</style>
