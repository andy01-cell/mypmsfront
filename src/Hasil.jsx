import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { CssBaseline, makeStyles, Paper } from "@mui/material";
import { useHistory } from "react-router";
import { border, borderRadius } from "@mui/system";

const Hasil = () => {
  const history = useHistory();
  const state = history.location.state;
  console.log("data => ", state);

  const styleCircle = {
    height: "170px",
    width: "170px",
    backgroundColor: "#fff",
    border: "2px solid #6F5A5A",
    borderRadius: "50%",
    display: "inline-block",
  };

  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            background: "#C16C6C",
            height: "70vh",
            width: "100vw",
            paddingTop: "15vh",
          }}
        >
          <Typography
            variant="h3"
            textAlign="center"
            color="white"
            style={{
              fontFamily: "Mulish",
              marginLeft: "30px",
            }}
          >
            Diagnosa Premenstrual Syndrome
          </Typography>
          <Grid item marginTop="5ch">
            <Paper
              elevation={2}
              style={{
                marginLeft: 25,
                marginRight: 25,
                padding: 8,
                marginTop: -30,
              }}
            >
              <Grid
                container
                marginTop="0ch"
                justifyContent="space-evenly"
                direction={{
                  xs: "column-reverse",
                  md: "row",
                }}
              >
                <Grid item>
                  <Box
                    sx={{
                      p: 2,
                      border: "2px solid #C16C6C",
                      width: "380px",
                      height: "380px",
                      marginTop: "40px",
                      borderRadius: "10px",
                    }}
                  >
                    <Grid container justifyContent="center">
                      <Grid item></Grid>

                      <Typography
                        variant="h4"
                        textAlign="center"
                        color="#6F5A5A"
                      >
                        <b>Hasil Diagnosa</b>
                      </Typography>
                      <Typography
                        variant="h5"
                        color="#C16C6C"
                        textAlign="center"
                      >
                        Anda Dominan Terkena <br /> Gangguan PMS tipe
                      </Typography>
                      <Grid container style={styleCircle} alignItems="center">
                        <Grid
                          item
                          style={{
                            textAlign: "center",
                          }}
                          alignItems="center"
                        >
                          <Typography
                            variant="p"
                            fontSize="50px"
                            color="#6F5A5A"
                          >
                            <b>{state.type}</b>
                            <br />
                          </Typography>
                          <Typography
                            variant="p"
                            fontSize="25px"
                            color="#6E5A5A"
                          >
                            {state.typedesk}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Typography
                        variant="h5"
                        color="#C16C6C"
                        textAlign="center"
                      >
                        Dengan Persentase Terbesar :
                      </Typography>
                      <Box
                        sx={{
                          p: 2,
                          width: "50px",
                          height: "20px",
                          background: "#C16C6C",
                          color: "white",
                          borderRadius: "10px",
                        }}
                      >
                        {state.data}%
                      </Box>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box
                    sx={{
                      p: 2,
                      border: "2px solid #C16C6C",
                      width: "740px",
                      height: "482px",
                      marginTop: "40px",
                      borderRadius: "10px",
                    }}
                  >
                    <Typography variant="p" color="#6F5A5A" fontSize="30px">
                      <b>PMS Type - {state.type}</b> <br />
                    </Typography>
                    <Typography variant="p" fontSize="20px" color="#503C3C">
                      {state.pmsdeskx} <br />
                    </Typography>
                    <Typography variant="p " color="#C16C6C" fontSize="20px">
                      <b>Gejala </b> <br />
                    </Typography>
                    <Typography variant="p" fontSize="20px" color="#503C3C">
                      {state.gejaladesk} <br />
                    </Typography>
                    <Typography variant="p " color="#C16C6C" fontSize="20px">
                      <b>Penyebab </b> <br />
                    </Typography>
                    <Typography variant="p" fontSize="20px" color="#503C3C">
                      {state.penyebabdesk} <br />
                    </Typography>
                    <Typography variant="p " color="#C16C6C" fontSize="20px">
                      <b>Cara Penanganan Yang Tepat </b> <br />
                    </Typography>
                    <Typography variant="p" fontSize="20px" color="#503C3C">
                      {state.penanganandesk}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hasil;
