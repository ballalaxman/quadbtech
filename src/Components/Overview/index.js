import { Button, Typography, Grid } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const Index = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (item) {
      setItem(items.filter((i) => id == i.show.id)[0]);
    }
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        alignContent: "center",
      }}
    >
      <Grid
        container
        columnSpacing={5}
        mt={10}
        alignItems="center"
        alignContent={"center"}
      >
        <Grid item md={3} sm={12}>
          <img src={item?.show?.image.original} width="100%" height="500px" />
        </Grid>
        <Grid item md={9} sm={12}>
          <Stack>
            <Typography
              sx={{
                fontSize: "2.1rem",
                fontWeight: "550",
              }}
            >
              {item?.show?.name}
            </Typography>
            <Stack direction={{ sm: "column", md: "row" }} spacing={10}>
              <Stack spacing={3}>
                <Stack>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "gray",
                    }}
                  >
                    Language
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "24px",
                    }}
                  >
                    {item?.show?.language}
                  </Typography>
                </Stack>
                <Stack>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "gray",
                    }}
                  >
                    Rating
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "24px",
                    }}
                  >
                    {item?.show?.rating?.average}
                  </Typography>
                </Stack>
              </Stack>
              <Stack spacing={3}>
                <Stack>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "gray",
                    }}
                  >
                    Premiured on
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "24px",
                    }}
                  >
                    {item?.show?.premiered}
                  </Typography>
                </Stack>
                <Stack>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "gray",
                    }}
                  >
                    Website
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      cursor: "pointer",
                    }}
                  >
                    <a href={`${item?.show?.officialSite}`} target="_blank">
                      {item?.show?.officialSite}
                    </a>
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack>
              <Typography
                variant="body1"
                sx={{
                  color: "gray",
                  pt: 3,
                }}
              >
                Description
              </Typography>

              <Typography
                sx={{
                  fontSize: "1.3rem",
                }}
              >
                <span
                  style={{
                    padding: "0rem",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `${item?.show?.summary}`,
                  }}
                />
              </Typography>
            </Stack>

            <Box>
              <Button
                variant="contained"
                onClick={() => {
                  navigate(`/bookticket/${item.show.id}`);
                }}
                sx={{
                  width: "200px",
                  py: 1.5,
                }}
              >
                Book ticket
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Index;
