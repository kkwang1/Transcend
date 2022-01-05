import React, { useState, createContext, useEffect } from "react";

export const StoreContext = createContext(null);

export default ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);
  const [questionnaire, setQuestionnaire] = useState({
    isParent: 0,
    ageRange: 2,
    stateNames: 44,
    process: null,
    disabilityCategories: [],
    funds: 0,
    education: 1,
    employment: 4,
    independentLiving: 1,
  });
  const [suggestedPages, setSuggestedPages] = useState([]);
  const [isAccountCreated, setIsAccountCreated] = useState();

  const store = {
    bookmarks,
    setBookmarks,
    questionnaire,
    setQuestionnaire,
    suggestedPages,
    setSuggestedPages,
    isAccountCreated,
    setIsAccountCreated
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
