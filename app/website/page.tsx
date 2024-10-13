"use client"; //BoxやCardなどのmui material UIを使用している場合は、クライアントサイドレンダリング

import ContentHeader from '@/components/common/ContentHeader';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Grid2, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react'
import { styled } from "@mui/system";

const TypographyCustom = styled(Typography)({
  height: "6em",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  textOverflow: "ellipsis",
});

const website = () => {
  const breadcrumbs = [
    { title: "ホーム", path: "/" },
    { title: "ホームページ制作", path: "/website" },
  ];

  return (
    <div>
      <Box sx={{ flex: 1 }}>
            <ContentHeader breadcrumbs={breadcrumbs} title="ホームページ制作" />
      </Box>
      <Paper
        sx={{
          mt: { xs: 2, sm: 4, md: 8 },
          border: '1px solid #ddd', // 薄い灰色のボーダーを追加
        }}
        
      >
        <Typography
          fontWeight="bold"
          sx={{ textAlign: "center", fontSize: "2rem"}}
        >
          Products
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column", //縦に並べる
            alignItems: "center", //中央揃え
            justifyContent: "center",
            gap: 4, //各要素間のスペース
            my: 2,
          }} 
        >
              <Card sx={{width: "100%", maxWidth: 800}}>
                <CardActionArea
                  href={`https://next-js-headless-cms-gray.vercel.app/`}
                  sx={{ 
                    height: { xs: "300px", sm: "360px", md: "390px" },
                    border: '1px solid #ddd',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image="/images/homepage.JPG"
                    alt="oshimmmm"
                    sx={{
                      height: { xs: "160px", sm: "230px", md: "250px" },
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" marginTop={3}>
                      静的サイト作成
                    </Typography>
                    <TypographyCustom variant="body2" color="text.secondary">
                      WordPressで作成したサイトと異なり、SEOに強く、ページ遷移が高速です。Next.jsとheadlessCMSを用いて作成しています。
                    </TypographyCustom>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{width: "100%", maxWidth: 800, marginBottom: 5}}>
                <CardActionArea
                  href={`https://homepage-sample-html.vercel.app/#first-time`}
                  sx={{
                    height: { xs: "300px", sm: "360px", md: "390px" },
                    border: '1px solid #ddd',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image="/images/homepage2.JPG"
                    alt="oshimmmm"
                    sx={{
                      height: { xs: "160px", sm: "230px", md: "250px" },
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" marginTop={3}>
                      HTML,CSS,JavaScriptで作成
                    </Typography>
                    <TypographyCustom variant="body2" color="text.secondary">
                      HTML,CSS,JavaScriptを用いたシンプルなサイトです。
                    </TypographyCustom>
                  </CardContent>
                </CardActionArea>
              </Card>
        </Box>
      </Paper>
    </div>
  );
};

export default website;
