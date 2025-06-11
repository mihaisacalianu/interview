'use client'
import React from 'react';

import { useState, useContext } from 'react';

//declared a context type
type SearchContextType = {
  searchTerm: string,
  setSearchTerm: (term:string)=> void;
}

// created a search context
const SearchContext = React.createContext<SearchContextType>({
  searchTerm: "",
  setSearchTerm: ()=> {}
});

export const SearchContextProvider = ({children}: {children: React.ReactNode}) => {
  const [searchTerm, setSearchTerm] = useState<SearchContextType>();

  return (
  <SearchContext.Provider value={{searchTerm,setSearchTerm}}>
    {children}
  </SearchContext.Provider>
  );
}

export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  return context;
};
