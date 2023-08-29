import React from "react";
import MKBox from "components/MKBox";

import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import bgImage from "assets/images/Background image/6286507_22589.jpg";

const Home = () => {
  return (
    <MKBox
      minHeight="65vh"
      width="100%"
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
          <MKTypography
            variant="h1"
            color="white"
            mt={-6}
            mb={1}
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            AngelQuest Technologies{" "}
          </MKTypography>
          <MKTypography
            variant="body1"
            color="white"
            textAlign="center"
            px={{ xs: 6, lg: 12 }}
            mt={1}
          >
            We envision our future where businesses transcend limitations through Technology.{" "}
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
};
export default Home;
