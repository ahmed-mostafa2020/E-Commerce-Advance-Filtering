import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Recommended from "./components/Recommended";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sidebar />
              <Nav />
              <Recommended />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
