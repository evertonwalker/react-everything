import { useAppSelector } from "@/app/hooks";

const CartCard = () => {
  const value = useAppSelector((state) => state.cart.value);

  return (
    <>
      <h2>Quantidade {value.length}</h2>
    </>
  );
};

export default CartCard;
