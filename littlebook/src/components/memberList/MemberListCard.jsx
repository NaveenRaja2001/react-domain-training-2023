import React from 'react'
import Loader from '../loader/loader';
import MemberCard from '../memberCard/MemberCard';
import styles from './MemberListCard.module.scss';
import { MEMBERS_CONSTANT } from '../../constants/littleBookConstants';
import PropTypes from 'prop-types';

export const MemberListCard = ({ memberList=[], loader=false }) => {

  const usersDataList = memberList?.map(user => <MemberCard {...user} key={user.id} />);

  return (
    <> {!loader ?
      <>
        <p className={styles.modalTitle}>{MEMBERS_CONSTANT.MEMBERCONTAINER_TITLE}</p>
        <div className={styles.memberCardWrapper}>
          {usersDataList}
        </div>
      </> : <Loader />}
    </>
  )
}

MemberListCard.propTypes = {
  memberList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      company: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    })
  ),
  loader: PropTypes.bool.isRequired,
};

export default MemberListCard;