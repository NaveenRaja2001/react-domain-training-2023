import React from 'react';
import PropTypes from 'prop-types';
import FilterButton from '../../components/filter/FilterButton';
import style from './Sidebar.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter, setDisplayMembers } from '../../slices/blogSlice'
import Button from '../../components/button/Button';
import { ThemeContext } from '../../App';
import { useContext } from 'react';
import { SIBEBAR_CONSTANTS } from '../../constants/littleBookConstants';


export const Sidebar = ({ showMembers=()=>{}, memberList=[] }) => {
  const dispatch = useDispatch();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { filters, isEditingStatus } = useSelector(state => {
    return state.blogs;
  });

  const toggleHandler = (blogType) => {
    if (!isEditingStatus) {
      dispatch(toggleFilter(blogType));
    }
  }

  const displayMembers = () => {
    if (memberList.length === 0) showMembers();
    dispatch(setDisplayMembers(true));
  }

  const filterButton = filters?.map((ele, ind) => <FilterButton name={`${ele}  Blogs`} key={ind} onChange={toggleHandler} />);
  return (
    <>
      <div className={style.sideBarContainer}>
        <h2><span>{SIBEBAR_CONSTANTS.LITTLE} </span>{SIBEBAR_CONSTANTS.BOOK}</h2>
        <div className={style.checkBoxContainer}>
          <h3>{SIBEBAR_CONSTANTS.FILTER}</h3>
          {filterButton}
        </div>
        <div className={style.sideBarLink}>
          <Button onClick={displayMembers} name={SIBEBAR_CONSTANTS.VIEW_MEMBER} />
          <Button onClick={() => toggleTheme()} name={theme === SIBEBAR_CONSTANTS.LIGHT_THEME ? SIBEBAR_CONSTANTS.SWITCH_DARK_THEME : SIBEBAR_CONSTANTS.SWITCH_LIGHT_THEME} />
        </div>
      </div>

    </>
  )
}

Sidebar.propTypes = {
  showMembers: PropTypes.func.isRequired,
  memberList: PropTypes.array.isRequired,
};


export default Sidebar;
