import React from "react";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";

const Contactus = () => {
  return (
    <Grid item xs={15} mb={4} coloredShadow="dark">
      {" "}
      <MKBox
        bgColor="white"
        borderRadius="xl"
        shadow="lg"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <MKBox
          variant="gradient"
          bgColor="info"
          coloredShadow="dark"
          borderRadius="lg"
          p={2}
          mx={2}
          mt={-3}
        >
          <MKTypography variant="h3" color="white">
            Contact us
          </MKTypography>
        </MKBox>
        <MKBox p={3}>
          <MKTypography variant="body2" color="text" mb={3}>
            For further questions please email or cal us at.{" "}
          </MKTypography>
          <MKBox width="100%" component="form" method="post" autoComplete="off">
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <MKInput
                  type="email"
                  variant="standard"
                  label="Email"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  value="sales@angelquesttechnologies.in"
                  name="email"
                  disable
                  readOnly
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MKInput
                  variant="standard"
                  type="text"
                  label="Phone No"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  value="0124-4013585"
                  name="message"
                  disable
                  readOnly
                />
              </Grid>
            </Grid>
          </MKBox>
        </MKBox>
      </MKBox>
    </Grid>
  );
};

export default Contactus;
