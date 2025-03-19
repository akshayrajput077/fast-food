
import axios from "axios";

import { getDataFromLocalStorage } from "../auth/signIn.service";

let setIsLoading = (loading) => { console.log("Loading:", loading); };

export const fetchChapterData = async (user, params) => {
  setIsLoading(true);

  try {
    // Attempt to get data from localStorage
    const storedData = getDataFromLocalStorage(user); // Use `user` as key
    const chapterCountFromLocalStorage = getDataFromLocalStorage(`${user}-chapterCount`); // Build the key dynamically

    if (storedData && chapterCountFromLocalStorage) {
      return storedData;
    } else {
      const response = await axios.get("/api/bible/getChapter", { params });

      const chapterCountFromAPI = await axios.get("/api/bible/getChapterCount", { params });

      localStorage.setItem(user, JSON.stringify(response.data));
      localStorage.setItem(`${user}-chapterCount`, JSON.stringify(chapterCountFromAPI.data));

      return response.data;
    }
  } catch (error) {
    console.error("Error fetching chapter data:", error);
  } finally {
    setIsLoading(false);
  }
};

