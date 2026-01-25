function ProductInfo({ itemInfo }) {
  return (
    <div>
      <img src={itemInfo.image} alt="" />
      <h1>{itemInfo.itemPrice}</h1>
      <h1>{itemInfo.quantity}</h1>
      <h1>{itemInfo.itemName}</h1>
    </div>
  );
}

export default ProductInfo;
