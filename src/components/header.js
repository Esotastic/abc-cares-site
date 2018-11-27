import React from 'react'
import { Link } from 'gatsby'
import styled, {css} from "styled-components";

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#1a1aff',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ 
        margin: 0,
        textAlign: "center"
      }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

const StyledHeader = styled(Header)`
  background: purple;
`;

export default Header
