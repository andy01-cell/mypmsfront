import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import { dokterpria, dokterwanita, pms } from "./assets";
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
            variant="h4"
            textAlign="center"
            color="white"
            style={{
              marginLeft: "30px",
              textShadow: "2px 2px #8E7F7F",
            }}
          >
            <b>INFORMASI PAKAR</b>
          </Typography>
          <Grid container justifyContent="center">
            <Grid item marginTop="20px" xs={11.5} md={11.5}>
              <Paper
                elevation={2}
                style={{
                  marginLeft: 25,
                  marginRight: 25,
                  padding: 8,
                  height: "70vh",
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
                          src={dokterwanita}
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
                          {/* nama pakar */}
                          Dr.Wahyuni
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={0} md={0.5}></Grid>
                  <Grid item xs={11.8} md={8} paddingTop="20px">
                    <Typography variant="p" fontSize="23px" color="#503C3C">
                      <b>Nama</b> &emsp;&emsp;&emsp;&emsp; : Dr. Wahyuni
                      <br /> <br />
                    </Typography>
                    <Typography variant="p" fontSize="23px" color="#503C3C">
                      <b>Jenis Kelamin</b>&emsp;: Perempuan
                      <br /> <br />
                    </Typography>
                    <Typography variant="p" fontSize="23px" color="#503C3C">
                      <b>Alamat</b>&emsp;&emsp;&emsp;&emsp;: Bulo-bulo, Bulukumpa, Kab.Bulukumba
                      <br /> <br />
                    </Typography>
                    <Typography variant="p" fontSize="23px" color="#503C3C">
                      <b>Tempat</b>&emsp;&emsp;&emsp;&emsp;: Klinik Naufal, Puskesmas Bontobangun Bulukumba
                      <br /> <br />
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default infopakar;
