import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

const Diagnosa = () => {
  let history = useHistory();
  const [state, setState] = useState({
    nama: "",
    tgl: "",
    alamat: "",
    hp: "",
    usia: "",
  });

  async function inputClick(e) {
    e.preventDefault()
    console.log("state: ", state);
    history.push({
      pathname: "/daftar",
      state: {
        namap: state.nama,
        tglp: state.tgl,
        alamatp: state.alamat,
        usiap: state.usia,
        hpp: state.hp,
      },
    });
  }

  const onHandledChanged = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      {/* <form onSubmit={inputClick} encType="multipart/form-data"> */}
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
                textShadow:"2px 2px #8E7F7F"
              }}
            >
              <b>DIAGNOSA PREMENSTRUAL SYNDROME</b>
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
                <Grid container>
                  <Grid item xs={12} md={12} textAlign="center" color="#8E7F7F">
                    <h2>Biodata</h2>
                  </Grid>
                  <Grid item xs={0.75} md={0.75} />
                  <Grid item xs={10} md={10}>
                    <p>Masukkan Data Diri Anda</p>
                  </Grid>
                  <Grid container justifyContent="center" margin="5px 0">
                    <Grid item xs={4.75} md={4.75}>
                      <TextField
                        autoComplete="Nama"
                        name="nama"
                        required
                        id="Nama"
                        onChange={onHandledChanged}
                        label="Nama"
                        autoFocus
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={1} md={1}></Grid>
                    <Grid item xs={4.75} md={4.75}>
                      <TextField
                        required
                        id="HP"
                        label="No. Handphone"
                        type="number"
                        name="hp"
                        autoComplete="HP"
                        onChange={onHandledChanged}
                        size="small"
                        fullWidth
                        style={{}}
                      />
                    </Grid>
                  </Grid>
                  <Grid container justifyContent="center" margin="10px 0">
                    <Grid item xs={4.75} md={4.75}>
                      <TextField
                        autoComplete="date"
                        name="tgl"
                        required
                        onChange={onHandledChanged}
                        id="tgll"
                        label="Tgl Lahir dd/mm/yy"

                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={1} md={1}></Grid>
                    <Grid item xs={4.75} md={4.75}>
                      <TextField
                        required
                        id="usia"
                        label="usia"
                        type="number"
                        name="usia"
                        onChange={onHandledChanged}
                        autoComplete="usia"
                        size="small"
                        fullWidth
                        style={{}}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={0.75} md={0.75} />
                  <Grid item xs={4.75} md={4.75}>
                    <TextField
                      required
                      id="Alamat"
                      label="Alamat"
                      name="alamat"
                      autoComplete="Alamat"
                      onChange={onHandledChanged}
                      size="small"
                      fullWidth
                      style={{}}
                    />
                  </Grid>
                  <Grid item xs={6.5} md={6.5} />
                  <Grid container justifyContent="center" marginTop="30px">
                    <Grid item xs={3} md={3} display="flex">
                      <Button
                        variant="contained"
                        type="onSubmit"
                        style={{
                          background: "#C16C6C",
                          boxSizing: "border-box",
                          borderRadius: "12px",
                        }}
                        sx={{ m: 1, width: "35ch" }}
                        onClick={inputClick}
                      >
                        Daftar
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      {/* </form> */}
    </div>
  );
};

export default Diagnosa;
