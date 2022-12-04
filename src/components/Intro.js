import React, {useEffect, useState} from 'react';
import SilambarasanPicture from
  './../images/silambarasan-rd-senior-software-engineer.png';
import '../styles/Intro.scss';
import Scroll from 'react-scroll';
import {Image} from 'react-bootstrap';

const TYPES_OF_ENGINEER = [
  {
    label: 'Exceptional',
    value: 'exceptional',
  },
  {
    label: 'Encouraged',
    value: 'encouraged',
  },
  {
    label: 'Experienced',
    value: 'experienced',
  },
];
const DEFAULT_TYPE_OF_ENGINEER = 3; // 1 based Index

const ENGINEER_TYPE_CHANGE_INTERVAL = 3500; // milliseconds (seconds * 1000)

const EngineerType = () => {
  // Current type of the Engineer text
  const [engineerType, setEngineerType] = useState(DEFAULT_TYPE_OF_ENGINEER);

  useEffect(() => {
    const typeEngineerInterval = setInterval(() => {
      setEngineerType((prevEngineerType) => {
        return (prevEngineerType % TYPES_OF_ENGINEER.length) + 1;
      });
    }, ENGINEER_TYPE_CHANGE_INTERVAL);

    return () => {
      clearInterval(typeEngineerInterval);
    };
  }, []);

  return <div className="d-inline">
    <span className="position-absolute fw-bolder" key={engineerType}>
      {TYPES_OF_ENGINEER[engineerType-1].label}
    </span>
    <div className="invisible d-inline pe-2 pe-md-3">
      {TYPES_OF_ENGINEER[engineerType-1].label}
    </div>
  </div>;
};

const Intro = () => {
  return (
    <Scroll.Element name="intro-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="intro-container">
              <div className="row">
                <div className="col-md-4">
                  <div className="intro-picture-wrapper">
                    <Image src={SilambarasanPicture}
                      className="intro-picture" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div
                    className="d-flex flex-column justify-content-center h-100">
                    <div className="intro-greetings">
                      <h1 className="greeting-text">
                        Hi, I&apos;m Silambarasan
                      </h1>
                      <h4 className="greeting-sub-text">
                        <span>Glad you&apos;re here!</span>
                        <span>&nbsp;Please take a look around</span>
                      </h4>
                    </div>
                    <h1 className="intro-description">
                      <span className="position-relative">
                      An <EngineerType />
                      </span>
                      <span>Software Engineer based in India,</span>
                      <span>
                        &nbsp;who develops high quality and end-to-end
                        software application / mobile application.
                      </span><br/>
                      <span>
                      &nbsp;Loves reading adventure books,
                      sketching, listening to music and playing PC games.
                      </span><br/>
                      <span>
                      &nbsp;Curious to learn a piece of
                      new information each day.
                      </span>
                      <span>
                        &nbsp;Believes in &quot;Earth is not only
                        belong to Humans&quot;
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Scroll.Element>
  );
};

export default Intro;
