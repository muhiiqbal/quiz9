import {Routes, Route} from "react-router-dom"
import PageHome from "./components/Home/PageHome";
import DetailPage from "./components/Detail/DetailPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageHome />}/> 
        <Route path="/:id" element={<DetailPage />}/> 
      </Routes>
    </div>
  );
}

export default App;
