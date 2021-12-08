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
            }}
          >
            <b>Informasi Pakar</b>
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
                        Dr.Bernard Mahfouz
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={0} md={0.5}></Grid>
                <Grid item xs={11.8} md={8} paddingTop="20px">
                  <Typography variant="p" fontSize="23px" color="#503C3C">
                    <b>Nama</b>  &emsp;  : Dr.blalala
                    <br /> <br />
                  </Typography>
                  <Typography variant="p" fontSize="23px" color="#503C3C">
                  <b>Alamat</b>&emsp;: Dr.blalala
                    <br /> <br />
                  </Typography>
                  <Typography variant="p" fontSize="23px" color="#503C3C">
                    <b>Instansi</b>&emsp;: Dr.blalala
                    <br /> <br />
                  </Typography>
                  <Typography variant="p" fontSize="23px" color="#503C3C">
                    <b>Email</b>&emsp;&emsp;: Dr.blalala
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
