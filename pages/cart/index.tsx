import CartCard from "./components/cart-card";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { addOrRemoveFromCart } from "../../features/cart/cart-slice";

const Cart = () => {
  const value = useAppSelector((state) => state.cart.value);
  const dispatch = useAppDispatch();

  const items = [
    {
      id: 1,
      number: [1, 2, 3],
    },
    {
      id: 2,
      number: [1, 2, 3],
    },
    {
      id: 3,
      number: [1, 2, 3],
    },
  ];

  function handleAddToCart(item: any) {
    dispatch(addOrRemoveFromCart(item));
  }

  function verifyIsOnCart(itemCart: any) {
    return !!value.find((item) => item.id === itemCart.id);
  }

  return (
    <>
      <CartCard />

      <ul>
        {items.map((item: any, index) => {
          return (
            <li key={index}>
              {item.id} -
              <button onClick={() => handleAddToCart(item)}>
                {verifyIsOnCart(item) ? "Remover" : "Adicionar"}{" "}
              </button>
            </li>
          );
        })}
      </ul>

      <h2>Items no cart</h2>

      <ul>
        {value.map((cartItem, index) => {
          return <li key={index}>{cartItem.id}</li>;
        })}
      </ul>
    </>
  );
};

export default Cart;
