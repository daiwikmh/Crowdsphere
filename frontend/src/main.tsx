import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { StateContextProvider } from "./context";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { TelosEvmTestnet } from "@thirdweb-dev/chains";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={TelosEvmTestnet}>
      <BrowserRouter>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </BrowserRouter>
    </ThirdwebProvider>
  </React.StrictMode>
);
