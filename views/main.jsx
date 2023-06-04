import React from "react";
import Head from "./components/Head";

const Main = ({ children }) => (
  <>
    <Head />

    <body>{children}</body>
  </>
);

export default Main;
