import { Routes, Route } from "react-router-dom";
import './App.css';
import IndexPage from './pages/IndexPage/IndexPage.jsx';
import { DetailPage } from './pages/DetailsPage/DetailPage';



function App() {
  return (
    <Routes>
        <Route path="/" element={ <><IndexPage/></>}>
          <Route  path='home' element={ <><IndexPage/></>}/>
        </Route>
        <Route path="/details">
          <Route path=":placeName" element={<DetailPage/> } />
        </Route>
      </Routes>
  );
}

export default App;

