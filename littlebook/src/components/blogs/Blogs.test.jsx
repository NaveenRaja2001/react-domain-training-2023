import ContentCard from "./Blogs.jsx";
import '@testing-library/jest-dom';
import {userEvent,render,screen, fireEvent} from '@testing-library/react';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "../../slices/blogSlice";



describe('contentCard testing',()=>{
    const store = configureStore({
        reducer:{blogs:blogSlice}
    })
    it('checking content is present',()=>{
        let blogContent={
            title:'title',
            type:'type',
            details:'details'
        }
        render(<Provider store={store}><ContentCard content={blogContent}/></Provider>)
        const title=screen.getByText(blogContent.title);
        expect(title).toBeInTheDocument();
        const type=screen.getByText(blogContent.type);
        expect(type).toBeInTheDocument();
        const details=screen.getByText(blogContent.details);
        expect(details).toBeInTheDocument();
        
        fireEvent.click(title)
        // expect(store.getState().blogs.selectedContent.title).toBe(blogContent.title)
    })
})