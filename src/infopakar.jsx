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
            <Grid item marginTop="20px" xs={12} md={11.5}>
              <Paper
                elevation={2}
                style={{
                  marginLeft: 25,
                  marginRight: 25,
                  padding: 8,
                  height: { xs: "50vh", md: "100vh" },
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
                    <Grid
                      container
                      justifyContent="center"
                      direction="row"
                      xs={12}
                    >
                      <Grid item xs={12}>
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
                  <Grid item xs={12} md={8} paddingTop="45px">
                    <Grid container xs={12} md={12}>
                      <Grid item xs={3.5} md={2.5}>
                        <Typography
                          variant="p"
                          fontSize={{ xs: "14px", md: "23px" }}
                          color="#503C3C"
                        >
                          <b>Nama</b>
                          <br /> <br />
                        </Typography>
                        <Typography
                          variant="p"
                          fontSize={{ xs: "14px", md: "23px" }}
                          color="#503C3C"
                        >
                          <b>Jenis Kelamin</b>
                          <br /> <br />
                        </Typography>
                        <Typography
                          variant="p"
                          fontSize={{ xs: "14px", md: "23px" }}
                          color="#503C3C"
                        >
                          <b>Alamat</b>
                          <br /> <br />
                        </Typography>
                        <Typography
                          variant="p"
                          fontSize={{ xs: "14px", md: "23px" }}
                          color="#503C3C"
                        >
                          <b>tempat</b>
                          <br /> <br />
                        </Typography>
                      </Grid>
                      <Grid item xs={0.2} md={0.2}>
                        <Typography
                          variant="p"
                          fontSize={{ xs: "14px", md: "23px" }}
                          color="#503C3C"
                        >
                          <b>:</b>
                          <br /> <br />
                        </Typography>
                        <Typography
                          variant="p"
                          fontSize={{ xs: "14px", md: "23px" }}
                          color="#503C3C"
                        >
                          <b>:</b>
                          <br /> <br />
                        </Typography>
                        <Typography
                          variant="p"
                          fontSize={{ xs: "14px", md: "23px" }}
                          color="#503C3C"
                        >
                          <b>:</b>
                          <br /> <br />
                        </Typography>
                        <Typography
                          variant="p"
                          fontSize={{ xs: "14px", md: "23px" }}
                          color="#503C3C"
                        >
                          <b>:</b>
                          <br /> <br />
                        </Typography>
                      </Grid>
                      <Grid item xs={8.3} md={9.3}>
                        <Typography
                          variant="p"
                          fontSize={{ xs: "14px", md: "23px" }}
                          color="#503C3C"
                        >
                          Dr. Wahyuni
                          <br /> <br />
                        </Typography>
                        <Typography
                          variant="p"
                          fontSize={{ xs: "14px", md: "23px" }}
                          color="#503C3C"
                        >
                          Perempuan
                          <br /> <br />
                        </Typography>
                        <Typography
                          variant="p"
                          fontSize={{ xs: "13px", md: "23px" }}
                          color="#503C3C"
                        >
                          Bulo-bulo, Bulukumpa, Kab.Bulukumba
                          <br /> <br />
                        </Typography>
                        <Typography
                          variant="p"
                          fontSize={{ xs: "14px", md: "23px" }}
                          color="#503C3C"
                        >
                          Klinik Naufal, Puskesmas Bontobangun Bulukumba
                          <br /> <br />
                        </Typography>
                      </Grid>
                    </Grid>
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
