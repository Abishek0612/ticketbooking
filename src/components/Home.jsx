import React, { useEffect, useState } from 'react'
import { Container,  Toolbar,  FormControl, InputLabel, Select, MenuItem, Grid} from "@mui/material";
import axios from  'axios'
import MovieCards from './MovieCards';


function Home () {

  const [data, setData] = useState([])

  const [region, setRegion] = useState('India');

const handleChange = (event) => {
  setRegion(event.target.value)
}

const getData = async () => {
  var k = [];
  await axios
  .get( `https://api.themoviedb.org/3/movie/upcoming?api_key=b7cd3340a794e5a2f35e3abb820b497f&language=en-US&page=1&region=IN`)
  .then((res) => { k = res.data.results.filter( (i) => i );setData(k);
    console.log(k);
  });
};

const getGData = async () => {

var k = [];
await axios
  .get( `https://api.themoviedb.org/3/movie/upcoming?api_key=b7cd3340a794e5a2f35e3abb820b497f&language=en-US&page=1`)
  .then((res) => { k = res.data.results.filter( (i) => i );setData(k);
    console.log(k);
  });
};



useEffect(() => {
  (region ==='India' ? getData() : getGData())
}, []);

  return (
    <div>
    <Container>
    <Toolbar sx={{justifyContent:'end'}}>
      <FormControl sx={{width:'150px'}}>
        <InputLabel >Region</InputLabel>
        <Select 
          value={region}
          label={`Region`}
          onChange={handleChange}
        >
          <MenuItem value='India' onClick={getData}>India</MenuItem>
          <MenuItem value='Global' onClick={getGData} >Global</MenuItem>
        </Select>
      </FormControl>
      </Toolbar>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 , lg:12}}
      >
         {data &&
            data.map((i, key) => (

          <Grid item xs={2} sm={4} md={4} key={key}>
             <MovieCards passed={i}  />
          </Grid>
        ))}
      </Grid>

      
    </Container>

    </div>
  )
}

export default Home;

