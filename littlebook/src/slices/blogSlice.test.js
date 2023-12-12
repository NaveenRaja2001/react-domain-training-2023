import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blogSlice";
import {initialState, updateLoaderStatus, searchContent, toggleFilter, setCurrentContent, setDisplayMembers, setEditStatus, modifyBlogDetails, setWarningModalStatus, addNewBlog, setAddNewBlogStatus } from './blogSlice'

 
 
test("should return the initial state", () => {
    expect(blogSlice(undefined, { type: undefined })).toEqual(initialState);
});
 
test("should handle add new Blog", () => {
    const blogData = {
        title: "title",
        details: "details",
        photo: "photo",
        type: "local",
    };
    expect(
        blogSlice(initialState, {
            type: "blog/addNewBlog",
            payload: blogData,
        })
    ).toEqual({
        ...initialState,
        "blogData":[blogData,...initialState.blogData],
        "selectedContent":blogData,
        "checkBlogs":[...initialState.checkBlogs,blogData.type],
        "filteredBlogData":[...initialState.filteredBlogData,blogData],
        "filters":[...initialState.filters,blogData.type]
    });
});
 

test("should handle setWarningModalStatus", () => {
    const payload = true;
    expect(
        blogSlice(initialState, {
            type: "blog/setWarningModalStatus",
            payload: payload,
        })
    ).toEqual({
        ...initialState,
        "warningModalStatus":payload
    });
});

test("should handle setDisplayMembers", () => {
    const payload = true;
    expect(
        blogSlice(initialState, {
            type: "blog/setDisplayMembers",
            payload: payload,
        })
    ).toEqual({
        ...initialState,
        "isDisplayMember":payload
    });
});

test("should handle setAddNewBlogStatus", () => {
    const payload = true;
    expect(
        blogSlice(initialState, {
            type: "blog/setAddNewBlogStatus",
            payload: payload,
        })
    ).toEqual({
        ...initialState,
        "addNewBlogActive":payload
    });
});