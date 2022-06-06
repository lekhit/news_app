import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Mycard from './card';
import Masonry from '@mui/lab/Masonry';
import MyJson from '~/mysample.json';
import Grid from '@mui/material/Grid';
import Navbar from './navBar';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FixedColumns() {
  const updateNews = async () => {

  };

  const { articles } = MyJson;
  return (
    <>
    <Navbar/>
    <Box sx={{ minHeight: 253 }}>
      <Masonry columns={{ xs: 1, sm: 3 }} spacing={0.5}>
        {articles.map((height, index) => (
          <Grid item xs={2} sm={4} md={4} key={index} sx={{ p: 2 }}>
            <Mycard key={index} article={height} />
          </Grid>
        ))}
      </Masonry>
    </Box>

    </>
  );
}
