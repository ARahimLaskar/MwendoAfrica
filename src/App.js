import logo from "./logo.svg";
import "./App.css";
import Products from "./Components/Products";
import { ChakraProvider } from "@chakra-ui/react";
import ProductDetails from "./Components/ProductDetails";
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Products />
        {/* <ProductDetails /> */}
      </ChakraProvider>
    </div>
  );
}

export default App;
