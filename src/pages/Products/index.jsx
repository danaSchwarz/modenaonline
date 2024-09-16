import { useEffect, useContext, useState, useMemo } from "react";
import db from "../../api/Firebase";
import { collection, getDocs } from 'firebase/firestore';
import ProductCard from "./ProductCard";
import Loader from "../../components/Loader.jsx";
import { AppContext } from '../AppContext.jsx';
import { Grid, IconButton, Toolbar, Typography, Container, Fab, Box } from "@mui/material";
import SideBar from "./SideBar.jsx";
import Search from "./Search.jsx";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Main } from "../Main.jsx";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

const drawerWidth = 180;

async function fetchClothes(db) {
  const clothesCol = collection(db, 'onlineStore');
  const clothesSnapshot = await getDocs(clothesCol);
  const clothesList = clothesSnapshot.docs.map(doc => doc.data());
  return clothesList;
}

function SideBarButton({ open, handleOpen }) {
  return (
    <Fab
      color="inherit"
      aria-label="open drawer"
      onClick={handleOpen}
      edge="start"
      sx={{
        ...(open && { display: 'none' }), backgroundColor: "secondary.main",
        position: "fixed", left: 0, top: 0, mt: 9,
        "&:hover": {
          backgroundColor: "secondary.contrastText"
        }, ml: { xs: 1.5, sm: 2.5, md: 3, lg: 4, xl: 5 },
        zIndex: 1,
      }}
    >
      <TuneOutlinedIcon />
    </Fab>
  )
}

export default function Products() {
  const context = useContext(AppContext);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [chips, setChips] = useState([]);

  useEffect(() => {
    setLoading(true);

    setChips([]);
    context.setFilter("");
    context.setSeason("");
    context.setInput("");

    fetchClothes(db)
      .then(documentList => {
        context.setProductList(documentList);
        setProducts(documentList);
      }).catch(err => {
        console.error(err);
        context.setProductList("Error happend :(");
      }).finally(() => { setLoading(false) })
  }, []);

  useEffect(() => {
    let filtered = sortByInput();

    if (context.filter === "" && context.season === "") {
      setProducts(filtered);
      setChips([]);
    }
    else {
      const type = context.filter.toLowerCase();
      const season = context.season.toLowerCase();

      if (context.filter !== "" && context.season === "") {
        filtered = filtered.filter(product => product.type === type);
        setChips([context.filter]);
      }
      else if (context.filter === "" && context.season !== "") {
        filtered = filtered.filter(product => product.season === season);
        setChips([context.season]);
      }
      else {
        filtered = filtered.filter(product =>
          product.season === season && product.type === type);
        setChips([context.filter, context.season]);
      }
      setProducts(filtered);
    }
  }, [context.filter, context.season, context.input]);


  function sortByInput() {
    if (context.input === "") {
      return context.productList;
    }
    else {
      let list = context.productList.filter((product) => {
        if (product.title.toLowerCase().includes(context.input) || product.type === context.input || product.color === context.input || product.material.toLowerCase().includes(context.input)) {
          return product;
        }
      });

      if (list.length === 0) {
        return [];
      }
      else {
        return list;
      }
    };
  }


  function handleDelete(value) {
    setChips(chips.filter(chip => chip !== value));

    if (context.filter === value) {
      context.setFilter("");
    }
    else if (context.season == value) {
      context.setSeason("");
    }
  }

  return (
    <Main>
      <Search />
      <SideBarButton open={sideBarOpen} handleOpen={() => setSideBarOpen(true)} />
      <SideBar width={drawerWidth} open={sideBarOpen} handleClose={() => setSideBarOpen(false)} />
      <Stack direction="row" spacing={1} sx={{
        mb: 3,
        mt: 2,
        display: "block",
        ml: "auto",
        mr: "auto",
        top: 0,
        width: "250px",
      }}>
        {chips.length > 0 && (
          chips.map(chip => <Chip label={chip} onDelete={() => handleDelete(chip)} variant="outlined" sx={{ borderColor: "primary.dark", backgroundColor: "primary.light" }} />)
        )}
      </Stack>

      <Grid
        marginLeft={sideBarOpen ? `${drawerWidth}px` : 0}
        width="auto"
        container
        wrap="wrap"
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        {loading && <Loader />}
        {!loading && products.length === 0 && <Container sx={{ height: "100vh", textAlign: "center" }}><Typography variant="h5" sx={{ mt: 4 }}>Your search returned no results.</Typography></Container>}

        {products.length > 0 && (products.map((product) => {
          return (
            <Grid key={product.id} item><ProductCard details={product} ></ProductCard></Grid>
          )
        }))}
      </Grid>
    </Main>
  );
}