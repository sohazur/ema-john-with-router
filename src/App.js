import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/OrderReview/OrderReview";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Shop></Shop>} />
        <Route exact path="/shop" element={<Shop></Shop>} />
        <Route exact path="/review" element={<OrderReview></OrderReview>} />
        <Route exact path="/inventory" element={<Inventory></Inventory>} />
        <Route exact path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
