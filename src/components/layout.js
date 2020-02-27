import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { GlobalStyle } from "./globalStyle";
import { MainWrapper } from "./layoutComponents";
import { Header } from "./header.tsx";
import Footer from "./footer";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <script>
          {" "}
          var _ctct_m = `&quot;7ea89593a1a2608140f0eb885dbe8aa3`&quot;;{" "}
        </script>
        <script
          id="signupScript"
          src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
          async
          defer
        ></script>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <MainWrapper>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
            <Footer />
          </MainWrapper>
        </ThemeProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
