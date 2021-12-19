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
            // backgroundColor: "#fff",
            width: "90%",

            borderRadius: 5,
            // boxShadow: "2px 6px 3px #fff",
            display: "grid",
            gridTemplateColumns: "1.5fr 2fr",
          }}
        >
          <div
            style={{
              padding: 30,
              backgroundColor: "#fff",

              borderRadius: 5,
              boxShadow: "2px 6px 3px #fff",
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <img src={"./assets/images/avatar.png"} width={70} />
            </div>
            <h2>John Doe</h2>
            <h3 style={{ fontWeight: "normal", textAlign: "center" }}>
              Senior Lecturer,Department of Mathematics
            </h3>
            <h4>Faculty of Science</h4>
            <h4 style={{ fontWeight: "normal" }}>Published 30 articles</h4>

            <button
              onClick={() => router.push("/login-pass")}
              style={{
                padding: 10,
                width: "100%",
                backgroundColor: COLORS.primary1,
                outline: "none",
                borderRadius: 4,
                border: "1px solid " + COLORS.primary1,
                fontSize: 16,
                padding: 10,
                color: "#fff",
                cursor: "pointer",
                marginTop: 20,
              }}
            >
              something
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
}
