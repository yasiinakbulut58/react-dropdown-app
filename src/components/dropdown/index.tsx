import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { useMemo, useRef, useState } from 'react';

import useDebounce from '@/hooks/useDebounce';
import useOnClickOutside from '@/hooks/useOnClickOutside';

import './Dropdown.scoped.scss';
import DropdownList, { Insurance } from './DropdownList';
import SearchBox from './SearchBox';
import { list } from './mockData.json';

function Dropdown() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  useOnClickOutside(containerRef, () => setShowDropdown(false));

  const debouncedSearchTerm = useDebounce(searchValue, 500);

  const filteredList: Insurance[] = useMemo(
    () =>
      debouncedSearchTerm
        ? list
            ?.filter(
              (item) =>
                item.name?.toLowerCase().includes(debouncedSearchTerm?.toLowerCase()) ||
                item.policyNo?.toLowerCase().includes(debouncedSearchTerm?.toLowerCase())
            )
            .slice(0, 6)
        : [],
    [debouncedSearchTerm]
  );

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      className="dropdown-wrapper"
    >
      <Box ref={containerRef} className="dropdown-container">
        <SearchBox
          setShowDropdown={() => setShowDropdown(true)}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
        {showDropdown && filteredList?.length > 0 ? <DropdownList list={filteredList} /> : null}
      </Box>
    </Stack>
  );
}

export default Dropdown;
