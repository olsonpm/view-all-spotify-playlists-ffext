import settingDefaults from '../setting-defaults.mjs'

const playlistLimitEl = document.getElementById('playlist-limit')

document.getElementById('settings-form').addEventListener('submit', e => {
  e.preventDefault()
})

document.getElementById('restore-defaults').addEventListener('click', () => {
  browser.storage.sync.set(settingDefaults)
  setPlaylistLimitElValue()
})

playlistLimitEl.addEventListener('blur', () => {
  const playlistLimitIsValid = playlistLimitEl.value?.match(/^\d+$/)
  const playlistLimit = playlistLimitIsValid
    ? playlistLimitEl.value
    : settingDefaults.playlistLimit

  browser.storage.sync.set({ playlistLimit })

  if (!playlistLimitIsValid) playlistLimitEl.value = playlistLimit
})

setPlaylistLimitElValue()

function setPlaylistLimitElValue() {
  browser.storage.sync.get('playlistLimit').then(({ playlistLimit }) => {
    playlistLimitEl.value = playlistLimit
  })
}
