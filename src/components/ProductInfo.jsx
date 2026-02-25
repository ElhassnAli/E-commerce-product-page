function ProductInfo({ itemInfo, deleteProduct }) {
  return (
    <div className="flex gap-5 justify-between items-center text-gray-500">
      <img src={itemInfo.image} alt="" className=" w-10 h-10" />
      <div>
        <h1>{itemInfo.itemName}</h1>
        <h1 className=" flex gap-3">
          ${itemInfo.itemPrice} <span>x{itemInfo.quantity}</span>
          <strong className="text-black">
            ${itemInfo.quantity * itemInfo.itemPrice}
          </strong>
        </h1>
      </div>
      <button onClick={() => deleteProduct(itemInfo.itemName)}>
        <img src="/images/icon-delete.svg" alt="" />
      </button>
    </div>
  );
}

export default ProductInfo;
