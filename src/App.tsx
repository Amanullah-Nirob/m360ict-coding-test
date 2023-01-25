import { Route, Routes } from "react-router-dom";
import LayoutIndex from "./layouts";

function App() {
  return (
    <Routes>
      <Route index element={<LayoutIndex />} />
    </Routes>
  );
}

export default App;
