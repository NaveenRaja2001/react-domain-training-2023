import axios from "axios";
import { BROKEN_IMAGE_URL } from "../constants/littleBookConstants";

export const retrieveUsers = async () => {
    const response = await axios.get('https://jsonmockserver.vercel.app/api/users');
    return response.data;
};

export const addDefaultSrc = (ev) => {
    ev.target.src = BROKEN_IMAGE_URL;
  }