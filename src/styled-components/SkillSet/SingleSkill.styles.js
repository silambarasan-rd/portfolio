import styled from 'styled-components';

export const SkillDetail = styled.div`
  width: 100%;
  margin-left: 1em;
`;

export const SkillTitle = styled.h4`
  margin: 0 0 .5em;
  font-weight: 400;
`;

export const SkillTechIconHolder = styled.div`
  
`;

export const SkillTechImage = styled.img`
  height: auto;
  width: 40px;
`;

export const SkillProgress = styled.div.attrs({
  className: 'progress',
})`
  height: 4px;
  position: relative;
  overflow: visible;
  background-color: ${
  (props) => props.theme.currentTheme === 'light' ? '#94a3af33' : '#ffffff61'};
`;

export const SkillProgressFilled = styled.div.attrs({
  'className': 'progress-bar',
  'role': 'progressbar',
  'aria-valuenow': ({capacity}) => capacity,
  'aria-valuemin': 0,
  'aria-valuemax': 100,
})`
  background-color: ${
  (props) => props.theme.currentTheme === 'light' ? '#465164' : '#f5f5f5'};
  width: ${({capacityPercent}) => capacityPercent};
`;

export const SkillProgressStop = styled.div.attrs({
  className: ({stopper}) => {
    return stopper ? `progress-bar-stop ${stopper}` : 'progress-bar-stop';
  },
})`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: inherit;
  width: ${({capacityPercent}) => capacityPercent};
`;


export const SkillRow = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: ${
  (props) => props.theme.currentTheme === 'light' ?
      '1px solid rgba(0,0,0,0.1)' :
      '1px solid rgba(255,255,255,0.1)'};
  border-bottom-width: 4px;
  border-right-width: 2px;
  border-radius: 4px;
  padding: .5em;
  margin-bottom: .2em;
  cursor: pointer;
  transition: 0.18s linear all;
  &:hover {
    background-color: ${
  (props) =>
      props.theme.currentTheme === 'light' ? '#d4dde3' : '#edf8ff'};
    border-color: ${
  (props) =>
      props.theme.currentTheme === 'light' ? '#065a82' : '#aebfc6'};
  }

  &:hover ${SkillTitle} {
    color: #065a82;
  }

  &:hover ${SkillProgress} {
    background-color: ${(props) =>
      props.theme.currentTheme === 'light' ?
        'rgba(255, 255, 255, .45)' :
          'rgba(0, 0, 0, .15)'};
  }

  &:hover ${SkillProgressFilled} {
    background-color: #065a82;
  }
`;
