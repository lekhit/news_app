import React, { useState } from "react";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Mycard from "./card";
//import Masonry from '@mui/lab/Masonry';
import MyJson from "../../sample.json";
import Grid from "@mui/material/Grid";
import Navbar from "./navBar";
import InfiniteScroll from "react-infinite-scroll-component";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  backgroundColor: "lightblue",
  color: theme.palette.text.secondary,
  "&:hover": {
    backgroundColor: "blue",
    opacity: [0.9, 0.8, 0.7]
  },
  onClick: {}
}));

export default function FixedColumns() {
  const [articles, setArticles] = useState(MyJson.articles);
  const [page, setPage] = useState(1);
  const [cat, setCat] = useState("business");

  const updateNews = async () => {
    const url = '';
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData);
    //setArticles(parsedData.results);
  };

  //const { articles } = MyJson;


  return (
    <>
      <Navbar
      setCat={setCat}
      />
      <Box sx={{ minHeight: 253 }}>
        <Grid
          container
          justifyContent="space-around"
          spacing={0.5}
          alignItems="stretch"
        >
          
          {articles.map((height, index) => (
            <Grid key={index} sx={{ p: 2 }}>
              <Item>
                {" "}
                <Mycard key={index} article={height} />
              </Item>
            </Grid>
          ))}
         
        </Grid>
      </Box>
    </>
  );
}
