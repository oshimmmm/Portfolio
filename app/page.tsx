"use client";

import Link from "next/link";
import utilStyles from "../styles/utils.module.css"
import { Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useRef, useEffect } from 'react';


const TypographyCustom = styled(Typography)({
  height: "6em",
  overflow: "hidden", //指定された高さを超えた場合、その超えた部分を隠す
  // display: "-webkit-box", //テキストを複数行にわたって表示させる
  WebkitLineClamp: 2, //表示する行数を制限する
  WebkitBoxOrient: "vertical", //テキストを縦方向に並べる,テキストが複数行で表示されるようになる
  textOverflow: "ellipsis", //テキストが指定した高さや行数を超えた場合に、省略記号（...） を表示する
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
          My Skill
        </Typography>

        <Grid container spacing={4} my={2}>
            <Grid 
              item
              xs={12} //extra-smallデバイスでは、この要素はデバイスの幅全て占める(12/12の幅で表示)
              sm={6} //smallデバイスでは、この要素はデバイスの幅の半分占める(6/12の幅で表示)。結果、要素が2つ横並びになる
              md={4} //mediumデバイスでは、この要素はデバイスの幅の1/3占める(4/12の幅で表示)。結果、要素が3つ横並びになる
              mb={4} //margin bottom 4
            >
              <Card sx={{height: { xs: "300px", sm: "320px", md: "350px" }}}>
                <CardActionArea href={`/website`} style={{ height: "350px" }}>
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
                    <Typography gutterBottom variant="h6" component="div" marginTop={3}>
                      ホームページ制作
                    </Typography>
                    <TypographyCustom variant="body2" color="text.secondary">
                      ホームページ制作案件の実績があります。HTML,CSS,JavaScript対応可能。静的サイト制作も対応できます。
                    </TypographyCustom>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} mb={4}>
              <Card sx={{height: { xs: "300px", sm: "320px", md: "350px" }}}>
                <CardActionArea href={`/webapp`}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/images/bbs2.jpg"
                    alt="oshimmmm"
                    sx={{
                      height: { xs: "150px", sm: "160px", md: "180px" },
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" marginTop={3}>
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
                    <Typography gutterBottom variant="h6" component="div" marginTop={5}>
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
        <h2 className={utilStyles.headingLg}>About Me</h2>
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
