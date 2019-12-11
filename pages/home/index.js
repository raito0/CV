import React from 'react'
import Head from 'next/head'

import { Container, Row, Col } from 'reactstrap'
import Header from './Header'
import Main from './Main'

export default props => <Container>
  <Head>
    <title>Phạm Huy</title>
  </Head>
  
  <Row>
    <Col xs={12}>
      <Header />

      <Main />
    </Col>
  </Row>
</Container>