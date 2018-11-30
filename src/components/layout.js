import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, {css} from "styled-components";

import Header from './header'
import Menu from "./menu";
import './layout.css'

//Main layout, fonts, color and margin.
const LayoutStyle = styled.div`
  font-family: sans-serif;
`


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
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'The ABC Cares Foundation webpage' },
            { name: 'keywords', content: 'charity, foundation, 501c3, construction' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <LayoutStyle>
          {children}
        </LayoutStyle>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
