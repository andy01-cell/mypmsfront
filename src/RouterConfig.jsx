import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppBarComponent from "./AppBarComponent";
import Bantuan from "./Bantuan";
import Daftar from "./Daftar";
import Diagnosa from "./Diagnosa";
import gejalapms from "./gejalapms";
import Hasil from "./Hasil";
import infopakar from "./infopakar";
import Informasi from "./Informasi";
import Tdkpms from "./Tdkpms";

const RouterConfig = () => {
  return (
    <div>
      <BrowserRouter>
        <AppBarComponent />
        <Switch>
          <Route exact path="/" component={Informasi} />
          <Route path="/diagnosa" component={Diagnosa} />
          <Route path="/Bantuan" component={Bantuan} />
          <Route path="/daftar" component={Daftar} />
          <Route path="/Hasil" component={Hasil} />
          <Route path="/prediksi" component={Tdkpms} />
          <Route path="/gejala pms" component={gejalapms} />
          <Route path="/info pakar" component={infopakar} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default RouterConfig;
