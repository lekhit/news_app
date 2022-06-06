import React,{useState} from 'react';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Mycard from './card';
//import Masonry from '@mui/lab/Masonry';
import MyJson from '~/sample.json';
import Grid from '@mui/material/Grid';
import Navbar from './navBar';
import InfiniteScroll from "react-infinite-scroll-component";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  backgroundColor:"lightblue",
  color: theme.palette.text.secondary,
  '&:hover': {
    backgroundColor: 'blue',
    opacity: [0.9, 0.8, 0.7],
  },
  'onClick':{}
}));

export default function FixedColumns() {
  const [articles,setArticles]=useState(MyJson.articles);
  const updateNews = async () => {
const url=``
  };


  //const { articles } = MyJson;
  return (
    <>
    <Navbar/>
    <Box sx={{ minHeight: 253 }}>
      <Grid container   justifyContent="space-around"
  spacing={0.5}
  alignItems="stretch"
  >
    <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
        {articles.map((height, index) => (
          <Grid key={index} sx={{ p: 2 }}>
           <Item> <Mycard key={index} article={height} /></Item>
          </Grid>
        ))}
         </InfiniteScroll>
      </Grid>
    </Box>

    </>
  );
}
