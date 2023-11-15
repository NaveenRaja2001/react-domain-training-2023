import "./App.css";
import HomePage from "./page/HomePage/HomePage";
import  ItemPage  from './page/ItemPage/ItemPage.jsx';
import { Routes, Route } from "react-router-dom";
import OrderPage from "./page/OrderPage/OrderPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<><HomePage /></>}>
          <Route path="home" element={<><HomePage /></>}/>
        </Route>

        <Route path="/details">
          <Route path=":categories" element={<ItemPage />} />
        </Route>
        <Route path="/confirmOrder" element={<OrderPage />} />
      </Routes>
    
    </>
  );
}

export default App;
