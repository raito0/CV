import React from 'react'

import Header from './styled'
import { Row, Col } from 'reactstrap'
import Link from 'next/link'

export default props => <Header>
  <Header.WAvatar>
    <Header.Avatar url="/static/avatar.jpg" />
  </Header.WAvatar>

  <Header.Name>PHẠM HUY</Header.Name>

  <Header.WItems>
    <Row>
      <Col md={{ size: 8, offset: 2 }}>
        <Header.ItemGroup>
          <Header.Item>
            <Header.ItemLabel>Date of birth: </Header.ItemLabel>

            25/10/1996
          </Header.Item>

          <Header.Item>
            <Header.ItemLabel>Phone: </Header.ItemLabel>

            034 659 8327
          </Header.Item>
        </Header.ItemGroup>

        <Header.ItemGroup>
          <Header.Item>
            <Header.ItemLabel>Email: </Header.ItemLabel>

            ginbekk96@gmail.com
          </Header.Item>

          <Header.Item>
            <Header.ItemLabel>Facebook: </Header.ItemLabel>

            <Link href="https://www.facebook.com/huyp96">
              <a>/huyp96</a>
            </Link>
          </Header.Item>
        </Header.ItemGroup>

        <Header.ItemGroup>
          <Header.Item>
            <Header.ItemLabel>Address: </Header.ItemLabel>

            215/38 Nguyễn Xí, Bình Thạnh District, HCMC
          </Header.Item>
        </Header.ItemGroup>
      </Col>
    </Row>
  </Header.WItems>
</Header>