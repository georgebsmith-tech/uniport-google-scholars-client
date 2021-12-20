import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { COLORS } from "../config/theme";
import { motion } from "framer-motion";

export default function login() {
  const router = useRouter();
  return (
    <motion.div
      exit={{ opacity: 0 }}
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
          <div>
            <div>
              <img src={"./assets/images/logo.jpg"} width={70} />
            </div>
            <h1>sign in</h1>
            <p>To access account</p>
            <div>
              <input
                placeholder="Password"
                style={{
                  padding: 10,
                  width: "100%",
                  backgroundColor: "#f2f2f2",
                  outline: "none",
                  borderRadius: 4,
                  border: "none",
                  fontSize: 16,
                  marginBottom: 20,
                }}
              />
            </div>
            <button
              onClick={() => router.push("/profile")}
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
              }}
            >
              LOGIN
            </button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Link href="/forgot-password">
                <a style={{ color: COLORS.primary1 }}>Forgot Password</a>
              </Link>
            </div>
          </div>
          <div></div>
        </div>
        <div
          style={{ marginTop: 20, display: "flex", justifyContent: "center" }}
        >
          Dont have an account?{" "}
          <Link href="/register">
            <a style={{ color: COLORS.primary2 }}> Sign up now</a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
