import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from "../AppContext.jsx";

const Container = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",

  [theme.breakpoints.up("xs")]: {
    width: 200,
  },
  [theme.breakpoints.up("sm")]: {
    width: 250,
  },
  [theme.breakpoints.up("md")]: {
    width: 300,
  },
  [theme.breakpoints.up("lg")]: {
    width: 350,
  },
  [theme.breakpoints.up("xl")]: {
    width: 400,
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


export default function Search() {
  const context = useContext(AppContext);

  return (
    <Container>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        value={context.input}
        onChange={(event) => {
          event.preventDefault();
          context.setInput(event.target.value.toLowerCase());
        }}
      />
    </Container>
  )
}