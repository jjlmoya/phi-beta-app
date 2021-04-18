import axios from '@/api/clients/axios'
import PostRepository from './PostRepository'

export default {
    post: PostRepository(axios)
}
