import React, {useEffect, useState} from 'react';
import NameEnglish from './../images/name-english-text.svg';
import NameTamil from './../images/name-english-tamil-21st-century.svg';
import '../styles/Intro.scss';
import styled, {keyframes} from 'styled-components';
import {pulse, flipInX} from 'react-animations';

const LANG_TAMIL = 'ta';
const LANG_ENGLISH = 'en';
const DEFAULT_LANG = LANG_ENGLISH;

const NAME_TEXT_CHANGE_INTERVAL = 4500; // milliseconds (seconds * 1000)

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

// const fadeInAnimation = keyframes`${fadeIn}`;
const pulseAnimation = keyframes`${pulse}`;
const flipInAnimation = keyframes`${flipInX}`;

const FlipInDiv = styled.div`
      animation: 1s ${flipInAnimation};
    `;

const PulseSpan = styled.span`
      animation: 2s ${pulseAnimation};
    `;

const AuthorNameImg = () => {
  // Current lang of the Name text image
  const [nameText, setNameText] = useState(DEFAULT_LANG);

  useEffect(() => {
    const nameInterval = setInterval(() => {
      setNameText((prevNameText) => {
        if (prevNameText === LANG_TAMIL) {
          return LANG_ENGLISH;
        }
        return LANG_TAMIL;
      });
    }, NAME_TEXT_CHANGE_INTERVAL);

    return () => {
      clearInterval(nameInterval);
    };
  }, []);

  if (nameText === LANG_TAMIL) {
    return <FlipInDiv key={nameText}>
      <img src={ NameTamil }
        className="intro-name-image" alt="Silambarasan R"
      />
    </FlipInDiv>;
  }

  return <FlipInDiv key={nameText}>
    <img src={ NameEnglish }
      className="intro-name-image" alt="Silambarasan R"
    />
  </FlipInDiv>;
};

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
    <PulseSpan className="position-absolute fw-bolder" key={engineerType}>
      {TYPES_OF_ENGINEER[engineerType-1].label}
    </PulseSpan>
    <div className="invisible d-inline pe-2 pe-md-3">
      {TYPES_OF_ENGINEER[engineerType-1].label}
    </div>
  </div>;
};

const Intro = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="intro-container">
            <div className="intro-name">
              <AuthorNameImg />
            </div>
            <h1 className="intro-text">
              <span className="position-relative">
                An <EngineerType />
              </span>
              <span>&nbsp;Software Engineer,</span>
              <span>&nbsp;born and grew up in Cuddalore,</span>
              <span>
                &nbsp;Curious to learn about a new information on each day.
              </span>
              <span>
                &nbsp;Believes in &quot;Earth is not only belong to Humans&quot;
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
