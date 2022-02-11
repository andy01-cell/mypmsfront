import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import Button from "@mui/material/Button";
import { collection, addDoc } from "firebase/firestore";
import { app, db } from "./config/FirebaseApp";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Daftar = () => {
  const history = useHistory();
  const diagnosas = history.location.state;
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
      .post("https://pmssvm.herokuapp.com/identification/analyzer", {
        test: state,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        const result = res.data.result;
        console.log("post succes : ", res);
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
            "Gejala ini timbul akibat ketidakseimbangan hormon estrogen dan progesteron: hormon estrogen terlalu tinggi dibandingkan dengan hormon progestron dan jika dibiarkan akan beresiko terkena penyakit kanker payudara.";
          penanganan =
            "Pemberian Hormon progestron kadang dillakukan untuk mengurangi gejala, tetapi beberapa peneliti mengatakan, pada penderita PMS bisa kekurangan vitamin B6 dan magnesium. Penderita PMS A sebaiknya banyak mengonsumsi makanan berserat dan mengurangi atau membatasi minum kopi. ";
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
        } else if (hasilprediksi == 4) {
          tipe = "D";
          tipedesk = "(Depression)";
          persen = result.probabilities[3];
          pmsdesk =
            "Saat anda mengalami PMS tipe D biasanya anda akan lebih emosional hingga sulit tidur dan terus-menerus ingin menangis";
          gejala =
            "PMS tipe D (Depression) ditandai dengan gejala seperti rasa depresi, ingin menangis, lemah, gangguan tidur, pelupa, bingung, sulit dalam mengucapkan kata-kata (Verbalisasi), bahkan kadang-kadang muncul rasa males gerak (mageran). Biasanya PMS Tipe D berlangsung bersamaan dengan tipe A";
          penyebab =
            "PMS Tipe D murni disebabkan oleh ketidakseimbangan hormon hestrogen dalam siklus haid terlalu tinggi dibandingkan dengan hormon estrogennya.";
          penanganan =
            "Saat anda mengalami tipe PMS yang ini lebih baik memperbanyak mengonsumsi sayur-sayuran ataupun kacang-kacangan yang kaya akan magnesium agar kondisi hati anda lebih stabil";
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
        } else {
          history.push("/prediksi");
          console.log("persen: ", persen);
          const docRef = addDoc(collection(db, "daftardiagnosa"), {
            _sensitif: state.sensitif,
            _labil: state.labil,
            _cemas: state.cemas,
            _saraf: state.saraf,
            _depresiri: state.depresiri,
            _nyeri: state.nyeri,
            _endema: state.endema,
            _perut: state.perut,
            _berat: state.berat,
            _bengkak: state.bengkak,
            _pusing: state.pusing,
            _lapar: state.Lapar,
            _jantung: state.jantung,
            _pinsang: state.pinsang,
            _depresi: state.depresi,
            _tidur: state.tidur,
            _stres: state.stres,
            _verbalisasi: state.verbalisasi,
            _menangis: state.menangis,
            _pelupa: state.pelupa,
            _lemah: state.lemah,
            _bingung: state.bingung,
            _bundir: state.bundir,
            persentase: persen,
            tipe_pms: tipedesk,
            nama_pasien: diagnosas.namap,
            tanggal_lahir: diagnosas.tglp,
            alamat: diagnosas.alamatp,
            usia: diagnosas.usiap,
            no_hp: diagnosas.hpp,
          });
        }

        const docRef = addDoc(collection(db, "daftardiagnosa"), {
          _sensitif: state.sensitif,
          _labil: state.labil,
          _cemas: state.cemas,
          _saraf: state.saraf,
          _depresiri: state.depresiri,
          _nyeri: state.nyeri,
          _endema: state.endema,
          _perut: state.perut,
          _berat: state.berat,
          _bengkak: state.bengkak,
          _pusing: state.pusing,
          _lapar: state.Lapar,
          _jantung: state.jantung,
          _pinsang: state.pinsang,
          _depresi: state.depresi,
          _tidur: state.tidur,
          _stres: state.stres,
          _verbalisasi: state.verbalisasi,
          _menangis: state.menangis,
          _pelupa: state.pelupa,
          _lemah: state.lemah,
          _bingung: state.bingung,
          _bundir: state.bundir,
          persentase: persen,
          tipe_pms: tipedesk,
          nama_pasien: diagnosas.namap,
          tanggal_lahir: diagnosas.tglp,
          alamat: diagnosas.alamatp,
          usia: diagnosas.usiap,
          no_hp: diagnosas.hpp,
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
            height: "75vh",
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
            <b>DIAGNOSA PREMENSTRUAL SYNDROME</b>
          </Typography>
          <Grid container justifyContent="center">
            <Grid item marginTop="5ch" xs={11} md={11}>
              <Paper
                elevation={10}
                style={{
                  padding: 8,
                  marginTop: -18,
                }}
              >
                <Grid container xs={12} md={12} justifyContent="center">
                  <Grid item xs={11.7} md={11.7} paddingTop="10px">
                    <Typography variant="p" fontSize="25px" color="#6F5A5A">
                      <b>Pilih Gejala</b>
                    </Typography>
                  </Grid>
                  <br />
                  <br />
                  <br />
                  <Grid item xs={11.7} md={11.7}>
                    <Box>
                      <FormControl
                        // sx={{ m: 3 }}
                        component="fieldset"
                        variant="standard"
                        size="small"
                      >
                        <FormGroup>
                          <Grid
                            container
                            justifyContent="center"
                            direction="row"
                            xs={12}
                            md={12}
                            // fontSize="1px"
                          >
                            <Grid item xs={12} md={4}>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={sensitif}
                                      onChange={handleChange}
                                      name="sensitif"
                                      // color="#8E7F7F"
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
                                  label="Perasaan labil"
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
                                  label="Perasaan cemas"
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
                                  label="Saraf tegang"
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
                                label="Depresi ringan"
                              />
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={nyeri}
                                      onChange={handleChange}
                                      name="nyeri"
                                    />
                                  }
                                  label="Nyeri pada payudara"
                                />
                              </Grid>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={endema}
                                    onChange={handleChange}
                                    name="endema"
                                  />
                                }
                                label="Endema (pembengkakan)"
                              />
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={perut}
                                      onChange={handleChange}
                                      name="perut"
                                    />
                                  }
                                  label="Perut kembung"
                                />
                              </Grid>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={berat}
                                    onChange={handleChange}
                                    name="berat"
                                  />
                                }
                                label="Peningkatan berat dadan"
                              />
                            </Grid>
                            <Grid item xs={12} md={4}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={bengkak}
                                    onChange={handleChange}
                                    name="bengkak"
                                  />
                                }
                                label="Pembengkakan tangan dan kaki"
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
                                  label="Pusing kepala"
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
                                label="Sering kelelahan"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={Lapar}
                                    onChange={handleChange}
                                    name="Lapar"
                                  />
                                }
                                label="Rasa lapar terus-menerus/nafsu makan bertambah"
                              />
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={jantung}
                                      onChange={handleChange}
                                      name="jantung"
                                    />
                                  }
                                  label="Jantung berdebar kencang"
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
                                  label="Pingsan"
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
                                  label="Gangguan tidur"
                                />
                              </Grid>
                            </Grid>
                            {/* <Grid item xs={12} md={1}></Grid> */}
                            <Grid item xs={12} md={4}>
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
                                label="Sulit dalam mengucapkan kata-kata (verbalisasi)"
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
                                  label="Ingin menangis"
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
                                  label="Mager"
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
