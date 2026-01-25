import ProductInfo from "./ProductInfo";
function Cart({ cartItems }) {
  return (
    <div className="absolute w-[95%] rounded-2xl top-18 z-500 bg-white left-1/2 -translate-x-1/2">
      <h4 className="p-5">Cart</h4>
      <hr className="text-gray-300" />
      <div className="p-5 flex ">
        {cartItems.length > 0
          ? cartItems.map((item) => (
              <ProductInfo itemInfo={item} key={item.itemName} />
            ))
          : "Cart Is Empty"}
      </div>
    </div>
  );
}

export default Cart;
