import { Route, Routes } from "react-router-dom";
import LayoutIndex from "./layouts";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route index element={<LayoutIndex />} />
      </Routes>
    </div>
  );
}

export default App;
