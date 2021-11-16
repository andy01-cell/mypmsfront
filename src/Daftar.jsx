import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { CssBaseline, makeStyles, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { collection, addDoc } from "firebase/firestore";
import { app, db } from "./config/FirebaseApp";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Daftar = () => {
  const history = useHistory();
  const [state, setState] = useState({
    sensitif: false,
    labil: false,
    cemas: false,
    saraf: false,
    depresiri: false,
    nyeri: false,
    endema: false,
    perut: false,
    berat: false,
    bengkak: false,
    pusing: false,
    Kelelahan: false,
    Lapar: false,
    jantung: false,
    pinsang: false,
    depresi: false,
    tidur: false,
    stres: false,
    verbalisasi: false,
    menangis: false,
    pelupa: false,
    lemah: false,
    bingung: false,
    bundir: false,
    none: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    console.log("data :", event.target.checked);
  };

  const {
    sensitif,
    labil,
    cemas,
    saraf,
    depresiri,
    nyeri,
    endema,
    perut,
    berat,
    bengkak,
    pusing,
    Kelelahan,
    Lapar,
    jantung,
    pinsang,
    depresi,
    tidur,
    stres,
    verbalisasi,
    menangis,
    pelupa,
    lemah,
    bingung,
    bundir,
  } = state;
  const error =
    [
      sensitif,
      labil,
      cemas,
      saraf,
      depresiri,
      nyeri,
      endema,
      perut,
      berat,
      bengkak,
      pusing,
      Kelelahan,
      Lapar,
      jantung,
      pinsang,
      depresi,
      tidur,
      stres,
      verbalisasi,
      menangis,
      pelupa,
      lemah,
      bingung,
      bundir,
    ].filter((v) => v).length !== 2;

  async function inputClick(e) {
    // Add a new document with a generated id.
    e.preventDefault();
    let persen;
    let tipe;
    let tipedesk;
    let pmsdesk;
    let gejala;
    let penyebab;
    let penanganan;

    console.log(state);
    axios
      .post("http://localhost:4700/identification/analyzer", {
        test: state,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        const result = res.data.result;
        console.log("post succes : ", result);
        const hasilprediksi = result.prediction;
        if (hasilprediksi == 1) {
          persen = result.probabilities[0];
          tipe = "A";
          tipedesk = "(Anxiety)";
          pmsdesk =
            "Jika anda sering merasa khawatir, mudah marah dan tersinggung, sensitif merasa labil berarti anda mengalami PMS dengan tipe A";
          gejala =
            "PMS tipe A (Anxiety) ditandai dengan gejala seperti rasa cemas, sensitif, saraf tegang, persaan labil. Bahkan beberapa wanita mengalami depresi ringan sampai sedang saat sebelum mendapat haid.";
          penyebab =
            "Gejala ini timbul akibat ketidakseimbangan hormon estrogen dan progesteron: hormon estrogen terlalu tinggi dibandingkkan dengan hormon progestron";
          penanganan =
            "Pemberian Hormon progestron kadang dillakukan untuk mengurangi gejala, tetapi beberapa peneliti mengatakan, pada penderita PMS bisa kekurangan vitamin B6 dan magnesium. Penderita PMS A sebaiknya banyak mengonsumsi makanan berserat dan mengurangi atau membatasi minum kopi. ";
        } else if (hasilprediksi == 2) {
          persen = result.probabilities[1];
          tipe = "H";
          tipedesk = "(Hyper-hydration)";
          pmsdesk =
            "Jika anda merasa berat badan naik dan badan menjadi menggemuk menjelang atau ketika menstruasi? Berarti anda lagi mengalami PMS tipe H. Tipe ini menyebabkan tubuh mengalami pembengkakkan seperti perut kembung, payudaramembesar dan mengeras tangan atau kaki membesar dan berat badan menambah ";
          gejala =
            "PMS tipe H (Hyperhydration) memiliki gejala edema (pembengkakakkan). Perut kembung, nyeri pada buah dada, pembengkakan tangan dan kaki, peningkatan berat badan sebelum haid. Gejala tipe ini biasa dirasakan bersamaan dengan tipe PMS lain.";
          penyebab =
            "Pembengkakan itu terjadi akibat berkumpulnya air pada jaringan diluar sel (ekstrasel) karena tingginya asupan garam atau gula pada diet penderita.";
          penanganan =
            "Untuk mencegah terjadinya gejala ini penderita dianjurkan mengurangi asupan garam dan gula pada diet makanan serta membatasi minum sehari-hari.";
        } else if (hasilprediksi == 3) {
          tipe = "C";
          tipedesk = "(Craving)";
          persen = result.probabilities[2];
          pmsdesk =
            "Jika anda sering merasa ingin ngemil terus-terusan saat PMS berarti anda mengalami PMS dengan tipe C (Craving) . Biasanya akan terasa selalu lapar dan nafsu makan tak mudah terkendali";
          gejala =
            "gejala hipoglikemia seperti kelelahan, jantung berdebar, pusing kepala yang kadang-kadang sampai pingsan";
          penyebab =
            "Rasa ingin menyantap makanan tak terkendali dapat disebabkan oleh stres, tinggi garam dalam diet makanan, tidak terpenuhinya asam lemak esensial (omega 6) atau kurangnya magnesium";
          penanganan =
            "Untuk mencegah terjadinya gejala ini penderita dianjurkan mengurangi asupan garam dan gula pada diet makanan serta membatasi minum sehari-hari";
        } else if (hasilprediksi == 4) {
          tipe = "D";
          tipedesk = "(Depression)";
          persen = result.probabilities[3];
          pmsdesk =
            "Saat anda mengalami PMS tipe D biasanya anda akan lebih emosional hingga sulit tidur dan terus-menerus ingin menangis";
          gejala =
            "PMS tipe D (Depression) ditandai dengan gejala seperti rasa depresi, ingin menangis, lemah, gangguan tidur, pelupa, bingung, sulit dalam mengucapkan kata-kata (Verbalisasi), bahkan kadang-kadang muncul rasa ingin bunuh diri atau mencoba bunuh diri. Biasanya PMS Tipe D berlangsung bersamaan dengan tipe A";
          penyebab =
            "PMS Tipe D murni disebabkan oleh ketidakseimbangan hormon hestrogen dalam siklus haid terlalu tinggi dibandingkan dengan hormon estrogennya.";
          penanganan =
            "Saat anda mengalami tipe PMS yang ini lebih baik memperbanyak mengonsumsi sayur-sayuran ataupun kacang-kacangan yang kaya akan magnesium agar kondisi hati anda lebih stabil";
        } else {
          console.log("persen: ", persen);
        }

        history.push({
          pathname: "/Hasil",
          state: {
            data: parseFloat(persen * 100).toFixed(2),
            type: tipe,
            typedesk: tipedesk,
            pmsdeskx: pmsdesk,
            gejaladesk: gejala,
            penyebabdesk: penyebab,
            penanganandesk: penanganan,
          },
        });
        const docRef = addDoc(collection(db, "daftardiagnosa"), {
          sensitif: state.sensitif,
          labil: state.labil,
          cemas: state.cemas,
          saraf: state.saraf,
          depresiri: state.depresiri,
          nyeri: state.nyeri,
          endema: state.endema,
          perut: state.perut,
          berat: state.berat,
          bengkak: state.bengkak,
          pusing: state.pusing,
          lapar: state.Lapar,
          jantung: state.jantung,
          pinsang: state.pinsang,
          depresi: state.depresi,
          tidur: state.tidur,
          stres: state.stres,
          verbalisasi: state.verbalisasi,
          menangis: state.menangis,
          pelupa: state.pelupa,
          lemah: state.lemah,
          bingung: state.bingung,
          bundir: state.bundir,
          persentase: persen,
        });
      })
      .catch((err) => {
        console.log("ERRRR:: ", err);
      });
    // history.push("/daftar");
  }

  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            background: "#C16C6C",
            height: "50vh",
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
            Diagnosa Premenstrual Syndrome
          </Typography>
          <Grid container justifyContent="center">
            <Grid item marginTop="5ch" xs={10} md={9}>
              <Paper
                elevation={2}
                style={{
                  padding: 8,
                  marginTop: -30,
                }}
              >
                <Grid container>
                  <Grid item xs={12} md={12} textAlign="center">
                    <Typography variant="p" fontSize="25px" color="#6F5A5A">
                      Pilih Gejala
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Box sx={{ display: "flex" }}>
                      <FormControl
                        sx={{ m: 3 }}
                        component="fieldset"
                        variant="standard"
                      >
                        <FormGroup>
                          <Grid
                            container
                            justifyContent="center"
                            direction="row"
                          >
                            <Grid item xs={12} md={4.5}>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={sensitif}
                                      onChange={handleChange}
                                      name="sensitif"
                                    />
                                  }
                                  label="Sensitif"
                                />
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={labil}
                                      onChange={handleChange}
                                      name="labil"
                                    />
                                  }
                                  label="Perasaan Labil"
                                />
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={cemas}
                                      onChange={handleChange}
                                      name="cemas"
                                    />
                                  }
                                  label="Perasaan Cemas"
                                />
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={saraf}
                                      onChange={handleChange}
                                      name="saraf"
                                    />
                                  }
                                  label="Saraf Tegang"
                                />
                              </Grid>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={depresiri}
                                    onChange={handleChange}
                                    name="depresiri"
                                  />
                                }
                                label="Depresi Ringan"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={nyeri}
                                    onChange={handleChange}
                                    name="nyeri"
                                  />
                                }
                                label="Nyeri Pada Payudara"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={endema}
                                    onChange={handleChange}
                                    name="endema"
                                  />
                                }
                                label="Endema (Pembengkakan)"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={perut}
                                    onChange={handleChange}
                                    name="perut"
                                  />
                                }
                                label="perut kembung"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={berat}
                                    onChange={handleChange}
                                    name="berat"
                                  />
                                }
                                label="Peningkatan Berat Badan"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={bengkak}
                                    onChange={handleChange}
                                    name="bengkak"
                                  />
                                }
                                label="Pembengkakan Tangan dan Kaki"
                              />
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={pusing}
                                      onChange={handleChange}
                                      name="pusing"
                                    />
                                  }
                                  label="Pusing Kepala"
                                />
                              </Grid>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={Kelelahan}
                                    onChange={handleChange}
                                    name="Kelelahan"
                                  />
                                }
                                label="Sering Kelelahan"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={Lapar}
                                    onChange={handleChange}
                                    name="Lapar"
                                  />
                                }
                                label="Rasa Lapar Terus-menerus/Nafsu makan bertambah"
                              />
                            </Grid>
                            <Grid item xs={12} md={1}></Grid>
                            <Grid item xs={12} md={4.5}>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={jantung}
                                      onChange={handleChange}
                                      name="jantung"
                                    />
                                  }
                                  label="Jantung Berdebar Kencang"
                                />
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={pinsang}
                                      onChange={handleChange}
                                      name="pinsang"
                                    />
                                  }
                                  label="pinsang"
                                />
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={depresi}
                                      onChange={handleChange}
                                      name="depresi"
                                    />
                                  }
                                  label="Depresi"
                                />
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={tidur}
                                      onChange={handleChange}
                                      name="tidur"
                                    />
                                  }
                                  label="Gangguan Tidur"
                                />
                              </Grid>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={stres}
                                    onChange={handleChange}
                                    name="stres"
                                  />
                                }
                                label="Stres"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={verbalisasi}
                                    onChange={handleChange}
                                    name="verbalisasi"
                                  />
                                }
                                label="Sulit Dalam Mengucapkan Kata-Kata (Verbalisasi)"
                              />
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={menangis}
                                      onChange={handleChange}
                                      name="menangis"
                                    />
                                  }
                                  label="Ingin Menangis"
                                />
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={pelupa}
                                      onChange={handleChange}
                                      name="pelupa"
                                    />
                                  }
                                  label="Pelupa"
                                />
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={lemah}
                                      onChange={handleChange}
                                      name="lemah"
                                    />
                                  }
                                  label="Lemah"
                                />
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={bingung}
                                      onChange={handleChange}
                                      name="bingung"
                                    />
                                  }
                                  label="Bingung"
                                />
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={bundir}
                                      onChange={handleChange}
                                      name="bundir"
                                    />
                                  }
                                  label="Rasa Ingin Bunuh diri"
                                />
                              </Grid>
                              <Button
                                variant="contained"
                                sx={{ m: 3, width: "25ch" }}
                                onClick={inputClick}
                                type="onSubmit"
                                style={{
                                  background: "#C16C6C",
                                  boxSizing: "border-box",
                                  borderRadius: "12px",
                                }}
                                // onClick={() => history.push("/home")}
                              >
                                Mulai Diagnosa
                              </Button>
                            </Grid>
                          </Grid>
                        </FormGroup>
                      </FormControl>
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

export default Daftar;
