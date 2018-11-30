import React from 'react'
import { Link } from 'gatsby'
import styled, {css} from "styled-components";

import Header from '../components/header'
import Menu from "../components/menu";
import Layout from '../components/layout'
import DonateButton from '../components/donate-button';
import AboutPage from "./about";
import HomePage from "./home";
import DonatePage from "./donate";
import HelpedPage from "./who-we-help";


const IndexPage = () => (
  <Layout>
    <Header/>
    <Menu />
    <HomePage/>
    <AboutPage />
    <HelpedPage />
    <DonatePage />
  </Layout>
)

export default IndexPage
