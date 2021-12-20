import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { COLORS } from "../config/theme";
import { motion } from "framer-motion";

export default function login() {
  const router = useRouter();
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",

        padding: "0px 150px",
        backgroundColor: "#f3f3f3",
        paddingTop: 100,
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
            padding: 50,
            backgroundColor: "#fff",

            borderRadius: 5,
            boxShadow: "2px 6px 3px #fff",
            marginBottom: 20,
            width: "100%",
          }}
        >
          <div>
            <div>
              <img src={"./assets/images/logo.jpg"} width={70} />
            </div>
            <h1 style={{ marginBottom: 10 }}>Uniport Google Scholars Portal</h1>
            <h4>All published articles on Google Scholar</h4>
            <div></div>
          </div>
          <div></div>
        </motion.div>
        {/* <div style={{ backgroundColor: "#fff", padding: 20 }}>
          <div></div>
        </div> */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2.5fr 1fr",
            gridTemplateRows: 400,
            columnGap: 20,
            width: "100%",
          }}
        >
          <div>
            {" "}
            <div
              style={{
                marginBottom: 20,
                backgroundColor: "#fff",
                padding: 20,
              }}
            >
              <h4>Uniport Google Scholrs Portal</h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 15,
                }}
              >
                <ul>
                  <li>h-index: 20</li>
                  <li>i10-index: 345</li>
                  <li>Total Publications: 2342</li>
                  <li>Total Authors: 120</li>
                  <li>Total Co-Authors: 454</li>
                </ul>
                <div>
                  <img
                    src="./assets/images/citations.png"
                    style={{ maxWidth: 200 }}
                  />
                </div>
              </div>
            </div>
            <div style={{ backgroundColor: "#fff", padding: 20 }}>
              <h2 style={{ marginBottom: 20, fontSize: 20 }}>
                Latest Publications
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.3fr 0.2fr 0.2fr 0.2fr",
                }}
              >
                <div style={{ fontWeight: "700" }}>Citations</div>
                <div style={{ fontWeight: "700" }}>Cited by</div>
                <div style={{ fontWeight: "700" }}>h-index</div>
                <div style={{ fontWeight: "700" }}>i10-index</div>
              </div>
              <ul style={{ height: 200, overflowY: "auto" }}>
                {["item", "item2", "item3", "item4", "item5"].map((article) => (
                  <li style={{}}>
                    <Link href="/article">
                      <a
                        style={{
                          color: COLORS.primary2,
                          padding: 5,
                          display: "grid",
                          gridTemplateColumns: "1.4fr 0.2fr 0.2fr  0.2fr",
                        }}
                      >
                        article
                        <div>{Math.round(Math.random() * 10 + 10)}</div>
                        <div>{Math.round(Math.random() * 100 + 67)}</div>
                        <div>{Math.round(Math.random() * 20 + 58)}</div>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ backgroundColor: "#fff", padding: 20 }}>
            <h3>Latest News</h3>
            <ul>
              {[2, 3, 4, 5].map((news) => (
                <li>
                  <Link href="/">
                    <a>School Resumes on ...</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
