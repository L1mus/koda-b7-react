import { useState } from "react";

export const Form = ({ onAddProduct }) => {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productStock, setProductStock] = useState(0);
  return (
    <>
      <div className="flex flex-col items-center gap-4 justify-center border border-solid border-amber-300 p-12">
        <h1 className="text-4xl  ">Input Product</h1>
        <div className="flex gap-16 items-center">
          <label htmlFor="name-product">Product Name</label>
          <input
            className=" border border-solid border-black rounded-xl px-3 py-1 "
            type="text"
            name="name-product"
            id="name-product"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="flex gap-6 items-center">
          <label htmlFor="desc-product">Product Description</label>
          <input
            className=" border border-solid border-black rounded-xl px-3 py-1 "
            type="text"
            name="desc-product"
            id="desc-product"
            value={productDesc}
            onChange={(e) => setProductDesc(e.target.value)}
          />
        </div>
        <div className="flex gap-16 items-center">
          <label htmlFor="stock-product">Product Stock</label>
          <input
            className=" border border-solid border-black rounded-xl px-3 py-1 "
            type="number"
            name="stock-product"
            id="stock-product"
            value={productStock}
            onChange={(e) => setProductStock(e.target.value)}
          />
        </div>
        <button
          className="border-2 rounded-md w-lg"
          onClick={() => {
            setProductName("");
            setProductDesc("");
            setProductStock(0);
            onAddProduct(productName, productDesc, productStock);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};
