import {SkillRow,
  SkillTitle,
  SkillDetail,
  SkillProgress,
  SkillTechImage,
  SkillTechIconHolder,
} from './SingleSkill.styles';
import PropTypes from 'prop-types';
import {SkillProgressFilled, SkillProgressStop} from './SingleSkill.styles';

const SingleSkill = ({skillRow}) => {
  return (
    <SkillRow>
      <SkillTechIconHolder>
        <SkillTechImage src={skillRow.image} alt={skillRow.label} />
      </SkillTechIconHolder>
      <SkillDetail>
        <SkillTitle>{skillRow.label}</SkillTitle>
        <SkillProgress>
          <SkillProgressFilled
            capacityPercent={skillRow.capacityPercent}
            capacity={skillRow.capacity}
          />
          <SkillProgressStop capacityPercent={skillRow.capacityPercent} />
        </SkillProgress>
      </SkillDetail>
    </SkillRow>
  );
};

SingleSkill.propTypes = {
  skillRow: PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
    image: PropTypes.string,
    capacity: PropTypes.number,
    capacityPercent: PropTypes.string,
    stopper: PropTypes.oneOf(
        ['curious', 'proud', 'interested', 'not_interested', 'learning'],
    ),
  }).isRequired,
};

export default SingleSkill;
