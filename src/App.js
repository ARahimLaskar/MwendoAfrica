import logo from "./logo.svg";
import "./App.css";
import Products from "./Components/Products";
import { ChakraProvider } from "@chakra-ui/react";
import ProductDetails from "./Components/ProductDetails";
import AllRoutes from "./All Routes/AllRoutes";
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        {/* <Products /> */}
        {/* <ProductDetails /> */}
        <AllRoutes />
      </ChakraProvider>
    </div>
  );
}

export default App;
