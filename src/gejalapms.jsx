import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
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
            variant="h4"
            textAlign="center"
            color="white"
            style={{
              marginLeft: "30px",
              textShadow: "2px 2px #8E7F7F",
            }}
          >
            <b>Gejala-Gejala PMS</b>
          </Typography>
          <Grid container justifyContent="center">
            <Grid item marginTop="20px" xs={11.5} md={11.5}>
              <Paper
                elevation={2}
                style={{
                  marginLeft: 25,
                  marginRight: 25,
                  padding: 8,
                  // marginTop: -30,
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
                    {/* Tipe A */}
                    <Typography variant="p" fontSize="20px" color="#503C3C">
                      &emsp;Menurut Dr. Guy E. Abraham, ahli kandungan dan
                      kebidanan dari Fakultas Kedokteran UCLA, AS, membagi PMS
                      menurut gejalanya yakni PMS tipe A, H, C, dan D.
                      Kadang-kadang seorang wanita mengalami gejala gabungan,
                      misalnya tipe A dan D secara bersamaan. Berikut
                      gejala-gejala yang timbul sesuai tipe PMS masing-masing
                      yaitu
                      <br /> <br />
                    </Typography>
                    <Typography variant="p" color="#6F5A5A" fontSize="35px">
                      <b>TIPE-TIPE PMS</b> <br />
                    </Typography>
                    <Typography variant="p" color="#6F5A5A" fontSize="30px">
                      <b>1. PMS Type - A</b> <br />
                    </Typography>
                    <Typography variant="p" fontSize="20px" color="#503C3C">
                      Jika anda sering merasa khawatir, mudah marah dan
                      tersinggung, sensitif merasa labil berarti anda mengalami
                      PMS dengan tipe A <br />
                    </Typography>
                    <Typography variant="p " color="#C16C6C" fontSize="20px">
                      <b>Gejala </b> <br />
                    </Typography>
                    <Typography variant="p" fontSize="20px" color="#503C3C">
                      PMS tipe A (Anxiety) ditandai dengan gejala seperti rasa
                      cemas, sensitif, saraf tegang, persaan labil. Bahkan
                      beberapa wanita mengalami depresi ringan sampaisedang saat
                      sebelum mendapat haid. <br />
                    </Typography>
                    <Typography variant="p " color="#C16C6C" fontSize="20px">
                      {" "}
                      <b>Penyebab </b> <br />
                    </Typography>
                    <Typography variant="p" fontSize="20px" color="#503C3C">
                      Gejala ini timbul akibat ketidakseimbangan hormon estrogen
                      dan progesteron: hormon estrogen terlalu tinggi
                      dibandingkkan dengan hormon progestron <br />
                    </Typography>
                    <Typography variant="p " color="#C16C6C" fontSize="20px">
                      <b>Cara Penanganan Yang Tepat </b> <br />
                    </Typography>
                    <Typography variant="p" fontSize="20px" color="#503C3C">
                      Pemberian Hormon progestron kadang dillakukan untuk
                      mengurangi gejala, tetapi beberapa peneliti mengatakan,
                      pada penderita PMS bisa kekurangan vitamin B6dan
                      magnesium. Penderita PMS A sebaiknya banyak mengonsumsi
                      makanan berserat dan mengurangi atau membatasi minum kopi.{" "}
                      <br />
                      <br />
                    </Typography>

                    {/* Tipe H */}
                    <Typography variant="p" color="#6F5A5A" fontSize="30px">
                      <b>2. PMS Type - H</b> <br />
                    </Typography>
                    <Typography variant="p" fontSize="20px" color="#503C3C">
                      Jika anda merasa berat badan naik dan badan menjadi
                      menggemuk menjelang atau ketika menstruasi? Berarti anda
                      lagi mengalami PMS tipe H. Tipe ini menyebabkan tubuh
                      mengalami pembengkakkan seperti perut kembung,
                      payudaramembesar dan mengeras tangan atau kaki membesar
                      dan berat badan menambah <br />
                    </Typography>
                    <Typography variant="p " color="#C16C6C" fontSize="20px">
                      <b>Gejala </b> <br />
                    </Typography>
                    <Typography variant="p" fontSize="20px" color="#503C3C">
                      PMS tipe H (Hyperhydration) memiliki gejala edema
                      (pembengkakakkan). Perut kembung, nyeri pada buah dada,
                      pembengkakan tangan dan kaki, peningkatanberat badan
                      sebelum haid. Gejala tipe ini biasa dirasakan bersamaan
                      dengan tipe PMS lain. <br />
                    </Typography>
                    <Typography variant="p " color="#C16C6C" fontSize="20px">
                      {" "}
                      <b>Penyebab </b> <br />
                    </Typography>
                    <Typography variant="p" fontSize="20px" color="#503C3C">
                      Pembengkakan itu terjadi akibat berkumpulnya air pada
                      jaringan diluar sel (ekstrasel) karena tingginya asupan
                      garam atau gula pada diet penderita. <br />
                    </Typography>
                    <Typography variant="p " color="#C16C6C" fontSize="20px">
                      <b>Cara Penanganan Yang Tepat </b> <br />
                    </Typography>
                    <Typography variant="p" fontSize="20px" color="#503C3C">
                      Untuk mencegah terjadinya gejala ini penderita dianjurkan
                      mengurangi asupan garam dan gula pada diet makanan serta
                      membatasi minum sehari-hari. <br />
                      <br />
                    </Typography>

                    {/* Tipe C */}
                    <Typography variant="p" color="#6F5A5A" fontSize="30px">
                      <b>3. PMS Type - C</b> <br />
                    </Typography>
                    <Typography variant="p" fontSize="20px" color="#503C3C">
                      Jika anda sering merasa ingin ngemil terus-terusan saat
                      PMS berarti anda mengalami PMS dengan tipe C (Craving) .
                      Biasanya akan terasa selalu lapar dan nafsu makan tak
                      mudah terkendali <br />
                    </Typography>
                    <Typography variant="p " color="#C16C6C" fontSize="20px">
                      <b>Gejala </b> <br />
                    </Typography>
                    <Typography variant="p" fontSize="20px" color="#503C3C">
                      gejala hipoglikemia seperti kelelahan, jantung berdebar,
                      pusing kepala yang kadang-kadang sampai pingsan <br />
                    </Typography>
                    <Typography variant="p " color="#C16C6C" fontSize="20px">
                      {" "}
                      <b>Penyebab </b> <br />
                    </Typography>
                    <Typography variant="p" fontSize="20px" color="#503C3C">
                      Rasa ingin menyantap makanan tak terkendali dapat
                      disebabkan oleh stres, tinggi garam dalam diet makanan,
                      tidak terpenuhinya asam lemak esensial (omega 6)atau
                      kurangnya magnesium <br />
                    </Typography>
                    <Typography variant="p " color="#C16C6C" fontSize="20px">
                      <b>Cara Penanganan Yang Tepat </b> <br />
                    </Typography>
                    <Typography variant="p" fontSize="20px" color="#503C3C">
                      Untuk mencegah terjadinya gejala ini penderita dianjurkan
                      mengurangi asupan garam dan gula pada diet makanan serta
                      membatasi minum sehari-hari <br />
                      <br />
                    </Typography>

                    {/* Tipe D */}
                    <Typography variant="p" color="#6F5A5A" fontSize="30px">
                      <b>4. PMS Type - D</b> <br />
                    </Typography>
                    <Typography variant="p" fontSize="20px" color="#503C3C">
                      Saat anda mengalami PMS tipe D biasanya anda akan lebih
                      emosional hingga sulit tidur dan terus-menerus ingin
                      menangis <br />
                    </Typography>
                    <Typography variant="p " color="#C16C6C" fontSize="20px">
                      <b>Gejala </b> <br />
                    </Typography>
                    <Typography variant="p" fontSize="20px" color="#503C3C">
                      PMS tipe D (Depression) ditandai dengan gejala seperti
                      rasa depresi, ingin menangis, lemah, gangguan tidur,
                      pelupa, bingung, sulit dalam mengucapkan kata-kata
                      (Verbalisasi), bahkan kadang-kadang muncul rasa males 
                      gerak (mageran). Biasanya PMS Tipe D
                      berlangsung bersamaan dengan tipe A <br />
                    </Typography>
                    <Typography variant="p " color="#C16C6C" fontSize="20px">
                      {" "}
                      <b>Penyebab </b> <br />
                    </Typography>
                    <Typography variant="p" fontSize="20px" color="#503C3C">
                      PMS Tipe D murni disebabkan oleh ketidakseimbangan hormon
                      hestrogen dalam siklus haid terlalu tinggi dibandingkan
                      dengan hormon estrogennya. <br />
                    </Typography>
                    <Typography variant="p " color="#C16C6C" fontSize="20px">
                      <b>Cara Penanganan Yang Tepat </b> <br />
                    </Typography>
                    <Typography variant="p" fontSize="20px" color="#503C3C">
                      Saat anda mengalami tipe PMS yang ini lebih baik
                      memperbanyak mengonsumsi sayur-sayuran ataupun
                      kacang-kacangan yang kaya akan magnesium agar kondisi hati
                      anda lebih stabil
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
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default gejalapms;
