import styled from 'styled-components'

const Main = styled.main`
  padding: 40px 0;
`

Main.SectionWrapper = styled.div`
  margin-bottom: -30px;
  
  &:not(:last-child) {
    padding-bottom: 50px;
  }
`

Main.SkillSection = styled.div`
  margin-bottom: 30px;
  background: #EBEBEB;
`

Main.SkillSectionHeading = styled.div`
  padding: 1em 15px;
  text-align: center;
  position: relative;
  font-size: 1.25rem;
  font-weight: 500;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 2px;
    width: 40%;
    background: #000;
  }
`

Main.SkillSectionContentWrapper = styled.div`
  padding: 25px;

  li:not(:last-child) {
    margin-bottom: 0.25em;
  }

  a {
    color: #bc8d30;

    &:hover {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.7)
    }
  }
`

export default Main