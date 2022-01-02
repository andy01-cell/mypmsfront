import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Tdkpms = () => {
  const styleCircle = {
    height: "170px",
    width: "170px",
    backgroundColor: "#fff",
    border: "2px solid #6F5A5A",
    borderRadius: "50%",
    display: "inline-block",
  };

  return (
    <Grid container xs={12} md={12}>
      <Grid
        item
        xs={12}
        md={12}
        style={{
          background: "#C16C6C",
          height: "70vh",
          // width: "100vw",
          paddingTop: "15vh",
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          color="white"
          style={{
            textShadow: "2px 2px #8E7F7F",
            marginLeft: "30px",
          }}
        >
          <b>DIAGNOSA PREMENSTRUAL SYNDROME</b>
        </Typography>
        <Grid container justifyContent="center">
          <Grid item marginTop="25px" xs={11.8} md={11.8}>
            <Paper
              elevation={10}
              style={{
                marginLeft: 25,
                marginRight: 25,
                padding: 8,
                // marginTop: -30,
              }}
            >
              <Grid
                container
                marginTop="35px"
                justifyContent="center"
                xs={12}
                md={12}
              >
                <Grid item xs={9} md={3.5}>
                  <Box
                    marginBottom="40px"
                    sx={{
                      p: 2,
                      border: "2px solid #C16C6C",
                      borderRadius: "10px",
                    }}
                  >
                    <Grid container justifyContent="center" xs={12} md={12}>
                      <Grid item xs={12} md={12}>
                        <Typography
                          variant="h4"
                          textAlign="center"
                          color="#6F5A5A"
                        >
                          <b>Hasil Diagnosa</b>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12} marginTop="50px">
                        <Typography
                          variant="h5"
                          color="#C16C6C"
                          textAlign="center"
                          fontSize="20px"
                          marginTop="10px"
                        >
                          <b>
                            ANDA TIDAK TERDETEKSI <br /> Premenstrual Syndrome
                          </b>
                        </Typography>
                      </Grid>

                      <Grid item xs={12} md={12} marginTop="70px">
                        <Typography
                          variant="h5"
                          color="#6F5A5A"
                          textAlign="center"
                          fontSize="20px"
                        >
                          <b>
                            Tetap jaga pola hidup sehat anda dengan makanan
                            bernutrisi dan rajin berolah raga
                          </b>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Tdkpms;
