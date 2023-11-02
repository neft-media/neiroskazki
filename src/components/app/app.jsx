// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from "../../pages/homepage/homepage"
import Khanty from "../../pages/tales/khanty/khanty";
import Notfoundpage from "../../pages/notfoundpage/notfoundpage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tales/khanty" element={<Khanty />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </>
  );
}

export default App;
