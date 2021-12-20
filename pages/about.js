import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { COLORS } from "../config/theme";

export default function login() {
  const router = useRouter();
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f3f3f3",
      }}
    >
      <div>
        <div
          style={{
            padding: 50,
            backgroundColor: "#fff",
            maxWidth: 700,
            width: 700,
            borderRadius: 5,
            boxShadow: "2px 6px 3px #fff",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <img src={"./assets/images/logo.jpg"} width={70} />
            </div>
            <h1>About Page</h1>
            <p>This is the about page</p>
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
}
