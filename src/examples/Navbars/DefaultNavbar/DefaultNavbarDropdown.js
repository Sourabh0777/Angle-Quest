/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-router-dom components
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

// @mui material components
import Collapse from "@mui/material/Collapse";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultNavbarDropdown({
  name,
  children,
  // eslint-disable-next-line react/prop-types
  collapseStatus,
  light,
  // href,
  route,
  ...rest
}) {
  // console.log("🚀 ~ file: DefaultNavbarDropdown.js:41 ~ name:", name);
  console.log("🚀 ~ file: DefaultNavbarDropdown.js:41 ~ route:", route);

  return (
    <>
      <MKBox
        {...rest}
        mx={1}
        p={1}
        display="flex"
        alignItems="baseline"
        color={light ? "white" : "dark"}
        opacity={light ? 1 : 0.6}
        sx={{ cursor: "pointer", userSelect: "none" }}
      >
        <MKTypography
          variant="body2"
          lineHeight={1}
          color="inherit"
          sx={{ alignSelf: "center", "& *": { verticalAlign: "middle" } }}
        ></MKTypography>
        <MKTypography
          variant="button"
          fontWeight="regular"
          textTransform="capitalize"
          color={light ? "white" : "dark"}
          sx={{ fontWeight: "100%", ml: 1, mr: 0.25 }}
        >
          <Link activeClass="active" to="sectionId" spy={true} smooth={true} duration={500}>
            {name}
          </Link>
        </MKTypography>
        <MKTypography variant="body2" color={light ? "white" : "dark"} ml="auto">
          {" "}
        </MKTypography>
      </MKBox>
      {children && (
        <Collapse in={Boolean(collapseStatus)} timeout={400} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Setting default values for the props of DefaultNavbarDropdown
DefaultNavbarDropdown.defaultProps = {
  children: false,
  collapseStatus: false,
  light: false,
  href: "",
  route: "",
};

// Typechecking props for the DefaultNavbarDropdown
DefaultNavbarDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  light: PropTypes.bool,
  href: PropTypes.string,
  route: PropTypes.string,
  collapse: PropTypes.bool,
};

export default DefaultNavbarDropdown;
