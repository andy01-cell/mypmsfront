import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, Paper } from "@mui/material";
import { dokterpria, dokterwanita, pms } from "./assets";
import Avatar from "@mui/material/Avatar";
import { borderRadius } from "@mui/system";

const infopakar = () => {
  return (
    <div>
      <Grid container xs={12} md={12}>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            background: "#C16C6C",
            height: "70vh",
            paddingTop: "15vh",
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            color="white"
            style={{
              textShadow: "2px 2px #8E7F7F",
            }}
          >
            <b>INFORMASI PAKAR</b>
          </Typography>
          <Grid container xs={12} md={12} justifyContent="center">
            <Grid item marginTop="20px" xs={12} md={11.5}>
              <Paper
                elevation={2}
                sx={{
                  height: "65vh",
                }}
              >
                <Grid
                  container
                  justifyContent="center"
                  marginTop="10px"
                  direction={{
                    xs: "column",
                    md: "row",
                  }}
                  xs={12}
                  md={12}
                >
                  <Grid item xs={12} md={7} marginTop="30px">
                    <Box
                      sx={{
                        border: "3px solid #BEBBBB",
                        borderRadius: "30px",
                      }}
                    >
                      <Grid container xs={12} md={12}>
                        <Grid item xs={12} md={3}>
                          <Avatar
                            alt="Remy Sharp"
                            src={dokterwanita}
                            sx={{
                              width: {
                                md: 150,
                                xs: 290,
                              },
                              height: {
                                md: 150,
                                xs: 290,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={9} paddingTop="20px">
                          <Grid container xs={12} md={12}>
                            <Grid item xs={3.5} md={12}>
                              <Typography
                                variant="p"
                                fontSize={{ xs: "14px", md: "23px" }}
                                color="#7E7474"
                              >
                                <b>PAKAR 1</b>
                                <br />
                              </Typography>
                            </Grid>
                            <Grid item xs={3.5} md={3}>
                              <Typography
                                variant="p"
                                fontSize={{ xs: "14px", md: "18px" }}
                                color="#7E7474"
                              >
                                <b>Nama</b>
                                <br />
                              </Typography>
                              <Typography
                                variant="p"
                                fontSize={{ xs: "14px", md: "18px" }}
                                color="#7E7474"
                              >
                                <b>Jenis Kelamin</b>
                                <br />
                              </Typography>
                              <Typography
                                variant="p"
                                fontSize={{ xs: "14px", md: "18px" }}
                                color="#7E7474"
                              >
                                <b>Alamat</b>
                                <br />
                              </Typography>
                            </Grid>
                            <Grid item xs={0.2} md={0.2}>
                              <Typography
                                variant="p"
                                fontSize={{ xs: "14px", md: "18px" }}
                                color="#7E7474"
                              >
                                <b>:</b>
                                <br />
                              </Typography>
                              <Typography
                                variant="p"
                                fontSize={{ xs: "14px", md: "18px" }}
                                color="#7E7474"
                              >
                                <b>:</b>
                                <br />
                              </Typography>
                              <Typography
                                variant="p"
                                fontSize={{ xs: "14px", md: "18px" }}
                                color="#7E7474"
                              >
                                <b>:</b>
                                <br />
                              </Typography>
                            </Grid>
                            <Grid item xs={8.3} md={8.8}>
                              <Typography
                                variant="p"
                                fontSize={{ xs: "14px", md: "18px" }}
                                color="#7E7474"
                              >
                                Dr. Marhamah, Sp. OG.
                                <br />
                              </Typography>
                              <Typography
                                variant="p"
                                fontSize={{ xs: "14px", md: "18px" }}
                                color="#7E7474"
                              >
                                Perempuan
                                <br />
                              </Typography>
                              <Typography
                                variant="p"
                                fontSize={{ xs: "13px", md: "18px" }}
                                color="#7E7474"
                              >
                                RS Awal Bros Makassar
                                <br />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={7} marginTop="30px">
                    <Box
                      sx={{
                        border: "3px solid #BEBBBB",
                        borderRadius: "30px",
                      }}
                    >
                      <Grid container xs={12} md={12}>
                        <Grid item xs={12} md={3}>
                          <Avatar
                            alt="Remy Sharp"
                            src={dokterwanita}
                            sx={{
                              width: {
                                md: 150,
                                xs: 290,
                              },
                              height: {
                                md: 150,
                                xs: 290,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={9} paddingTop="20px">
                          <Grid container xs={12} md={12}>
                            <Grid item xs={3.5} md={12}>
                              <Typography
                                variant="p"
                                fontSize={{ xs: "14px", md: "23px" }}
                                color="#7E7474"
                              >
                                <b>PAKAR 2</b>
                                <br />
                              </Typography>
                            </Grid>
                            <Grid item xs={3.5} md={3}>
                              <Typography
                                variant="p"
                                fontSize={{ xs: "14px", md: "18px" }}
                                color="#7E7474"
                              >
                                <b>Nama</b>
                                <br />
                              </Typography>
                              <Typography
                                variant="p"
                                fontSize={{ xs: "14px", md: "18px" }}
                                color="#7E7474"
                              >
                                <b>Jenis Kelamin</b>
                                <br />
                              </Typography>
                              <Typography
                                variant="p"
                                fontSize={{ xs: "14px", md: "18px" }}
                                color="#7E7474"
                              >
                                <b>Alamat</b>
                                <br />
                              </Typography>
                            </Grid>
                            <Grid item xs={0.2} md={0.2}>
                              <Typography
                                variant="p"
                                fontSize={{ xs: "14px", md: "18px" }}
                                color="#7E7474"
                              >
                                <b>:</b>
                                <br />
                              </Typography>
                              <Typography
                                variant="p"
                                fontSize={{ xs: "14px", md: "18px" }}
                                color="#7E7474"
                              >
                                <b>:</b>
                                <br />
                              </Typography>
                              <Typography
                                variant="p"
                                fontSize={{ xs: "14px", md: "18px" }}
                                color="#7E7474"
                              >
                                <b>:</b>
                                <br />
                              </Typography>
                            </Grid>
                            <Grid item xs={8.3} md={8.8}>
                              <Typography
                                variant="p"
                                fontSize={{ xs: "14px", md: "18px" }}
                                color="#7E7474"
                              >
                                Dr. Wahyuni
                                <br />
                              </Typography>
                              <Typography
                                variant="p"
                                fontSize={{ xs: "14px", md: "18px" }}
                                color="#7E7474"
                              >
                                Perempuan
                                <br />
                              </Typography>
                              <Typography
                                variant="p"
                                fontSize={{ xs: "13px", md: "18px" }}
                                color="#7E7474"
                              >
                                Klinik Naufal Bulukumba
                                <br />
                              </Typography>
                            </Grid>
                          </Grid>
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
    </div>
  );
};

export default infopakar;
