import * as types from './mutation-types'

const matutaions = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  [types.SET_PLAYING_STATE](state, flag) {
    state.playing = flag
  },
  [types.SET_FULL_SCREEN](state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAYLIST](state, list) {
    state.playlist = list
  },
  [types.SET_SEQUENCE_LIST](state, list) {
    state.sequenceList = list
  },
  [types.SET_PLAY_MODE](state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index
  },
  [types.SET_CURRENT_SONG](state) {
    state.currentSong = state.playlist[state.currentIndex] || {}
    let urls = [
      'http://dl.stream.qqmusic.qq.com/C400003UTRfZ12wGOs.m4a?guid=5003181369&vkey=94224197283D1E192D0308E6BD1B304ECB35C7C1E8913204078272B960956CD0B29DA5174F09BDAC6DC0A4309399DBE2FFDFFB3C8C6C6606&uin=0&fromtag=38',
      'http://dl.stream.qqmusic.qq.com/C400004TXEXY2G2c7C.m4a?guid=5003181369&vkey=847107120109424264EA9EE0543E406028719146B61125B511053F2814C73575B9172894B0FFBA212D3BAA1B726F75014FC9C88D4AEDE06D&uin=0&fromtag=38',
      'http://dl.stream.qqmusic.qq.com/C4000020CMqs1PFDi6.m4a?guid=5003181369&vkey=C1B79B9127F62ABB74F7599C094621C1C60E312DD5A77CF4F226C44C1BDAE6CDD2FECA2EFAD752B175F5CB5339B8D238A824294D43F8CF99&uin=0&fromtag=38',
      'http://dl.stream.qqmusic.qq.com/C400001zMQr71F1Qo8.m4a?guid=5003181369&vkey=6035592F97DA553AD9714EC7E120BBD4C83A3531FDDE3A4C9895A1A31390CB958415462CAAD92DE1D5F8E8538168CEE33D6B8989E92B3477&uin=0&fromtag=38',
      'http://dl.stream.qqmusic.qq.com/C400001n4C3p1yv0FU.m4a?guid=5003181369&vkey=DB2DF7FD879511AA6A04D5EADCFA082F27116E8432F84A03269AE2202B0ED4C12721B4E04031955754FDFD1556AB68A73F1B7F068C06558D&uin=0&fromtag=38',
      'http://dl.stream.qqmusic.qq.com/C4000010ibBn4bYFTk.m4a?guid=5003181369&vkey=D590BCE240A5C3308AE8A8E5D4A1CDBD258CAFF1207602BBDA50CFDC3106B46C35C088AFC485203FF3206BC7E056B945EC4E9E8EF49AB7D8&uin=0&fromtag=38'
    ]
    let index = Math.floor(Math.random() * urls.length)
    state.currentSong.url = urls[index]
  }
}

export default matutaions
