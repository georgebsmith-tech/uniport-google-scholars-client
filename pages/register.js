import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { COLORS } from "../config/theme";
import { motion } from "framer-motion";

export default function Register() {
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
        <motion.div
          initial={{
            scale: 0.5,
          }}
          animate={{
            scale: 1,
            transition: {
              duration: 1,
            },
          }}
          exit={{ scale: 0 }}
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
            <h1>sign up</h1>
            <p style={{ fontSize: 20, marginBottom: 10 }}>
              Create your Uniport Google Scholars portal Account
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                columnGap: 30,
              }}
            >
              <div>
                <input
                  placeholder="First Name"
                  style={{
                    padding: 16,
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
              <div>
                <input
                  placeholder="Last Name"
                  style={{
                    padding: 16,
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
            </div>
            <div>
              <input
                placeholder="Email Address"
                style={{
                  padding: 16,
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
            <div>
              <input
                placeholder="Google Scholar Email"
                style={{
                  padding: 16,
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
            <div>
              <input
                placeholder="Password"
                style={{
                  padding: 16,
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
            <div>
              <input
                placeholder="Confirm Password"
                style={{
                  padding: 16,
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
              onClick={() => router.push("/account-creation-success")}
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
              SIGN UP
            </button>
            <div style={{ marginTop: 20 }}>
              <input type="checkbox" />
              <span style={{ marginLeft: 10 }}>
                i agree to the terms of services and Privacy policy of Uniport
                google Scholars Portal
              </span>
            </div>
          </div>
        </motion.div>
        <div
          style={{ marginTop: 20, display: "flex", justifyContent: "center" }}
        >
          Already have an account?{" "}
          <Link href="/login">
            <a style={{ color: COLORS.primary2 }}> Sign in now</a>
          </Link>
        </div>
      </div>
    </main>
  );
}
