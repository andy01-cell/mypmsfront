import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { CssBaseline, makeStyles, Paper } from "@mui/material";
import { pms } from "./assets";
import Avatar from "@mui/material/Avatar";

const infopakar = () => {
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
            Informasi Pakar
          </Typography>
          <Grid item>
            <Paper
              elevation={2}
              style={{
                marginLeft: 25,
                marginRight: 25,
                padding: 8,
                // marginBottom: "32px",
              }}
            >
              <Grid
                container
                marginTop="0ch"
                direction={{
                  xs: "column",
                  md: "row",
                }}
              >
                <Grid item xs={0.2} md={0.2} />
                <Grid item xs={12} md={3} paddingTop="20px">
                  <Grid container justifyContent="center" direction="row">
                    <Grid item>
                      <Avatar
                        alt="Remy Sharp"
                        src={pms}
                        sx={{
                          width: {
                            md: 250,
                            xs: 290,
                          },
                          height: {
                            md: 250,
                            xs: 290,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="p"
                        fontSize="25px"
                        color="#503C3C"
                        textAlign="center"
                      >
                        Dr.Bernard Mahfouz
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={0} md={0.5}></Grid>
                <Grid item xs={11.8} md={8} paddingTop="20px">
                  <Typography variant="p" fontSize="20px" color="#503C3C">
                    &emsp;Premenstrual syndrome (PMS) adalah suatu keadaan
                    dimana seorang wanita merasakan beberapa perubahan pada
                    tubuh baik secara fisik, emosi, maupun perilaku yang terjadi
                    sebelum maupun sedang menstruasi, sehingga akan mengganggu
                    aktivitas harian dan selanjutnya akan menghilang bersamaan
                    dengan selesainya fase menstruasi.
                    <br /> <br />
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default infopakar;
