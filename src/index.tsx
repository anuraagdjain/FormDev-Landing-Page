import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { theme } from "./theme";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Box bg="blackAlpha.900" overflowY="hidden">
        <App />
      </Box>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
