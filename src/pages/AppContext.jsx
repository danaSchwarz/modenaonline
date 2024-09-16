import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider(props) {
  const [currency, setCurrency] = useState("$");
  const [rate, setRate] = useState(1);
  const [productList, setProductList] = useState([]);
  const [input, setInput] = useState("");
  const [favorites, setFavorites] = useState(function () {
    let savedFavorites = [];
    try {
      savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    } catch (error) {
      savedFavorites = [];
    }
    return savedFavorites;
  });

  const [filter, setFilter] = useState("");
  const [season, setSeason] = useState("");
  const [cart, setCart] = useState(function () {
    let savedCart = [];
    try {
      savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    } catch (error) {
      savedCart = [];
    }
    return savedCart;
  });

  function addToFavorites(newProduct) {
    const existingProduct = favorites.find(
      (product) => product.id === newProduct.id
    );
    if (!existingProduct) {
      setFavorites([
        ...favorites, { ...newProduct }
      ])
    }
  };

  function deleteFromFavorites(id) {
    const updatedFavorites = favorites.filter((product) => product.id !== id);
    setFavorites(updatedFavorites);
  }

  function handleProductAdd(newProduct) {
    // check if item exists
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );
    if (existingProduct) {
      // increase quantity
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id && product.quantity < 10) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...newProduct,
          quantity: 1,
        },
      ]);
    }
  }

  function handleProductDelete(id) {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  }

  function getCartCount() {
    return cart.reduce(
      (total, product) => total + product.quantity,
      0
    )
  };

  function getTotalPrice() {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }

  function getProductFromCart(id) {
    return cart.find(
      (product) => product.id === id
    )
  };

  function setPriceWithRate(price) {
    return ((price * rate) / 100).toFixed(2);
  }

  function handleQuantityChange(id, quantity) {
    setCart(
      cart.map(product => {
        if (product.id === id) {
          return { ...product, quantity: quantity }
        }
        else {
          return { ...product }
        }
      }
      )
    )
  }

  function resetAllFilter() {
    setFilter("");
    setSeason("");
  }

  const value = {
    currency: currency,
    setCurrency: setCurrency,
    rate: rate,
    setRate: setRate,
    setPriceWithRate,
    productList: productList,
    setProductList: setProductList,
    cart: cart,
    onProductAdd: handleProductAdd,
    onProductDelete: handleProductDelete,
    onQuantityChange: handleQuantityChange,
    getCartCount,
    getTotalPrice,
    getProductFromCart,
    favorites: favorites,
    onFavoriteAdd: addToFavorites,
    onFavoriteDelete: deleteFromFavorites,
    filter: filter,
    setFilter: setFilter,
    season: season,
    setSeason: setSeason,
    resetAllFilter,
    input: input,
    setInput: setInput
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };