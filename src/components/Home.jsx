import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Grid, Typography } from '@mui/material';

const Home = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setRows(response.data);
      } catch (error) {
        console.error('Error fetching data from API', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ margin: '3%' }}>
      <Grid container spacing={2}>
        {rows.map((row) => (
          <Grid item xs={12} sm={6} md={4} key={row.id}>
            <Card style={{ maxWidth: 345, margin: '0 auto' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {row.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {row.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {row.email}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
