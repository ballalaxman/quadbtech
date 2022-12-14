import { Box, Button, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://api.tvmaze.com/search/shows?q=all";
export const Index = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}`).then((res) => setShow(res.data));
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(show));
  }, [show]);

  return (
    <Box
      sx={{
        py: 5,
      }}
    >
      <Typography
        align="center"
        sx={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          pb: 5,
        }}
      >
        Tv Shows
      </Typography>
      <Grid container columnSpacing={3} rowSpacing={10}>
        {show &&
          show.map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack spacing={2}>
                <Typography
                  align="center"
                  sx={{
                    fontSize: "1.4rem",
                    fontWeight: "550",
                  }}
                >
                  Title: {item.show.name}
                </Typography>
                <img
                  src={item.show.image.original}
                  height="430px"
                  width="280px"
                />
                <Button
                  onClick={() => {
                    navigate(`/overview/${item.show.id}`);
                  }}
                >
                  Show more..
                </Button>
              </Stack>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};
export default Index;
