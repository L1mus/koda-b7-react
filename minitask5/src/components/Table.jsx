export const Table = ({ products }) => {
  return (
    <>
      <table className=" mt-8 max-w-2xl w-full">
        <thead className=" p-12 gap-12">
          <tr>
            <th className="border border-solid border-black">Code Product</th>
            <th className="border border-solid border-black">Product</th>
            <th className="border border-solid border-black">Description</th>
            <th className="border border-solid border-black">Stock</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className=" p-12 gap-12">
          {products.map((product) => (
            <tr className="text-center p-6" key={product.id}>
              <Rows product={product} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const Rows = ({ product }) => {
  return (
    <>
      <td className="border border-solid border-black">{product.id}</td>
      <td className="border border-solid border-black">{product.product}</td>
      <td className="border border-solid border-black">
        {product.description}
      </td>
      <td className="border border-solid border-black">{product.stock}</td>
    </>
  );
};
