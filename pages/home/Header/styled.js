import styled from 'styled-components'
import { up, down } from 'styled-breakpoints'
import is from 'styled-is'

const Header = styled.header`
  background: #FBCD0B;
  padding: 20px;

  ${down('sm')} {
    margin: 0 -15px;
    padding-left: 15px;
    padding-right: 15px;
  }
`

Header.WAvatar = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
`

Header.Avatar = styled.div`
  height: 600px;
  width: 600px;
  zoom: 0.5;
  
  ${props => props.url && `
    background: url(${props.url}) no-repeat 0px -70px / 110%;
  `}
`

Header.Name = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 30px;

  ${down('md')} {
    font-size: 2rem;
  }
`

Header.WItems = styled.div`
  padding: 0 10px;
`

Header.ItemGroup = styled.div`
  ${up('lg')} {
    display: flex;
    justify-content: space-between;
  }
  
  /* ${is('upLgCentered')`
    ${up('lg')} {
      justify-content: center;
    }
  `} */

  &:not(:last-child) {
    margin-bottom: 0.25em;
  }
`

Header.Item = styled.div`
  ${up('lg')} {
    text-align: center;
  }

  ${down('md')} {
    &:not(:last-child) {
      margin-bottom: 0.25em;
    }
  }
  a {
    color: #000;
    &:hover {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.75)
    }
  }
`

Header.ItemLabel = styled.span`
  font-weight: bold;
`

export default Header