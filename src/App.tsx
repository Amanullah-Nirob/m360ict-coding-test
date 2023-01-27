import { Route, Routes } from "react-router-dom";
import LayoutIndex from "./layouts";
import LayoutMainContent from "./layouts/components/LayoutMainContent";
import SingleLaunch from "./layouts/components/SingleLaunch";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<LayoutIndex />}>
          <Route index element={<LayoutMainContent />} />
          <Route path="/singleLaunch/:id" element={<SingleLaunch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
