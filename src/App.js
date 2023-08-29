import Card from "@mui/material/Card";

import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";

import footerRoutes from "footer.routes";

import IndustriesWeServe from "pages/Presentation/sections/IndustriesWeServe";
import Home from "pages/Presentation/sections/Home";

// import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
// import { useRef } from "react";

const routes = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About us",
    route: "information",
  },
  {
    name: "Process",
    route: "industriesWeServe",
  },
  {
    name: "Tack Stack",
    route: "designBlocks",
  },
  {
    name: "Contact us",
    route: "contactus",
  },
];
export default function App() {
  // const navigate = useNavigate();

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          color: "info",
        }}
        sticky
      />
      <Home />

      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 6 },
          mt: -10,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information id="information" />
        <IndustriesWeServe id="industriesWeServe" />
        <DesignBlocks id="designBlocks" />
        {/* <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
          {" "}
          <Contactus id="contactus" />
        </Grid> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} id="contactus" />
      </MKBox>
    </>
  );
}
