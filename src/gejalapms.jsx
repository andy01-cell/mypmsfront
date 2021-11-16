import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { CssBaseline, makeStyles, Paper } from "@mui/material";
import { pms } from "./assets";

const gejalapms = () => {
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
            Gejala-Gejala PMS
          </Typography>
          <Grid item marginTop="5ch" height="170vh">
            <Paper
              elevation={2}
              style={{
                marginLeft: 25,
                marginRight: 25,
                padding: 8,
                marginTop: -30,
                // marginBottom: "32px",
              }}
            >
              <Grid
                container
                marginTop="0ch"
                direction={{
                  xs: "column-reverse",
                  md: "row",
                }}
              >
                <Grid item xs={0.2} md={0.2} />
                <Grid item xs={11.8} md={8} paddingTop="20px">
                  {/* <p>
                    &emsp; Premenstrual syndrome (PMS) adalah suatu keadaan
                    dimana seorang wanita merasakan beberapa perubahan pada
                    tubuh baik secara fisik, emosi, maupun perilaku yang terjadi
                    sebelum maupun sedang menstruasi, sehingga akan mengganggu
                    aktivitas harian dan selanjutnya akan menghilang bersamaan
                    dengan selesainya fase menstruasi.
                  </p> */}
                  <Typography variant="p" fontSize="20px" color="#503C3C">
                    &emsp;Premenstrual syndrome (PMS) adalah suatu keadaan
                    dimana seorang wanita merasakan beberapa perubahan pada
                    tubuh baik secara fisik, emosi, maupun perilaku yang terjadi
                    sebelum maupun sedang menstruasi, sehingga akan mengganggu
                    aktivitas harian dan selanjutnya akan menghilang bersamaan
                    dengan selesainya fase menstruasi.
                    <br /> <br />
                  </Typography>
                  <Typography variant="p" fontSize="24px" color="#C16C6C">
                    <b>Penyebab Premenstrual Syndrome</b> <br />
                  </Typography>
                  <Typography variant="p" fontSize="20px" color="#503C3C">
                    Penyebab premenstrual syndrome belum diketahui secara pasti.
                    Akan tetapi, ada beberapa faktor yang diduga dapat memicu
                    terjadinya PMS, yaitu:
                    <ul>
                      <li>
                        <b>Perubahan hormon</b>
                      </li>
                      Naik turunnya hormon tertentu pada wanita, yaitu hormon
                      estrogen dan progesteron, dapat memicu terjadinya PMS. Hal
                      ini akan hilang jika wanita mengalami kehamilan atau telah
                      menopause.
                      <li>
                        <b>Perubahan zat kimia di otak</b>
                      </li>
                      Naik turunnya serotonin, yaitu zat kimia di otak yang
                      mengatur suasana hati, juga dapat memicu terjadinya PMS.
                      Kurangnya jumlah serotonin di otak dapat menyebabkan
                      perubahan emosi, seperti rasa gelisah yang berlebihan.
                    </ul>
                  </Typography>
                  <Typography variant="p" fontSize="24px" color="#C16C6C">
                    <b>Faktor Risiko Premenstrual Syndrome</b>
                    <br />
                  </Typography>
                  <Typography variant="p" fontSize="20px" color="#503C3C">
                    Premenstrual syndrome pada dasarnya dapat dialami oleh
                    setiap wanita, tetapi beberapa faktor di bawah ini dapat
                    meningkatkan risiko seorang wanita mengalami PMS:
                    <ul>
                      <li>Memiliki riwayat depresi</li>
                      <li>
                        Memiliki riwayat premenstrual syndrome dalam keluarga
                      </li>
                      <li>Mengalami trauma fisik atau emosi</li>
                      <li>Merokok atau mengonsumsi minuman beralkohol</li>
                      <li>
                        Mengonsumsi terlalu banyak makanan yang mengandung
                        tinggi garam atau gula
                      </li>
                      <li>Jarang berolahraga</li>
                      <li>Kurang beristirahat atau tidur</li>
                    </ul>
                  </Typography>
                </Grid>
                <Grid item xs={0} md={0.5}></Grid>
                <Grid item xs={12} md={3} paddingTop="20px">
                  <Box
                    component="img"
                    sx={{
                      width: {
                        md: 250,
                        xs: 290,
                      },
                    }}
                    alt="The house from the offer."
                    src={pms}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={0.2} md={0.2} />
                <Grid item xs={11.6} md={11.6}>
                  <Typography variant="p" fontSize="20px" color="#503C3C">
                    &emsp;Menurut Dr. Guy E. Abraham, ahli kandungan dan
                    kebidanan dari Fakultas Kedokteran UCLA, AS, membagi PMS
                    menurut gejalanya yakni PMS tipe A, H, C, dan D.
                    Kadang-kadang seorang wanita mengalami gejala gabungan,
                    misalnya tipe A dan D secara bersamaan. Berikut
                    gejala-gejala yang timbul sesuai tipe PMS masing-masing
                    yaitu&emsp;
                    <b
                      style={{
                        cursor: "pointer",
                        color: "blue",
                      }}
                    >
                      klik disini
                    </b>
                    <br /> <br />
                  </Typography>
                </Grid>
                <Grid item xs={0.2} md={0.2} />
                <Grid item xs={0.2} md={0.2} />
                <Grid item xs={11.6} md={11.6}>
                  <Typography variant="p" fontSize="20px" color="#503C3C">
                    &emsp;Mypms merupakan Sistem Pakar berbasis web yang dapat
                    digunakan untuk mendiagnosa Premenstrual Syndrome (PSM) yang
                    terjadi pada wanita yang sudah mengalami masa menstruasi.
                    Untuk memulai Diagnosa pilih menu Diagnosa yang berada
                    diatas tab menu atau&emsp;
                    <b
                      style={{
                        cursor: "pointer",
                        color: "blue",
                      }}
                    >
                      klik disini
                    </b>
                  </Typography>
                </Grid>
                <Grid item xs={0.2} md={0.2} />
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default gejalapms;
