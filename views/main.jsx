import React from "react";
import Head from "./components/Head";

export default function Main({ children }) {
  return (
    <>
      <Head />

      <body>{children}</body>
    </>
  );
}
