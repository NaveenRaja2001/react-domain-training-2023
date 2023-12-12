import { useSelector } from "react-redux";
import Sidebar from "../../container/sidebar/Sidebar";
import BlogList from "../../container/blogList/BlogList";
import BlogDetails from "../../container/blogDetails/BlogDetails";
import WarningModal from "../../components/modal/WarningModal";
import { useState } from "react";
import NewBlogs from "../../components/newBlogs/NewBlogs";
import { retrieveUsers } from "../../service/userService";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function HomePage({ theme }) {
    const [loader, setLoader] = useState(true);
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
        <div className="app" id={theme}>
            <ToastContainer />
            <Sidebar showMembers={showMembers} memberList={memberList} />
            <BlogList />
            {warningModalStatus ? <WarningModal /> : ''}
            <BlogDetails />
            {addNewBlogActive || isDisplayMember ? <NewBlogs loader={loader} memberList={memberList} isDisplayMember={isDisplayMember} /> : ''}
        </div>
    );
}

export default HomePage;
