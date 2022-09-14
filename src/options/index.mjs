import settingDefaults from '../setting-defaults.mjs'

document.getElementById('settings-form').addEventListener('submit', e => {
  e.preventDefault()
})

document.getElementById('restore-defaults').addEventListener('click', () => {
  browser.storage.sync.set(settingDefaults)
})

browser.storage.sync.get('playlistLimit').then(({ playlistLimit }) => {
  playlistLimitEl.value = playlistLimit
})

const playlistLimitEl = document.getElementById('playlist-limit')
playlistLimitEl.addEventListener('blur', () => {
  browser.storage.sync.set({ playlistLimit: playlistLimitEl.value })
})
