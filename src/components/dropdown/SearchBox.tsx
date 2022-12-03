import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

import './Dropdown.scoped.scss';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'var(--main-background-color)',
  },
  '& label': {
    color: 'var(--main-background-color)',
  },
  '& input': {
    color: 'var(--main-background-color)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'var(--main-background-color)',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: 'var(--main-background-color)',
  },
});

type Props = {
  setShowDropdown: () => void;
  setSearchValue: (text: string) => void;
  searchValue: string;
};

const SearchBox: React.FC<Props> = ({ setShowDropdown, setSearchValue, searchValue }) => {
  return (
    <Box id="search-wrapper" pb={2} pt={2}>
      <SearchIcon className="search-icon" sx={{ m: 1, my: 0.5 }} />
      <CssTextField
        id="input-with-sx"
        className="search-input"
        label="SEARCH (Client Name / Policy Number)"
        variant="standard"
        autoComplete="off"
        value={searchValue}
        onFocus={() => setShowDropdown()}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </Box>
  );
};

export default SearchBox;
