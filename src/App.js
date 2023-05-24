import logo from "./logo.svg";
import "./App.css";
import Products from "./Components/Products";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Products />
      </ChakraProvider>
    </div>
  );
}

export default App;
