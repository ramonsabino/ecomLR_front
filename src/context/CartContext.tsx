import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";
import api from "../axiosConfig";

interface CartItem {
  product: {
    _id: string;
    name: string;
    price: number;
  };
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  userId: string | null;
}

interface CartContextProps extends CartState {
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  clearCart: () => void;
  getCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

const cartReducer = (state: CartState, action: any): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const item = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.product._id === item.product_id
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...state.cartItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return { ...state, cartItems: updatedItems };
      }

      return { ...state, cartItems: [...state.cartItems, item] };
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product._id !== action.payload
        ),
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.product._id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.product._id === action.payload
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item
        ),
      };
    case "CLEAR_CART":
      return { ...state, cartItems: [] };
    case "SET_CART":
      return { ...state, cartItems: action.payload };
    case "SET_USER_ID":
      return { ...state, userId: action.payload };
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: [],
    userId: null,
  });

  const setUserId = (userId: string) => {
    dispatch({ type: "SET_USER_ID", payload: userId });
  };

  useEffect(() => {
    // Obtenha o userId do token de autenticação armazenado no localStorage
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken: any = JSON.parse(atob(token.split(".")[1]));
      setUserId(decodedToken.id);
    }
  }, []);

  const addToCart = async (item: CartItem) => {
    try {
      const token = localStorage.getItem("token");
      await api.post(
        "/api/cart/add",
        {
          productId: item.product._id,
          quantity: item.quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: "ADD_TO_CART", payload: item });
    } catch (error) {
      console.error("Erro ao adicionar item ao carrinho:", error);
    }
  };

  const removeFromCart = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      await api.post(
        "/api/cart/remove",
        {
          productId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: "REMOVE_FROM_CART", payload: id });
    } catch (error) {
      console.error("Erro ao remover item do carrinho:", error);
    }
  };

  const incrementQuantity = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      await api.post(
        "/api/cart/add",
        { productId: id, quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: "INCREMENT_QUANTITY", payload: id });
    } catch (error) {
      console.error(
        "Erro ao incrementar quantidade do item no carrinho:",
        error
      );
    }
  };

  const decrementQuantity = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      await api.post(
        "/api/cart/add",
        { productId: id, quantity: -1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: "DECREMENT_QUANTITY", payload: id });
    } catch (error) {
      console.error(
        "Erro ao decrementar quantidade do item no carrinho:",
        error
      );
    }
  };

  const clearCart = async () => {
    try {
      const token = localStorage.getItem("token");
      await api.post(
        "/api/cart/clear",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: "CLEAR_CART" });
    } catch (error) {
      console.error("Erro ao limpar o carrinho:", error);
    }
  };

  const getCart = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await api.get("/api/cart/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: "SET_CART", payload: response.data.products });
    } catch (error) {
      console.error("Erro ao obter o carrinho:", error);
    }
  };

  useEffect(() => {
    if (state.userId) {
      getCart();
    }
  }, [state.userId]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        clearCart,
        getCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
