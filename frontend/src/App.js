import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import WatchPage from "./pages/WatchPage/WatchPage";
import Details from "./pages/Details/Details";
import SearchPage from "./pages/SearchPage/SearchPage";
import MyList from "./pages/MyList/MyList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/movies" element={<HomePage type="movies" />} />
          <Route exact path="/series" element={<HomePage type="series" />} />
          <Route exact path="/watch/:id" element={<WatchPage />} />
          <Route exact path="/details/:id" element={<Details />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/my-list" element={<MyList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
