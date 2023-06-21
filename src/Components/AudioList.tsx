import React, { useState, useEffect } from "react";
import { FaHeadphones, FaRegClock } from "react-icons/fa";
import { Songs } from "./songs";
import MusicPlayer from "./MusicPlayer";
import { HiOutlineStar, HiStar } from "react-icons/hi";

function AudioList() {
  const [songs, setSongs] = useState(Songs);
  const [song, setSong] = useState(Songs[0].song);
  const [img, setImage] = useState(Songs[0].imgSrc);
  const [auto, setAuto] = useState(false);

  useEffect(() => {
    const songs = document.querySelectorAll(".songs");

    function changeMenuActive(this: any) {
      songs?.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    songs?.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  const changeFavourite = (id: any) => {
    Songs.forEach((song:any) => {
      if (song.id === id) {
        song.favourite = !song.favourite;
      }
    });
    setSongs([...Songs]);
  };
  const setMainSong = (songSrc: any, imgSrc: any) => {
    setSong(songSrc);
    setImage(songSrc);
    setAuto(true);

  };
  return (
    <div className="audioList">
      <h2 className="title">
        The list <span>{`${Songs.length} songs`}</span>
      </h2>

      <div className="songsContainer">
        {Songs &&
          Songs.map((song:any, index:any) => (
            <div
              className="songs"
              key={song?.id}
              onClick={() => setMainSong(song?.song, song?.imgSrc)}
            >
              <div className="count">{`#${index + 1}`}</div>
              <div className="song">
                <div className="imgBox">
                  <img src={song?.imgSrc} alt="" />
                </div>
                <div className="section">
                  <p className="songName">
                    {song?.songName}
                    <span className="spanArtist"> {song?.artist}</span>
                  </p>
                  <div className="hits">
                    <p className="hit">
                      <i>
                        <FaHeadphones />
                      </i>
                      95,490,102
                    </p>
                    <p className="duration">
                      <i>
                        <FaRegClock />
                      </i>
                      01:29
                    </p>
                    <div
                      className="favourite"
                      onClick={() => changeFavourite(song?.id)}
                    >
                      {song?.favourite ? (
                        <i>
                          <HiStar />
                        </i>
                      ) : (
                        <i>
                          <HiOutlineStar/>
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <MusicPlayer song={song} imgSrc={img} auto={undefined} />
    </div>
  );
}

export { AudioList };
