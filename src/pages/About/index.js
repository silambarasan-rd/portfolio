import React, {useState, useEffect} from 'react';
import {Image} from 'react-bootstrap';
import SilambarasanPicture from
  '../../images/silambarasan-rd-white-flowered.png';
import '../../styles/About/index.scss';
import {faPlayCircle,
  faPauseCircle} from '@fortawesome/free-solid-svg-icons';
import {faAndroid,
  faApple} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import SilambarasanPronounciation
  from '../../audio/silambarasan-pronounciation.mp3';

// eslint-disable-next-line require-jsdoc
function About() {
  const [audio] = useState(
      new Audio(SilambarasanPronounciation),
  );
  const [playing, setPlaying] = useState(false);

  const onPlay = () => {
    setPlaying((stat) => !stat);
  };

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="about-container">
            <div className="row">
              <div className="col-md-3">
                <div className="d-flex h-100">
                  <div className="about-picture-wrapper">
                    <Image src={SilambarasanPicture}
                      className="about-picture" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div
                  className="d-flex flex-column justify-content-center h-100">
                  <div className="about-greetings">
                    <h1 className="greeting-text">
                        About Me!
                    </h1>
                    <h4 className="greeting-sub-text">
                      <span>&nbsp;Read below to know more about me</span>
                    </h4>
                  </div>
                  <div className="about-content-body">
                    <p
                      className="
                      about-description
                      mb-0
                      d-flex
                      justify-content-center
                      align-items-center
                      ">
                      Hey, I’m Silambarasan
                      <span className="play-button-container"
                        title="How to pronounce Silambarasan?"
                        onClick={onPlay}>
                        <FontAwesomeIcon
                          size="xs"
                          icon={playing ? faPauseCircle : faPlayCircle}
                        />
                      </span>
                    </p>
                    {/* <p className="about-description">
                      Mostly people used to call me Silambu or Simbu.
                      but I’d prefer to be called with full name 🤗
                    </p> */}
                    <p className="about-description">
                      I have been working as
                      a Software engineer for more than 6 years.<br />
                      I was born and grew up in a city from
                      Tamilnadu, India named Cuddalore.
                      Our native place is the village Naduveerapattu
                      which is ~20 km far from Cuddalore.
                      I used to go there occasionally but
                      I&apos;ll be enjoying every moment I spend there.
                    </p>

                    <p className="about-description">
                    That&apos;s because the place is mostly filled with greens,
                    less populated, less polluted and of course
                    a <strong>peaceful environment</strong>.</p>

                    <p className="about-description">
                    In my college days, I used to do a lot of photo and
                    video editing in my spare time and I really loved it,
                    so I learned Adobe Photoshop and Adobe After Effects
                    by watching online tutorials. but after getting into
                    the Software development industry, I lost interest
                    in Photoshop/video editing as my focus totally changed
                    to upskilling myself for development. So nowadays I&apos;m
                    using Photoshop only to crop/resize an image or to make
                    any changes to my resume 😉
                    </p>

                    <p className="about-description">
                      In the weekends or in my free time,
                      I used to listen <strong>Music</strong>,
                      play PC games, watch Movies,
                      read <strong>Adventure</strong> Books,
                      pencil <strong>Sketching</strong>,
                      learn & play Guitar and learn & play Piano.
                    </p>

                    <p className="about-description">
                      Don&apos;t ask me why but I don&apos;t use Android
                      <span className="mx-1">
                        <FontAwesomeIcon
                          size="xs"
                          color="#3dd384"
                          icon={faAndroid}
                        />
                      </span>
                      or iPhone
                      <span className="mx-1">
                        <FontAwesomeIcon
                          size="xs"
                          icon={faApple}
                        />
                      </span><br />
                      and I still can&apos;t find a reason to have a smartphone.
                      <br />
                      Of course, there are disadvantages I admit that
                      but believe me, there are a lot of advantages to it 😇
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
