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
      'http://dl.stream.qqmusic.qq.com/C4000010ibBn4bYFTk.m4a?guid=3761963714&vkey=BF5D0A5169DAC286C5C3A8179D3B9313A2C697EEA5CE77F094486F39E794079A11794D55C1FE54962F8ACE24587E32248F9D068E88442BD6&uin=0&fromtag=38',
      'http://dl.stream.qqmusic.qq.com/C400003UTRfZ12wGOs.m4a?guid=3761963714&vkey=6706F1106B3016A1FCA23FB2546178E1CC42CD4DC2CB8BC33D9433AE9F93FCF02CB44A8A93CF1B40B3C2F4598A0DB02F7BC585EA9311F8C9&uin=0&fromtag=38'
    ]
    let index = Math.floor(Math.random() * urls.length)
    state.currentSong.url = urls[index]
  },
  [types.SET_DISC](state, disc) {
    state.disc = disc
  },
  [types.SET_TOP_LIST](state, topList) {
    state.topList = topList
  },
  [types.SET_SEARCH_HISTORY](state, history) {
    state.searchHistory = history
  },
}

export default matutaions
