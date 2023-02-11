import MainPage from "./pages/mainPage/MainPage";
import Layout from "./components/layout/Layout";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import FavoritePage from "./pages/favoritePage/FavoritePage";
import BasketPage from "./pages/basketPage/BasketPage"
import ProductTrackingPage from "./pages/product_trackingPage/ProductTrackingPage"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="favorites" element={<FavoritePage/>}/>
          <Route path="basket" element={<BasketPage/>}/>
          <Route path="productTracking" element={<ProductTrackingPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
