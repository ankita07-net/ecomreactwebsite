// for add item to cart

export const addItem = (product) => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const duplicates = cart.filter((cartItem) => cartItem.id === product.id);

  if (duplicates.length === 0) {
    const productToAdd = {
      ...product,
      count: 1,
    };
    cart.push(productToAdd);

    localStorage.setItem("cart", JSON.stringify(cart));
  }
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// for del item in cart

export const delItem = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
