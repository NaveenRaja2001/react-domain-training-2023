import React from 'react'
import styles from './MemberCard.module.scss';
import { MEMBERS_CONSTANT } from '../../constants/littleBookConstants';
import PropTypes from 'prop-types';
import { addDefaultSrc } from '../../service/userService';

export const MemberCard = (props) => {
  const { name = '', username = '', photo = '', company = '' } = props;
  return (
    <div className={styles.memberCard}>
      <div className={styles.membersImg}>
        <img src={`${MEMBERS_CONSTANT.MEMBER_IMAGE_URL}/${photo}`} alt={username} onError={addDefaultSrc}/>

      </div>
      <p className={styles.memberName}>{name}</p>
      <p className={styles.company}>{company.name}</p>
    </div>
  )
}

MemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default MemberCard; 