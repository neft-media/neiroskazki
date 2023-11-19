// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import { MantineProvider } from '@mantine/core';

import { Scrollbars } from 'rc-scrollbars';

import Homepage from "../../pages/homepage/homepage"
import Khanty from "../../pages/tales/khanty/khanty";
import Notfoundpage from "../../pages/notfoundpage/notfoundpage";

import '@mantine/core/styles.css';


function App() {
  return (
    <>
      <MantineProvider>
        <Scrollbars style={{ height: "100vh" }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/tales/khanty" element={<Khanty />} />
            <Route path="*" element={<Notfoundpage />} />
          </Routes>
        </Scrollbars>
      </MantineProvider>
    </>
  );
}

export default App;
