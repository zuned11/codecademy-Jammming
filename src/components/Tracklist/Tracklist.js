import React from 'react';
import Track from '../Track/Track'
import styles from './tracklist.module.css'

function Tracklist({ songList }) {

    const tracks = songList.map(
        (song) => { return (<Track songInfo={song} key={song.id} />) }
    )

    return (
        <ul className={styles.Tracklist} id='tracklist'>
            {tracks}
        </ul>
    )
}

export default Tracklist;