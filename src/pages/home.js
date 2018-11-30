import React from 'react'
import { Link } from 'gatsby'
import styled, {css} from "styled-components";
import Layout from '../components/layout'

const IndexWrapper = styled.div`
  height: 100vh;
  background-image: url("https://i.imgur.com/IpJOdyu.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const WelcomeBlock = styled.div`
  background: #202020;
  opacity: 0.5;
  width: 50%;
  height: 100vh;
  padding-top: 1.0em;
  padding-left: 1.0em;
  p, h1 {
    color: white;
    opacity: 1.0 !important;
  }
`

const HomePage = () => (
  <Layout>
    <IndexWrapper>
      <WelcomeBlock>
        <h1>Welcome to the ABC Cares Foundation</h1>
          <p>
            The ABC Cares Foundation is formed to administer an extensive and broadly-based program that 
            through the raising of funds shall provide grants, scholarships, awards, training supplies 
            and other forms of assistance to qualified individuals, organizations or families which
            are or have been pursuing and/or applying knowledge and/or skill in the construction industry or 
            trades and which maintain merit shop and free market principles.
          </p>
      </WelcomeBlock>
    </IndexWrapper>
  </Layout>
);

export default HomePage; 