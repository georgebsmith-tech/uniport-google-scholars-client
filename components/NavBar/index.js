import React from "react";
import { COLORS } from "../../config/theme";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log();
  return (
    <nav
      style={{
        width: "100vw",

        backgroundColor: COLORS.primary1,
        marginBottom: 30,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 150px",
        position: "fixed",
      }}
    >
      <div>
        <Link href="/">
          <a>
            <img src="./assets/images/logo.jpg" style={{ width: 80 }} />
          </a>
        </Link>
      </div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {["Home", "About", "Register", "Login"].map((item) => {
          const path = item === "Home" ? "/" : "/" + item.toLowerCase();
          return (
            <li>
              <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                <a
                  className="main-link"
                  style={{
                    color: router.pathname === path ? COLORS.primary1 : "#fff",
                    padding: "10px 15px",
                    backgroundColor:
                      router.pathname === path
                        ? "#f4f4f4"
                        : item === "Register"
                        ? "red"
                        : "initial",
                    margin: "0px 15px",
                  }}
                >
                  {item}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
