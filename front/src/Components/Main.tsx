import { ThemeProvider } from "styled-components";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Theme } from "../Theme";
import { Router } from "./Router";

function Main() {
  return (
    <ThemeProvider theme={Theme}>
      <ToastContainer />
      <Router />
    </ThemeProvider>
  );
}

export default Main;
