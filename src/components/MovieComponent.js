import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import MovieInfoComponent from "./movieInfoComponent";

const movieListContainer = {
  display: "flex",
  flexDirection: "row",
  gap: "30px",
  flexWrap: "wrap",
  padding: "30px",
  justifyContent: "space-evenly",
  boxShadow: "0 3px 10px 0 #aaa",
  cursor: "pointer",
};

// const MovieContainer = {
//   display: "flex",
//   flexDirection: "row",
//   padding: "10px",
// };

const InfoColumn = {
  fontSize: "16px",
  fontWeight: "500",
  color: "black",
  textTransform: "capitalize",
};

const MovieComponent = ({ movieData }) => {
  const [movieSelect, updateMovieSelect] = useState();
  const movieList = movieData;
  console.log(movieList);

  return (
    <React.Fragment>
      {movieSelect && (
        <MovieInfoComponent movieSelect={movieSelect}></MovieInfoComponent>
      )}
      <div style={movieListContainer}>
        {movieList.map((movie, index) => (
          <Card
            onClick={() => {
              updateMovieSelect(movie.imdbID);
            }}
            key={index}
            sx={{
              width: "280px",
            }}
          >
            <CardMedia
              component="img"
              height="362px"
              image={movie.Poster}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                component="span"
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "black",
                  margin: "15px 0",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {movie.Title}
              </Typography>
            </CardContent>
            <CardActions
              sx={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <span style={InfoColumn}>Year:{movie.Year}</span>
              <span style={InfoColumn}>Type:{movie.Type}</span>
            </CardActions>
          </Card>
        ))}
      </div>
    </React.Fragment>
  );
};

export default MovieComponent;
