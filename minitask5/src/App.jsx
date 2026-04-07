import { Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import RickMorty from "./pages/RickMorty";
import DetailRickMorty from "./pages/DetailRickMorty";
// import AddProduct from "./pages/AddProduct.jsx";
import Counter from "./pages/Counter.jsx";
import Pokemon from "./pages/Pokemon.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}>
          {/* <Route path="addproduct" element={<AddProduct />} /> */}
          <Route path="counter" element={<Counter />} />
          <Route path="pokemon" element={<Pokemon />} />
          <Route path="rickmorty">
            <Route index element={<RickMorty />} />
            <Route path=":id/:slug" element={<DetailRickMorty />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
