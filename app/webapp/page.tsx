"use client";

import ContentHeader from '@/components/common/ContentHeader';
import { styled } from "@mui/system";
import { Box, Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import React from 'react'

const TypographyCustom = styled(Typography)({
  height: "6em",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  textOverflow: "ellipsis",
});

const webapp = () => {
  const breadcrumbs = [
    { title: "ホーム", path: "/" },
    { title: "Webアプリ制作", path: "/app" },
  ];

  return (
    <div>
      <Box sx={{ flex: 1 }}>
        <ContentHeader breadcrumbs={breadcrumbs} title="Webアプリ制作" />
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
                  href={`https://pdl1-app-next-js.vercel.app/`}
                  sx={{ 
                    height: { xs: "300px", sm: "360px", md: "390px" },
                    border: '1px solid #ddd',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image="/images/pdl1.JPG"
                    alt="oshimmmm"
                    sx={{
                      height: { xs: "160px", sm: "230px", md: "250px" },
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" marginTop={3}>
                      医薬品最適使用方法検索アプリ
                    </Typography>
                    <TypographyCustom variant="body2" color="text.secondary">
                      医薬品の最適使用について、毎回PMDA（医薬品医療機器総合機構）を検索して調べることが面倒だったので、Webスクレイピングを利用して自動検索するアプリをNext.jsを使って自作しました。
                    </TypographyCustom>
                  </CardContent>
                </CardActionArea>
              </Card>
        </Box>

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
                  href={`https://next-js-bbs.vercel.app/`}
                  sx={{ 
                    height: { xs: "300px", sm: "360px", md: "390px" },
                    border: '1px solid #ddd',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image="/images/bbs2.JPG"
                    alt="oshimmmm"
                    sx={{
                      height: { xs: "160px", sm: "230px", md: "250px" },
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" marginTop={3}>
                      掲示板アプリ
                    </Typography>
                    <TypographyCustom variant="body2" color="text.secondary">
                      フロントエンドはNext.js、バックエンドはsupabaseを用いて作成しています。
                    </TypographyCustom>
                  </CardContent>
                </CardActionArea>
              </Card>
        </Box>
      </Paper>
    </div>
  )
}

export default webapp
