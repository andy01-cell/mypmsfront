import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { pms } from "./assets";
import { useHistory } from "react-router";

const Bantuan = () => {
  const history = useHistory();
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
            <b>Bantuan</b>
          </Typography>
          <Grid item marginTop="20px">
            <Paper
              elevation={2}
              style={{
                marginLeft: 25,
                marginRight: 25,
                padding: 8,
                // marginBottom: "32px",
              }}
            >
              <Grid container justifyContent="center" margin="20px 0">
                <Grid item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="250"
                        src={pms}
                        alt="gejala pms"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Gejala-Gejala PMS
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Menurut Dr. Guy E. Abraham, ahli kandungan dan kebidanan dari Fakultas Kedokteran UCLA, AS, membagi.....
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions
                    // style={{ justifyContent: "center" }}
                    >
                      <Button
                        variant="outlined"
                        style={{
                          color: "#C16C6C",
                          borderColor: "#C16C6C",
                        }}
                        onClick={() => history.push("/gejala pms")}
                      >
                        <b>Read More</b>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <br />
                <Grid item xs={12} md={1}/>
                <Grid item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="250"
                        src={pms}
                        alt="gejala pms"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Informasi Pakar
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          berikut biodata informasi pakar............................<br/>
                          nama   :......<br/>
                          alamat :.......

                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions
                    // style={{ justifyContent: "center" }}
                    >
                      <Button
                        variant="outlined"
                        style={{
                          color: "#C16C6C",
                          borderColor: "#C16C6C",
                        }}
                        onClick={() => history.push("/info pakar")}
                      >
                        <b>Read More</b>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Bantuan;
