"use client"; //ThemeProviderとCssBaselineはクライアントサイドでの動作を保証するため、クライアントサイドレンダリング

import type { Metadata } from "next";
import "./globals.css";
import styles from "../components/layout.module.css"
import Common from "@/components/layout/common";
import { ReactNode } from "react";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

interface LayoutProps {
  children: ReactNode;
};


const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#ffa500",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#2556B4",
      },
      text: {
        primary: "#4D4D4D",
        secondary: "#999999",
      },
      background: {
        default: "#f8f8f8",
      },
      action: {
        hover: "rgba(0, 0, 0, 0.04)",
        selected: "rgba(0, 0, 0, 0.08)",
      },
    },
    typography: {
      fontFamily: "YuGothic,Yu Gothic,Noto Sans JP,sans-serif;",
      fontSize: 16,
      h1: {
        fontSize: "2rem",
        fontWeight: "bold",
        lineHeight: 1.5,
      },
      h2: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        lineHeight: 1.5,
      },
      h3: {
        fontSize: "1.25rem",
        fontWeight: "bold",
        lineHeight: 1.5,
      },
      h4: {
        fontSize: "1rem",
        fontWeight: "bold",
        lineHeight: 1.5,
      },
      h5: {
        fontSize: "1rem",
        fontWeight: "bold",
        lineHeight: 1.5,
      },
    },
    spacing: 4,
  });

  return (
    <html lang="ja">
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <body className={styles.container}>
            <Common />
            {children}
          </body>
      </ThemeProvider>
    </html>
  );
};

export default Layout;