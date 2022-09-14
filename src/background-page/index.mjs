import settingDefaults from '../setting-defaults.mjs'

const viewAllPlaylists = async ({ url }) => {
  const { playlistLimit } = await browser.storage.sync.get('playlistLimit')
  return { redirectUrl: url.replace(/limit=\d+/, `limit=${playlistLimit}`) }
}

browser.webRequest.onBeforeRequest.addListener(
  viewAllPlaylists,
  {
    urls: [
      'https://spclient.wg.spotify.com/user-profile-view/v3/profile/*/playlists?*limit=*',
    ],
    types: ['xmlhttprequest'],
  },
  ['blocking']
)

browser.runtime.onInstalled.addListener(() => {
  browser.storage.sync.set(settingDefaults)
})
