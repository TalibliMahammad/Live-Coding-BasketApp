import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Products from "./Pages/Products/Products";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <div className="">
      <Header />
      <Routes >
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
