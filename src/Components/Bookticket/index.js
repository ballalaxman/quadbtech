import { Container, Stack } from "@mui/system";
import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export const Index = () => {
  const [message, setMessage] = useState();
  const [item, setItem] = React.useState([]);
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [contact, setContact] = useState(0);
  const [row, setRow] = useState(0);
  const [seat, setSeat] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  React.useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (item) {
      setItem(items.filter((i) => id == i.show.id)[0]);
    }
  }, []);

  const submitHandler = () => {
    var details = {
      firstname: firstName,
      lastname: lastName,
      mail: mail,
      contact: contact,
      date: date,
      time: time,
      row: row,
      seat: seat,
    };
    localStorage.setItem("Details", JSON.stringify(details));
    if (
      firstName &&
      lastName &&
      mail &&
      contact &&
      date &&
      time &&
      row &&
      seat
    ) {
      setMessage("Booked successfully");
    } else {
      setMessage("Details Required");
    }
  };
  return (
    <div
      style={{
        background: "grey",
        width: "100%",
        height: "100%",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          p: 4,
          background: "#fff",
        }}
      >
        <Stack>
          <Typography
            align="center"
            sx={{
              fontSize: "2rem",
              fontWeight: "600",
              p: 2,
            }}
          >
            Movie Ticket Form for {item?.show?.name}
          </Typography>

          <Box
            sx={{
              p: 8,
              width: "600px",
              m: "auto",
            }}
          >
            <form>
              <Stack direction="column" spacing={3}>
                <Stack direction="row" alignItems="center" spacing={5}>
                  <Typography>Firstname :</Typography>
                  <TextField
                    variant="outlined"
                    label="Firstname"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </Stack>

                <Stack direction="row" alignItems="center" spacing={5}>
                  <Typography>Lastname :</Typography>
                  <TextField
                    variant="outlined"
                    label="Lastname"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </Stack>
                <Stack direction="row" alignItems="center" spacing={8}>
                  <Typography>Mail Id :</Typography>
                  <TextField
                    id="mail"
                    type="email"
                    label="Email"
                    onChange={(e) => {
                      setMail(e.target.value);
                    }}
                  />
                </Stack>

                <Stack direction="row" alignItems="center" spacing={4}>
                  <Typography>Contact No :</Typography>
                  <TextField
                    id="contact"
                    type="number"
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                  />
                </Stack>
                <Stack direction="row" alignItems="center" spacing={9}>
                  <Stack direction="row" alignItems="center" spacing={10}>
                    <Typography>Date :</Typography>
                    <TextField
                      id="date"
                      type="date"
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
                    />
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={7}>
                    <Typography>Time :</Typography>
                    <TextField
                      id="time"
                      type="time"
                      onChange={(e) => {
                        setTime(e.target.value);
                      }}
                    />
                  </Stack>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={11}>
                  <Typography>Row : </Typography>
                  <TextField
                    id="row"
                    type="number"
                    onChange={(e) => {
                      setRow(e.target.value);
                    }}
                  />
                </Stack>

                <Stack direction="row" alignItems="center" spacing={8}>
                  <Typography>Seat No: </Typography>
                  <TextField
                    id="row"
                    type="number"
                    onChange={(e) => {
                      setSeat(e.target.value);
                    }}
                  />
                </Stack>
                <Button
                  sx={{
                    border: "1px solid black",
                  }}
                  onClick={submitHandler}
                >
                  Submit
                </Button>
                {message && <Typography>{message}</Typography>}
              </Stack>
            </form>
          </Box>
        </Stack>
      </Container>
      //{" "}
    </div>
  );
};
export default Index;
