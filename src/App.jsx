import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
