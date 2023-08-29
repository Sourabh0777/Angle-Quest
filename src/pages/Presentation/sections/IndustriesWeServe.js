/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
// import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import post1 from "assets/images/Background image/e-learning.avif";
import post2 from "assets/images/Background image/ecommerce marketing.webp";
import post3 from "assets/images/Background image/fintech.jpg";
import post4 from "assets/images/Background image/Kiran-Bhatt-crypto-currency-edited.jpg";

function IndustriesWeServe() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={3}>
            Industries We Serve
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Education (eLearning)"
              description="Discover AngelQuest Technologies - your partner for global e-learning solutions, crafting tailored, immersive learning experiences for all educational institutions. Contact us now!"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="ECommerce"
              description="In today's online shopping era, eCommerce benefits consumers with streamlined purchasing and easy product comparisons. Businesses expand globally at lower costs via e-commerce. Unlock potential with AngelQuest Technologies - your e-commerce app solution."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="FinTech"
              description="Your partner for secure, advanced, and tailored finance applications driving industry evolution."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post4}
              title="Blockchain"
              description="Empowering industries with custom blockchain solutions - from applications to DeFi - our experienced team creates secure, scalable platforms aligned with unique business needs.              "
              action={{
                type: "internal",
                route: "/pages/blogs/author",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default IndustriesWeServe;
