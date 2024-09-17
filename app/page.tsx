"use client";

import Link from "next/link";
import utilStyles from "../styles/utils.module.css"
import { Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useRef, useEffect } from 'react';


const TypographyCustom = styled(Typography)({
  height: "6em",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  textOverflow: "ellipsis",
});

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play(); // 動画の自動再生
    }
  }, []);

  return (
    <>
      <section className={utilStyles.headingMd}>
        <p>My name is oshimmmm</p>
        <p>
          (This is my portfolio, based on the {' '}
          <a href="https://nextjs.org/learn">Next.js</a>.)
        </p>
      </section>

      <Paper
        elevation={3}
        sx={{
          mt: { xs: 2, sm: 4, md: 8 },
        }}
      >
        <Typography
          fontWeight="bold"
          sx={{ textAlign: "center", fontSize: "2rem"}}
        >
          私のスキル
        </Typography>

        <Grid container spacing={4} my={2}>
            <Grid item xs={12} sm={6} md={4} mb={4}>
              <Card sx={{height: { xs: "300px", sm: "320px", md: "350px" }}}>
                <CardActionArea href={"https://next-js-headless-cms-gray.vercel.app/"} style={{ height: "350px" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/images/profile.JPG"
                    alt="oshimmmm"
                    sx={{
                      height: { xs: "150px", sm: "160px", md: "180px" },
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" marginTop={3}>
                      ホームページ制作
                    </Typography>
                    <TypographyCustom variant="body2" color="text.secondary">
                      Next.jsとheadlessCMSを用いて作成しています。
                      HTML,CSS,JavaScriptを用いたシンプルなサイト制作もできます。
                    </TypographyCustom>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} mb={4}>
              <Card sx={{height: { xs: "300px", sm: "320px", md: "350px" }}}>
                <CardActionArea href={"https://next-js-bbs.vercel.app/"}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/images/bbs2.JPG"
                    alt="oshimmmm"
                    sx={{
                      height: { xs: "150px", sm: "160px", md: "180px" },
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" marginTop={3}>
                      Webアプリ作成
                    </Typography>
                    <TypographyCustom variant="body2" color="text.secondary">
                      Next.jsとsupabaseを用いた掲示板アプリです。
                    </TypographyCustom>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} mb={4}>
              <Card sx={{height: { xs: "300px", sm: "320px", md: "350px" }}}>
                <CardActionArea href={"/videos/video.mp4"}>
                <CardMedia
                  component="video"
                  ref={videoRef}  // video要素を参照
                  loop
                  muted
                  sx={{
                  height: { xs: "150px", sm: "160px", md: "180px" },  // 高さをsxで指定
                  }}
                  src="/videos/video.mp4"  // 動画のパス
                />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" marginTop={5}>
                      Excel VBA
                    </Typography>
                    <TypographyCustom variant="body2" color="text.secondary">
                      勤務表を自動作成するマクロを作りました。
                    </TypographyCustom>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
        </Grid>
      </Paper>



      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
            <li className={utilStyles.listItem}>
              <Link href="/" legacyBehavior>
                <a>a</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                aaa
              </small>
            </li>
        </ul>
      </section>
    </>
  );
};
