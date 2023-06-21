import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { Theme } from "./theme/Themes.jsx";
import { Provider } from "react-redux";
import { storage } from "./storage/Storage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ChakraProvider theme={Theme}>
        <Provider store={storage}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </ChakraProvider>
);
