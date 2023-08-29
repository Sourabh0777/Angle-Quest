// @mui icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
// import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/Background image/AQT Logo1.png";

// const date = new Date().getFullYear();

export default {
  brand: {
    name: "Angle Quest",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/company/angelquest-technologies/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BSyKw7iMIQx%2B0BX9QrWixUQ%3D%3D",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/tech_aquest",
    },
  ],
  menus: [
    {
      name: "Contact Number",
      items: [{ name: "0124-4013585" }],
    },
    {
      name: "Email",
      items: [{ name: "sales@angelquesttechnologies.in" }],
    },
  ],
};
