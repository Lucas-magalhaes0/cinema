import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import { Link } from 'gatsby'
import { Container, Form, Input, TextArea, Button, Dropdown } from 'semantic-ui-react'
import Layout from '../components/layout'
import SEO from '../components/seo'



const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      
    </div>
    <Link to="/page-2/"> Go to page 2 </Link>
    <Link to="/cinema_search/"> Cinema page </Link>
  </Layout>
)

export default IndexPage
