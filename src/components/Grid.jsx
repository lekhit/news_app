import React, { useState,useEffect,useCallback } from "react";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Mycard from "./card";
//import Masonry from '@mui/lab/Masonry';
import MyJson from "../../sample.json";
import {Grid,Button} from "@mui/material";
import Navbar from "./navBar";
var axios = require("axios").default;
import InfiniteScroll from 'react-infinite-scroller';

import Loading from './loading';

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
  

  const [loading,setLoading]=useState(true);
  const [more,setMore]=useState(true);
  
const [cat, setCat] = useState("business");
  
  const [progress,setProgress]=useState(10);

  const updateNews =  () => {
    setLoading(true);
    var options = {
      method: 'GET',
      url: 'https://api.newscatcherapi.com/v2/search',
      params: {q:cat,lang:'en',page:page},
      headers: {
        'x-api-key': 'ZrLXv658QrY7ZcydLLzTst_U6gCzFBP5D3DB-zcvHCs'
      }
    };
    setProgress(30);
    axios.request(options).then(function (response) {
      setProgress(70);
      setArticles(response.data.articles)
      console.log(cat,response.data);
    }).catch(function (error) {
      console.error(cat,error);
    });

    setLoading(false);
    //let parsedData = await data.json();
    //console.log(parsedData);
    //setArticles(parsedData.results);
  };

  const fetch_more =async()=>{

  }
const fetchMore= useCallback( ()=>{
  if (loading ) {console.log('fetch more caller'); return;}

  console.log(loading,'function called to load');
  setPage(page+1);
  setLoading(true);
  var options = {
    method: 'GET',
    url: 'https://api.newscatcherapi.com/v2/search',
    params: {q:cat,lang:'en',page:page},
    headers: {
      'x-api-key': 'ZrLXv658QrY7ZcydLLzTst_U6gCzFBP5D3DB-zcvHCs'
    }
  }
  
  setProgress(30);
  axios.request(options).then(function (response) {
    setProgress(99);
    setArticles(articles.concat(response.data.articles))
    //setLoading(false);
    console.log(cat,response.data);
  }).catch(function (error) {
    console.error(cat,error);
    setLoading(false);
  });
  
},[loading,page]);

  //const { articles } = MyJson;
useEffect(()=>{
  updateNews();
  //console.log(page)
},[cat])

  return (
    <>
    {loading &&<Loading progress={progress} setProgress={setProgress} setLoading={setLoading}/> } 
      <Navbar
      setCat={setCat}
      />

      <Button onClick={updateNews}> start</Button>
      <div>
      <Box sx={{ minHeight: 253 }}>
      <InfiniteScroll
    loadMore={fetchMore}
    hasMore={more}
    loader={<Loading progress={progress} setProgress={setProgress} setLoading={setLoading}/>}
    // loader={< div>loading...</div>}
>
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
        </InfiniteScroll>
      </Box>
      </div>
      <Button onClick={()=>{setPage(page+1)}}>Next</Button>
    </>
  );
}
