import CartIcon from "../assets/cart.png";

const Cart = () => {
  return (
    <div>
      <button className="p-2 bg-transparent hover:scale-x-110">
        <img src={CartIcon} alt="Cart" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Cart;
