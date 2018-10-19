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
      // 'http://dl.stream.qqmusic.qq.com/C400003UTRfZ12wGOs.m4a?guid=6451824484&vkey=2EF4B090C14277E6F8540B81C1401D6FB18580AEDAA373F9F26F064BA055081F00B98F5482E389068227BB75AE65B9F572FA26518A38A9D1&uin=0&fromtag=38',
      // 'http://dl.stream.qqmusic.qq.com/C400002gcuPM3LQpCi.m4a?guid=6451824484&vkey=2C55EE3B4961763C2269D3F7F5AF0AA6E6B9551743221497807C1D99D3C5377738D452B82C51B603612228506EE5FBCD37F1E7F411020B0D&uin=0&fromtag=38',
      // 'http://dl.stream.qqmusic.qq.com/C4000020CMqs1PFDi6.m4a?guid=6451824484&vkey=828D16F5B01DF93C8EA47E57339854668E158C1163BB3E36979EA9A176F53D673EEF70505877921FD510B5D2B7B970FDC3273D0998AA955D&uin=0&fromtag=38',
      // 'http://dl.stream.qqmusic.qq.com/C400003nGa8A3ysktw.m4a?guid=6451824484&vkey=D11A95F8AF0F274E5F205B12CBD43EDA4838563568B1D24918D071215B8327CA5FCC9405E835D24235848AEC87B0AC96EAF0BA6E99697E2B&uin=0&fromtag=38',
      'http://dl.stream.qqmusic.qq.com/C4000010ibBn4bYFTk.m4a?guid=6499194645&vkey=EA39413C1FE9B0F487F284737BB5FA8C2C864702CACECF5494D7FBF42CE20A323D85BCB3949B271A5132B9827513F691030BA9AD37F3EC22&uin=0&fromtag=38',
      'http://dl.stream.qqmusic.qq.com/C400003UTRfZ12wGOs.m4a?guid=6499194645&vkey=78676C1C9A0D9E5615681E1299EA90440B7E7DF962C2FA7B41F3CC79CF80843B11F715AE30DD05BB05AC258E0C725C5BC1F86BC1BE189193&uin=0&fromtag=38'
    ]
    let index = Math.floor(Math.random() * urls.length)
    state.currentSong.url = urls[index]
  }
}

export default matutaions
