const NETWORKS = [
  {
    name: 'Linkedin',
    image: './social/linkedin.png',
    link: 'https://www.linkedin.com/in/jjlmoya/'
  },
  {
    name: 'Github',
    image: './social/github.png',
    link: 'https://github.com/jjlmoya'
  }]
export default class SocialService {
  constructor () {
    this.networks = NETWORKS
  }

  getNetworks () {
    return this.networks
  }
}
