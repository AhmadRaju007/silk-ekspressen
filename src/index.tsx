import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BagView } from "./components/bagView/bag-view";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    action: {
      disabledBackground: "#e0e0e0",
      disabled: "#676060",
    },
    primary: {
      main: "#c7efc0",
    },
  },
});

export default theme;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/bags/:orderID/:bagID",
    element: <BagView />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
