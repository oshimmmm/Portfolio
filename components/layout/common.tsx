"use client";

import styles from "../layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import React from "react";
import Image from "next/image";

const Common: React.FC = () => {
    return (
        <header className={styles.header}>
            <>
                <Image
                    src="/images/profile.JPG"
                    className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                    alt="oshimmmm"
                    width={144} // 画像の幅を指定してください
                    height={144} // 画像の高さを指定してください
                />
                <h1 className={utilStyles.heading2Xl}>oshimmmm</h1>
            </>
        </header>
    );
};

export default Common;
