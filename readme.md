## View All Spotify Playlists

[A firefox extension](https://addons.mozilla.org/en-US/firefox/addon/view-all-spotify-playlists/) which allows you to override spotify's limit of viewing 200
playlists

### To hack on this extension locally

```sh
# make sure you have web-ext installed
> npm i -g web-ext

# now clone the repo and run it
> gh repo clone olsonpm/view-all-spotify-playlists-ffext
> cd view-all-spotify-playlists-ffext/src
> web-ext run

# in the browser that pops up you should be able to view all a user's playlists
# instead of just the first 200.  Here's an example playlist
# https://open.spotify.com/user/derekmholden/playlists
```
