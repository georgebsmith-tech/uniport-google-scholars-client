import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { COLORS } from "../config/theme";
import { motion } from "framer-motion";

export default function login() {
  const router = useRouter();

  const [edit, setEdit] = useState(false);

  const Input = ({ ...rest }) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #f2f2f2",
          padding: "7px 2px",
        }}
      >
        <label style={{ fontSize: 16, marginRight: 30 }}>First Name</label>
        <input
          {...rest}
          type="text"
          style={{
            padding: 10,

            backgroundColor: edit ? "#f2f2f2" : "#fff",
            outline: "none",
            borderRadius: 4,
            border: "none",
            fontSize: 16,
            flex: 1,
          }}
          disabled={!edit}
        />
      </div>
    );
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",

        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f3f3f3",
      }}
    >
      <div>
        <div
          style={{
            padding: "30px 0",
            // backgroundColor: "#fff",
            width: "100%",
            columnGap: 20,
            borderRadius: 5,
            // boxShadow: "2px 6px 3px #fff",
            display: "grid",
            gridTemplateColumns: "1.3fr 2fr",
          }}
        >
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
              Messages
            </button>
          </motion.div>
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
              padding: 30,
              backgroundColor: "#fff",

              borderRadius: 5,
              boxShadow: "2px 6px 3px #fff",

              gridTemplateColumns: "1fr 2fr",
            }}
          >
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Email" />
            <Input placeholder="Phone" />
            <Input placeholder="Address" />
            <button
              onClick={() => setEdit(!edit)}
              style={{
                padding: 10,
                backgroundColor: COLORS.primary1,
                outline: "none",
                borderRadius: 4,
                border: "1px solid " + COLORS.primary1,
                fontSize: 14,
                padding: "10px 15px",
                color: "#fff",
                cursor: "pointer",
                marginTop: 20,
              }}
            >
              {edit ? "SAVE" : "EDIT"}
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{
            scale: 1.5,
          }}
          animate={{
            scale: 1,
            transition: {
              duration: 0.7,
            },
          }}
          exit={{ scale: 0 }}
          style={{ backgroundColor: "#fff", padding: 20, borderRadius: 5 }}
        >
          <h2 style={{ padding: "10px 0px" }}>Published Articles</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.3fr 0.2fr 0.2fr",
            }}
          >
            <div style={{ fontWeight: "700" }}>Article</div>
            <div style={{ fontWeight: "700" }}>h5-index</div>
            <div style={{ fontWeight: "700" }}>h5-median</div>
          </div>
          <ul style={{ height: 200, overflowY: "auto" }}>
            {[1, 2, 3, 4, 5, 4, 5, 4, 5, 4].map((article) => (
              <li style={{}}>
                <Link href="/article">
                  <a
                    style={{
                      color: COLORS.primary2,
                      padding: 5,
                      display: "grid",
                      gridTemplateColumns: "1.4fr 0.2fr 0.2fr",
                    }}
                  >
                    article
                    <div>89</div>
                    <div>34</div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div style={{ padding: "10px 0" }}>
            <Link href="/view-all">
              <a style={{ color: COLORS.primary2 }}>View All</a>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
