/* eslint-disable @next/next/no-img-element */
// types
import type { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="https://static.zerochan.net/Cirno.full.1345130.jpg"
        alt="Page not found"
      />
      <h1>Page not found</h1>
    </div>
  );
};

export default NotFound;
