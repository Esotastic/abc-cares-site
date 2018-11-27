import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import DonateButton from '../components/donate-button';


const IndexPage = () => (
  <Layout>
    <h1>Welcome to the ABC Cares Foundation</h1>
    <p>
      The ABC Cares Foundation is formed to administer an extensive and broadly-based program that 
      through the raising of funds shall provide grants, scholarships, awards, training supplies 
      and other forms of assistance to qualified individuals, organizations or families which
      are or have been pursuing and/or applying knowledge and/or skill in the construction industry or 
      trades and which maintain merit shop and free market principles.
    </p>
    <DonateButton>Donate Now!</DonateButton>
  </Layout>
)

export default IndexPage
