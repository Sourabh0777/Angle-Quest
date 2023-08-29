// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import { useNavigate } from "react-router-dom";

import routes from "routes";
import footerRoutes from "footer.routes";

import IndustriesWeServe from "./sections/IndustriesWeServe";
import Contactus from "./sections/Contactus";
import Home from "./sections/Home";

function Presentation() {
  const navigate = useNavigate();
  const hash = window.location.hash;

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          color: "info",
        }}
        sticky
        onLinkClick={(route) => {
          navigate(route, { scrollOptions: { behavior: "smooth", block: "start" } });
        }}
        // transparent
        // light
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
        {/* {pathname.includes("#about") && <AboutUs />}
        {pathname.includes("#process") && <Process />}
        {pathname.includes("#stack") && <TackStack />} */}

        <Counters />
        <Information />
        <IndustriesWeServe />
        <DesignBlocks />
        <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
          {" "}
          {hash === "#contact" && <Contactus />}
        </Grid>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
