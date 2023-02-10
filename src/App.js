import MainPage from "./pages/mainPage/MainPage";
import Layout from "./components/layout/Layout";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import FavoritePage from "./pages/favoritePage/FavoritePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="favorites" element={<FavoritePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
