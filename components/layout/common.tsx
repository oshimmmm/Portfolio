"use client";

import styles from "../layout.module.css"
import utilStyles from "../../styles/utils.module.css"
import React from "react";

const Common: React.FC = () => {
    return (
        <header className={styles.header}>
            <>
              <img
                src="/images/profile.JPG"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt="oshimmmm"
              />
              <h1 className={utilStyles.heading2Xl}>oshimmmm</h1>
            </>
        </header>
    );
  };
  
  export default Common;