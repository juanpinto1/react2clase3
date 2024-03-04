import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Detalle from "./views/Detalle";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import NotFound from "./components/Notfound";
const App = () => {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/pokemones"
          element={<Pokemones />}
        />
        <Route
          path="/pokemones/:name"
          element={<Detalle />}
        />
        <Route
          path="/*"
          element={<NotFound/>}
        />
        
      </Routes>
      
    </div>
  );
};
export default App;
