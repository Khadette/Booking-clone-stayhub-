import { createContext, useContext, useState } from 'react';

const SearchContext = createContext(undefined);

const today = new Date().toISOString().split('T')[0];
const inFiveDays = new Date(Date.now() + 5 * 86400000).toISOString().split('T')[0];

export function SearchProvider({ children }) {
  const [search, setSearch] = useState({
    destination: '',
    checkIn: today,
    checkOut: inFiveDays,
    guests: 2,
    rooms: 1,
  });

  const updateSearch = (patch) => setSearch((prev) => ({ ...prev, ...patch }));

  return (
    <SearchContext.Provider value={{ search, updateSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error('useSearch must be used within a SearchProvider');
  return ctx;
}
