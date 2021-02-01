import React from "react";
import { bootCampRoutes } from "../../routes/bootcampsRoutes";
import SecondNav from "../secondNav/SecondNav";
// import BootCampNavigation from "./bootCampNavigation/BootCampNavigation";

const BootCamp = () => {
  return <SecondNav routes={bootCampRoutes} />;
};

export default BootCamp;
