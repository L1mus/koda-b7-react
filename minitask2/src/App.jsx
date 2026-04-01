import { useState } from "react";
import "./globals.css";
import { Form } from "./components/Form";
import { Table } from "./components/Table";

let nextId = 4;
const initialProducts = [
  { id: 0, product: "Susu", description: "Real Milk", stock: 4 },
  { id: 1, product: "Soft Drink", description: "Test Good", stock: 4 },
  {
    id: 2,
    product: "Alkohol",
    description: "Nah Good for u!!! Harom",
    stock: 4,
  },
  {
    id: 3,
    product: "Daging",
    description: "Enak",
    stock: 5,
  },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const handleAddProduct = (nameProduct, descProduct, stockProduct) => {
    setProducts([
      ...products,
      {
        id: nextId++,
        product: nameProduct,
        description: descProduct,
        stock: stockProduct,
      },
    ]);
  };

  return (
    <>
      <main className="grid place-content-center">
        <Form onAddProduct={handleAddProduct} />
        <Table products={products} />
      </main>
    </>
  );
}

export default App;
