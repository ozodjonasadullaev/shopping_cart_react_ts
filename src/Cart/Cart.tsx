import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.style";
import { CartItemType } from "../App";

type Props = {
  cartItem: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItem, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItem.length === 0 ? <p>No items in cart</p> : null}
      {cartItem.map((item) => (
        <CartItem
          key={item.id}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          item={item}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItem).toFixed(2)}</h2>
    </Wrapper>
  );
};
export default Cart;
