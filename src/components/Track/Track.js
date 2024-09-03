import React from "react";
import styles from "./track.module.css";

function Track({ songInfo }) {
  return (
    <li className={styles.trackContainer} key={songInfo.id}>
      <img src={songInfo.imgUrl} className={styles.albumArt} />
      <div className={styles.infoContainer}>
        <h2>{songInfo.name}</h2>
        <p>
          {songInfo.artist} | {songInfo.album}
        </p>
      </div>
    </li>
  );
}

export default Track;
