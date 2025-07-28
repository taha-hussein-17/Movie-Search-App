'use client'
import React, { useMemo } from 'react';

import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
// Search input component props
interface Props {
  onSearch: (query: string) => void;
}

export default function SearchInput({ onSearch }: Props) {
  const [value, setValue] = useState('');

 const debouncedSearch = useMemo(() => debounce(onSearch, 600), [onSearch]);

  // Handle input change
  useEffect(() => {
    if (value.trim()) debouncedSearch(value);
  }, [value]);

  return (
    <input
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
      placeholder="Search movies..."
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
}

