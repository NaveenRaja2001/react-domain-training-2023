import "./App.css";
import HomePage from "./page/HomePage/HomePage";
import ItemPage from './page/ItemPage/ItemPage.tsx';
import { Routes, Route } from "react-router-dom";
import OrderPage from "./page/OrderPage/OrderPage";
import {routeConstant} from './constant/routeConstants.jsx'
function App() {
  return (
    <>
      <Routes>

        <Route path={routeConstant.homepage} element={<HomePage />} />

        <Route path={routeConstant.itemPage} element={<ItemPage />} />

        <Route path={routeConstant.confirmOrder} element={<OrderPage />} />

        <Route path={routeConstant.other} element={<HomePage />} />

      </Routes>
    </>

  )
}

export default App;
