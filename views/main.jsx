import React from "react";
import Head from "./partials/Head";

export default function Main({ children }) {
  return (
    <>
      <Head />

      <body>{children}</body>
    </>
  );
}
