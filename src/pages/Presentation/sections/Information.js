// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  //   AngelQuest Technologies - Unlocking your Digital Success
  // Our Competencies - with the
  // Transparency: Openly sharing Processes, Progress, and Performance
  // Process-Centric: Emphasizing the core role of well-defined processes
  // Customisation: We tailor the software to meet businesses requirements
  // Quality Assurance: User Satisfaction with optimal performance and minimal defects
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                // icon="touch_app"
                title={
                  <>
                    AngelQuest
                    <br />
                    Technologies{" "}
                  </>
                }
                description="Unlocking your Digital Success"
              />
              <RotatingCardBack
                image={bgBack}
                title="Our Competencies"
                description=" Lets connect!! "
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  //New code
                  label: "Get in Touch",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="tv_icon"
                  title="Transparency"
                  description="Openly sharing Processes, Progress and Performance."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="account_tree_icon"
                  title="Process-Centric"
                  description="Emphasizing the core role of well-defined processes."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="tune_icon"
                  title="Customization"
                  description="We tailor the software to meet businesses requirements."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="verified_icon"
                  title="Quality Assurance"
                  description="User Satisfaction with optimal performance and minimal defects."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
