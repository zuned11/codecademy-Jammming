import logo from './logo.svg';
import './App.css';
import { React, useState } from 'react'

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Tracklist from '../Tracklist/Tracklist'

const fakeTracklist = [
  {
    name: 'Ghosts n stuff',
    artist: 'deadmau5',
    album: 'For Lack of a Better Name',
    imgUrl: 'https://cdn.discordapp.com/emojis/1118191303600119909.webp?size=96&quality=lossless',
    id: '1',
  },
  // {
  //   name: '360',
  //   artist: 'charli xcx',
  //   album: 'brat',
  //   imgUrl: 'https://cdn.discordapp.com/emojis/1118191303600119909.webp?size=96&quality=lossless',
  //   id: '2',
  // },
  // {
  //   name: 'xxx',
  //   artist: 'yameii online',
  //   album: 'Odyssey1',
  //   imgUrl: 'https://cdn.discordapp.com/emojis/1118191303600119909.webp?size=96&quality=lossless',
  //   id: '3',
  // },
]

function App() {

  const [searchResults, setSearchResults] = useState(fakeTracklist)
  const [playlist, setPlaylist] = useState({})

  function addSongToPlaylist(prev, song) {

  }

  return (
    <div className="App">
      <SearchBar />
      <SearchResults />
      <Tracklist songList={searchResults} />
      <Playlist />
    </div>
  );
}

export default App;
