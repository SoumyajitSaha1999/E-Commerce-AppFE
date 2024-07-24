import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let existingCartItem = localStorage.getItem("cart");
    if(existingCartItem) {
      setCart(JSON.parse(existingCartItem));
    }
  }, [])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom Hook
export const useCart = () => useContext(CartContext);

export default CartProvider;





// import React, { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const userId = JSON.parse(localStorage.getItem("auth"))?.user?.id;
//     let existingCartItem = JSON.parse(localStorage.getItem("cart"));
//     console.log("existingCartItem", existingCartItem);
//     if(existingCartItem) {
//       setCart(existingCartItem[userId]);
//     }
//   }, [])

//   return (
//     <CartContext.Provider value={{ cart, setCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// // Custom Hook
// export const useCart = () => useContext(CartContext);

// export default CartProvider;










