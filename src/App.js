import MainPage from "./pages/mainPage/MainPage";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import FavoritePage from "./pages/favoritePage/FavoritePage";
import BasketPage from "./pages/basketPage/BasketPage"
import ProductTrackingPage from "./pages/product_trackingPage/ProductTrackingPage"
import Product from "./pages/productPage/product/Product";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="favorites" element={<FavoritePage/>}/>
          <Route path="product" element={<Product/>}/>
          <Route path="basket" element={<BasketPage/>}/>
          <Route path="productTracking" element={<ProductTrackingPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
