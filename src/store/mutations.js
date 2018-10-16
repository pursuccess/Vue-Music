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
      'http://dl.stream.qqmusic.qq.com/C400003UTRfZ12wGOs.m4a?guid=6451824484&vkey=2EF4B090C14277E6F8540B81C1401D6FB18580AEDAA373F9F26F064BA055081F00B98F5482E389068227BB75AE65B9F572FA26518A38A9D1&uin=0&fromtag=38',
      'http://dl.stream.qqmusic.qq.com/C400002gcuPM3LQpCi.m4a?guid=6451824484&vkey=2C55EE3B4961763C2269D3F7F5AF0AA6E6B9551743221497807C1D99D3C5377738D452B82C51B603612228506EE5FBCD37F1E7F411020B0D&uin=0&fromtag=38',
      'http://dl.stream.qqmusic.qq.com/C4000020CMqs1PFDi6.m4a?guid=6451824484&vkey=828D16F5B01DF93C8EA47E57339854668E158C1163BB3E36979EA9A176F53D673EEF70505877921FD510B5D2B7B970FDC3273D0998AA955D&uin=0&fromtag=38',
      'http://dl.stream.qqmusic.qq.com/C400003nGa8A3ysktw.m4a?guid=6451824484&vkey=D11A95F8AF0F274E5F205B12CBD43EDA4838563568B1D24918D071215B8327CA5FCC9405E835D24235848AEC87B0AC96EAF0BA6E99697E2B&uin=0&fromtag=38',
      'http://dl.stream.qqmusic.qq.com/C400001n4C3p1yv0FU.m4a?guid=6451824484&vkey=0617AD0503CF819BE1B21B213548358A839B496DDC955EFAE9A878863ACD7DEB97CAC6702910CDD9E9E4D9BD186E54D0E7884C538E8124F5&uin=0&fromtag=38',
      'http://dl.stream.qqmusic.qq.com/C4000010ibBn4bYFTk.m4a?guid=6451824484&vkey=0468B2B6F8961D0DD4C242CAFF1965A9127996A3569C1EA69A6A8340B2AA0E6C7EB575025AEDF3218729CFE09E1F55BC751C14B972006F1C&uin=0&fromtag=38'
    ]
    let index = Math.floor(Math.random() * urls.length)
    state.currentSong.url = urls[index]
  }
}

export default matutaions
