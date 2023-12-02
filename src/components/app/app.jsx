import { Routes, Route } from "react-router-dom";
import { MantineProvider } from '@mantine/core';

import Homepage from "../../pages/homepage/homepage";
import Mansi from "../../pages/tales/mansi/mansi";
import Khanty from "../../pages/tales/khanty/khanty";
import Notfoundpage from "../../pages/notfoundpage/notfoundpage";

import '@mantine/core/styles.css';


function App() {
  return (
    <>
      <MantineProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tales/mansi" element={<Mansi />} />
          <Route path="/tales/khanty" element={<Khanty />} />
          <Route path="*" element={<Notfoundpage />} />
        </Routes>
      </MantineProvider>
    </>
  );
}

export default App;
