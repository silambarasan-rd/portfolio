import {SkillRow,
  SkillTitle,
  SkillDetail,
  SkillProgress,
  SkillTechImage,
  SkillTechIconHolder,
} from './SingleSkill.styles';
import PropTypes from 'prop-types';
import {SkillProgressFilled, SkillProgressStop} from './SingleSkill.styles';
import {motion} from 'framer-motion';
import {useStaggerAnimation} from '../../hooks/useScrollAnimation';

const SingleSkill = ({skillRow, index}) => {
  const containerAnimation = useStaggerAnimation(0); // Remove index-based delay

  return (
    <motion.div {...containerAnimation}>
      <SkillRow>
        <SkillTechIconHolder>
          <motion.div
            initial={{scale: 0.8, opacity: 0}}
            whileInView={{scale: 1, opacity: 1}}
            viewport={{once: true}}
            transition={{
              duration: 0.3,
              delay: 0.1, // Same delay for all items
            }}
          >
            <SkillTechImage src={skillRow.image} alt={skillRow.label} />
          </motion.div>
        </SkillTechIconHolder>
        <SkillDetail>
          <motion.div
            initial={{opacity: 0, y: 10}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{
              duration: 0.3,
              delay: 0.2, // Same delay for all items
            }}
          >
            <SkillTitle>{skillRow.label}</SkillTitle>
          </motion.div>
          <SkillProgress>
            <SkillProgressFilled
              as={motion.div}
              initial={{width: 0}}
              whileInView={{width: skillRow.capacityPercent}}
              viewport={{once: true}}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2, // Same delay for all items
              }}
              capacityPercent={skillRow.capacityPercent}
              capacity={skillRow.capacity}
            />
            <SkillProgressStop capacityPercent={skillRow.capacityPercent} />
          </SkillProgress>
        </SkillDetail>
      </SkillRow>
    </motion.div>
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
  index: PropTypes.number.isRequired,
};

export default SingleSkill;
