import ProductInfo from "./ProductInfo";
function Cart({ cartItems }) {
  return (
    <div className="absolute w-[95%] rounded-2xl top-18 z-500 bg-white left-1/2 -translate-x-1/2">
      <h4 className="p-5">Cart</h4>
      <hr className="text-gray-300" />
      <div
        className={`flex justify-center flex-col items-center  ${cartItems.length === 0 ? "py-20" : "p-5"}`}
      >
        {cartItems.length >= 1 ? (
          cartItems.map((item) => (
            <ProductInfo itemInfo={item} key={item.itemName} />
          ))
        ) : (
          <p>Your Cart Is Empty</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
