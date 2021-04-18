/* eslint-disable no-useless-escape */
import { getNameByKey } from '@/services/channels'
export default axios => ({
    async byChannel ({ podcast }) {
        const query = getNameByKey(podcast).name
        const key = 'AIzaSyCcDfDTZ378um7DF8M6PyXdPXu7MyFziqQ'
        return axios.get(`youtube/v3/search?playlistId=UUDiNP9EvWRTPUyjdm20p_fA&key=${key}&part=snippet&maxResults=100&q=${query} Phi Beta Lambda&order=date`)
    }
})

