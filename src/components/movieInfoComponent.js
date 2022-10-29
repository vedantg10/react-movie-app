import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const API_KEY = "5b5644a0";

const MovieInfoComponent = (props) => {
  const [movieDetails, updateMovieDetails] = useState();
  const { movieSelect } = props;
  console.log(movieSelect);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${movieSelect}&apikey=${API_KEY}`)
      .then((response) => {
        console.log(response);
        updateMovieDetails(response.data);
      });
  }, [movieSelect]);

  const ImageContainer = {
    objectFit: "conver",
    height: "352px",
  };

  const movieInfo = {
    fontSize: "16px",
    fontWeight: "500",
    color: "black",
    margin: "4px 0",
    overflow: "hidden",
    textTransform: "capitalize",
    textOverflow: "ellipsis",
  };
  const spanStyle = {
    opacity: "0.5",
  };
  return movieDetails ? (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "row",
        p: "20px 30px",
        justifyContent: "center",
        borderBottom: "1px solid lightgray",
      }}
    >
      <img style={ImageContainer} src={movieDetails?.Poster} alt="Poster"></img>
      <Box sx={{ display: "flex", flexDirection: "column", m: "20px" }}>
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
          {movieDetails?.Title}
        </Typography>
        <Typography component="span" style={movieInfo}>
          IMDB Rating :{" "}
          <span style={spanStyle}>{movieDetails?.imdbRating} </span>
        </Typography>
        <Typography component="span" style={movieInfo}>
          Language : <span style={spanStyle}>{movieDetails?.Language} </span>
        </Typography>
        <Typography component="span" style={movieInfo}>
          Rated : <span style={spanStyle}>{movieDetails?.Rated} </span>
        </Typography>
        <Typography component="span" style={movieInfo}>
          Released : <span style={spanStyle}>{movieDetails?.Released} </span>
        </Typography>{" "}
        <Typography component="span" style={movieInfo}>
          Runtime : <span style={spanStyle}>{movieDetails?.Runtime} </span>
        </Typography>{" "}
        <Typography component="span" style={movieInfo}>
          Genre : <span style={spanStyle}>{movieDetails?.Genre} </span>
        </Typography>{" "}
        <Typography component="span" style={movieInfo}>
          Director : <span style={spanStyle}>{movieDetails?.Director} </span>
        </Typography>{" "}
        <Typography component="span" style={movieInfo}>
          Actors : <span style={spanStyle}>{movieDetails?.Actors} </span>
        </Typography>{" "}
        <Typography component="span" style={movieInfo}>
          Plot : <span style={spanStyle}>{movieDetails?.Plot} </span>
        </Typography>
      </Box>
      <IconButton
        onClick={() => {
          updateMovieDetails("");
        }}
        aria-label="close"
        sx={{
          position: "absolute",
          right: 40,
          top: 85,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  ) : (
    <></>
  );
};
export default MovieInfoComponent;
