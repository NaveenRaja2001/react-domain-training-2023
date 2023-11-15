import { Routes, Route } from "react-router-dom";
import './App.css';
import { DetailPage } from './pages/DetailsPage/DetailPage';
import ExplorerHomePage from "./pages/ExplorerHomePage/ExplorerHomePage";



function App() {
  return (
    <Routes>
        <Route path="/" element={ <><ExplorerHomePage/></>}>
          <Route  path='home' element={ <><ExplorerHomePage/></>}/>
        </Route>
        <Route path="/details">
          <Route path=":placeName" element={<DetailPage/> } />
        </Route>
      </Routes>
  );
}

export default App;

