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
        minHeight: "100vh",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f3f3f3",
        padding: 50,
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <div>
        <div
          style={{
            padding: 40,
            backgroundColor: "#fff",
            maxWidth: 700,
            width: 600,
            borderRadius: 5,
            boxShadow: "2px 6px 3px #fff",
          }}
        >
          <div>
            <div>
              <img src={"./assets/images/logo.jpg"} width={70} />
            </div>
            <h1 style={{ textAlign: "center", marginBottom: 10 }}>
              Congrats!!
            </h1>
            <p style={{ fontSize: 20, marginBottom: 10 }}>
              Create your Uniport Google Scholars portal Account
            </p>
            <Link href="/profile">
              <button
                onClick={() => console.log("thsi")}
                style={{
                  padding: 16,
                  width: "100%",
                  backgroundColor: COLORS.primary1,
                  outline: "none",
                  borderRadius: 4,
                  border: "1px solid " + COLORS.primary1,
                  fontSize: 14,
                  padding: 16,
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                CONTINUE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
