import { Routes, Route } from "react-router-dom";
import { MantineProvider } from '@mantine/core';

import Homepage from "../../pages/homepage/homepage";
import Mansi from "../../pages/tales/mansi/mansi";
import Rus from "../../pages/tales/rus/rus";
import Khanty from "../../pages/tales/khanty/khanty";
import Ukr from "../../pages/tales/ukr/ukr";
import Tat from "../../pages/tales/tat/tat";
import Notfoundpage from "../../pages/notfoundpage/notfoundpage";

import '@mantine/core/styles.css';


function App() {

  return (
    <>
      <MantineProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tales/mansi" element={<Mansi />} />
          <Route path="/tales/rus" element={<Rus />} />
          <Route path="/tales/khanty" element={<Khanty />} />
          <Route path="/tales/ukr" element={<Ukr />} />
          <Route path="/tales/tat" element={<Tat />} />
          <Route path="*" element={<Notfoundpage />} />
        </Routes>
      </MantineProvider>
    </>
  );
}

export default App;
