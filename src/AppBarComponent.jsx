import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { logopms } from "./assets";

const AppBarComponent = () => {
  let history = useHistory();
  function handleClick() {
    history.push("/Bantuan");
  }

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
                <Grid item xs={4} md={1.85}>
                  <Typography
                    variant="h6"
                    onClick={() => history.push("/")}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Informasi Umum
                  </Typography>
                </Grid>
                <Grid item xs={0.2} md={0.1}></Grid>
                <Grid item xs={4} md={1.2}>
                  <Typography
                    variant="h6"
                    onClick={() => history.push("/diagnosa")}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Diagnosa
                  </Typography>
                </Grid>
                <Grid item xs={0.2} md={0.1}></Grid>
                <Grid item xs={3} md={1}>
                  <Typography
                    variant="h6"
                    type="button"
                    onClick={handleClick}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Bantuan
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
