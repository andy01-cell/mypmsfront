import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import { logopms } from "./assets";

const AppBarComponent = () => {
  let history = useHistory();
  function handleClick() {
    history.push("/Bantuan");
  }

  const [disabled, setDisabled] = useState("#fff");
  const [disabled1, setDisabled1] = useState("#fff");
  const [disabled2, setDisabled2] = useState("#fff");

  const informasiklik = (params) => {
    console.log("test => ", params);

    if (params === "nyala1") {
      setDisabled("#e3dede");
      setDisabled1("#fff");
      setDisabled2("#fff");
    } else {
      setDisabled1("#fff");
      setDisabled("#fff");
      setDisabled2("#fff");
    }
  };
  const diagnosaklik = (params) => {
    console.log("test => ", params);

    if (params === "nyala2") {
      setDisabled1("#e3dede");
      setDisabled("#fff");
      setDisabled2("#fff");
    } else {
      setDisabled1("#fff");
      setDisabled("#fff");
      setDisabled2("#fff");
    }
  };

  const bantuanklik = (params) => {
    console.log("test => ", params);

    if (params === "nyala3") {
      setDisabled2("#e3dede");
      setDisabled1("#fff");
      setDisabled("#fff");
    } else {
      setDisabled1("#fff");
      setDisabled("#fff");
      setDisabled2("#fff");
    }
  };

  return (
    <Grid container>
      <AppBar
        elevation="2"
        style={{
          background: "#C16C6C",
        }}
      >
        <Toolbar>
          <Grid item xs={2} md={2}>
            <Box
              component="img"
              sx={{
                width: {
                  md: 100,
                  xs: 50,
                },
              }}
              alt="The house from the offer."
              src={logopms}
            />
          </Grid>
          <Grid item xs={10} md={12}>
            <nav>
              <Grid container justifyContent="end">
                <Grid item xs={4} md={1.85} onClick={() => informasiklik("nyala1")} >
                  <Typography
                    // <<<<<<< HEAD
                    variant="h6"
                    onClick={() => history.push("/")}
                    // =======
                    variant="p"
                    fontSize="17px"
                    onClick={() => history.push("/")}
                    // >>>>>>> 7c82bd05388c6c04e7cf82353b8df0b7e1a9a257
                    style={{
                      cursor: "pointer",
                    }}
                    color={disabled}
                  >
                    <b>Informasi Umum</b>
                  </Typography>
                </Grid>
                <Grid item xs={0.2} md={0.1}></Grid>
                <Grid item xs={4} md={1.2} onClick={() => diagnosaklik("nyala2")} >
                  <Typography
                    variant="p"
                    fontSize="17px"
                    onClick={() => history.push("/diagnosa")}
                    style={{
                      cursor: "pointer",
                    }}
                    color={disabled1}
                  >
                    <b>Diagnosa</b>
                  </Typography>
                </Grid>
                <Grid item xs={0.2} md={0.1}></Grid>
                <Grid item xs={3} md={1} onClick={() => bantuanklik("nyala3")}>
                  <Typography
                    variant="p"
                    fontSize="17px"
                    type="button"
                    onClick={handleClick}
                    style={{
                      cursor: "pointer",
                    }}
                    color={disabled2}
                  >
                    <b>Bantuan</b>
                  </Typography>
                </Grid>
              </Grid>
            </nav>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default AppBarComponent;
