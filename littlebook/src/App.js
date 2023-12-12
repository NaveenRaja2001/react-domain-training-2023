import { useSelector } from "react-redux";
import "./App.scss";
import Sidebar from "./container/sidebar/Sidebar";
import BlogList from "./container/blogList/BlogList";
import BlogDetails from "./container/blogDetails/BlogDetails";
import WarningModal from "./components/modal/WarningModal";
import { createContext, useState } from "react";
import NewBlogs from "./components/newBlogs/NewBlogs";
import { retrieveUsers } from './service/userService';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ThemeContext = createContext();

function App() {
  const [loader, setLoader] = useState(true);
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
  }
  const [memberList, setMemberList] = new useState([]);
  const { warningModalStatus, addNewBlogActive, isDisplayMember } = useSelector(state => {
    return state.blogs;
  });

  const showMembers = async () => {
    const data = await retrieveUsers();
    setMemberList(data);
    setLoader(false);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
      <ToastContainer />
        <Sidebar showMembers={showMembers} memberList={memberList}/>
        <BlogList />
        {warningModalStatus ? <WarningModal /> : ''}
        <BlogDetails />
        {addNewBlogActive || isDisplayMember ? <NewBlogs loader={loader} memberList={memberList} isDisplayMember={isDisplayMember} /> : ''}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
