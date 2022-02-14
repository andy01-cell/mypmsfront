import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import { useHistory } from "react-router";

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
              marginLeft: "30px",
            }}
          >
            <b>DIAGNOSA PREMENSTRUAL SYNDROME</b>
          </Typography>
          <Grid container justifyContent="center" xs={11.8} md={11.8}>
            <Grid item marginTop="25px" xs={12} md={12}>
              <Paper
                elevation={10}
                style={{
                  marginLeft: 25,
                  marginRight: 25,
                  padding: 8,
                }}
              >
                <Grid
                  container
                  marginTop="35px"
                  justifyContent={{ xs: "center", md: "space-evenly" }}
                  direction={{
                    xs: "column",
                    md: "row",
                  }}
                  xs={12}
                  md={12}
                >
                  <Grid
                    container
                    justifyContent="center"
                    xs={12}
                    md={3.5}
                    sx={{
                      p: 2,
                      border: "2px solid #C16C6C",
                      borderRadius: "10px",
                      maxHeight: "70vh"
                    }}
                  >
                    <Grid item xs={12} md={12}>
                      <Typography
                        variant="h4"
                        textAlign="center"
                        color="#6F5A5A"
                      >
                        <b>Hasil Diagnosa</b>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Typography
                        variant="h5"
                        color="#C16C6C"
                        textAlign="center"
                        fontSize="20px"
                        marginTop="10px"
                      >
                        <b>
                          Anda Dominan Terkena <br /> Gangguan PMS tipe
                        </b>
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      style={styleCircle}
                      alignItems="center"
                      marginTop="10px"
                      xs={6}
                      md={6}
                    >
                      <Grid
                        item
                        style={{
                          textAlign: "center",
                        }}
                        alignItems="center"
                        xs={12}
                        md={12}
                      >
                        <Typography variant="p" fontSize="50px" color="#6F5A5A">
                          <b>{state.type}</b>
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        style={{
                          textAlign: "center",
                        }}
                        alignItems="center"
                        xs={12}
                        md={12}
                      >
                        <Typography variant="p" fontSize="25px" color="#6E5A5A">
                          {state.typedesk}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={12} marginTop="10px">
                      <Typography
                        variant="h5"
                        color="#C16C6C"
                        textAlign="center"
                        fontSize="20px"
                      >
                        <b>Dengan Persentase Terbesar :</b>
                      </Typography>
                    </Grid>
                    <Grid item xs={3} md={3} marginTop="10px">
                      <Box
                        sx={{
                          p: 2,
                          height: "20px",
                          background: "#C16C6C",
                          color: "white",
                          borderRadius: "10px",
                        }}
                      >
                        {state.data}%
                      </Box>
                    </Grid>
                  </Grid>
                  <br />
                  <Grid
                    container
                    xs={12}
                    md={8}
                    sx={{
                      p: 2,
                      border: "2px solid #C16C6C",
                      width: "740px",
                      borderRadius: "10px",
                    }}
                  >
                    <Grid item xs={12} md={12}>
                      <Typography variant="p" color="#6F5A5A" fontSize="30px">
                        <b>PMS Type -{state.type}</b> <br />
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Typography variant="p" fontSize="20px" color="#503C3C">
                        {state.pmsdeskx}
                        <br />
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} paddingTop="10px">
                      <Typography variant="p " color="#C16C6C" fontSize="20px">
                        <b>Gejala </b> <br />
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Typography variant="p" fontSize="20px" color="#503C3C">
                        {state.gejaladesk}
                        <br />
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} paddingTop="10px">
                      <Typography variant="p " color="#C16C6C" fontSize="20px">
                        <b>Penyebab </b> <br />
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Typography variant="p" fontSize="20px" color="#503C3C">
                        {state.penyebabdesk}
                        <br />
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} paddingTop="10px">
                      <Typography variant="p " color="#C16C6C" fontSize="20px">
                        <b>Cara Penanganan Yang Tepat </b> <br />
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Typography variant="p" fontSize="20px" color="#503C3C">
                        {state.penanganandesk}
                      </Typography>
                    </Grid>
                    <br /><br />
                    <Grid item xs={12} md={12}>
                      <Typography variant="p" fontSize="20px" color="#503C3C">
                       <b> {state.vit}</b>
                      </Typography>
                    </Grid>
                    <br />
                    <Grid item xs={12} md={12}>
                      <Typography variant="p" fontSize="20px" color="#503C3C">
                        {state.deskvit}
                      </Typography>
                    </Grid>
                    <br /><br />
                    <Grid item xs={12} md={12}>
                      <Typography variant="p" fontSize="20px" color="#503C3C">
                        <b>{state.magne}</b>
                      </Typography>
                    </Grid>
                    <br />
                    <Grid item xs={12} md={12}>
                      <Typography variant="p" fontSize="20px" color="#503C3C">
                        {state.deskmagne}
                      </Typography>
                    </Grid>
                    <br /><br />
                    <Grid item xs={12} md={12}>
                      <Typography variant="p" fontSize="20px" color="#503C3C">
                        <b>{state.serhat}</b>
                      </Typography>
                    </Grid>
                    <br />
                    <Grid item xs={12} md={12}>
                      <Typography variant="p" fontSize="20px" color="#503C3C">
                        {state.deskserhat}
                      </Typography>
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

export default Hasil;
