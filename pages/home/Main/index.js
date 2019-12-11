import React from 'react'

import { Row, Col } from 'reactstrap'
import Main from './styled'
import SectionHeading from '~/components/SectionHeading'

export default props => <Main>
  <Main.SectionWrapper>
    <SectionHeading>Summary</SectionHeading>

    <Main.SkillSection>
      <Main.SkillSectionContentWrapper style={{ padding: '40px' }}>
        Hi, I&apos;m Pham Huy, a Front-end developer with 2 year of experience.<br />

        My main skills: ReactJS, Mobile-First Web Design<br />

        I especially like learning JavaScript (and it&apos;s libraries), TypeScript, find ways to optimize and increase performance<br />

        I like (deep) talking and helping other people. I was excited by the colorful things.<br />

        My hobbies: reading, playing guitar, sing (but bad)...
      </Main.SkillSectionContentWrapper>
    </Main.SkillSection>
  </Main.SectionWrapper>

  <Main.SectionWrapper>
    <SectionHeading>Skills</SectionHeading>

    <Row>
      <Col md={6}>
        <Main.SkillSection>
          <Main.SkillSectionHeading>Front-end</Main.SkillSectionHeading>

          <Main.SkillSectionContentWrapper>
            <ul className="mb-0">
              <li>
                Basic

                <ul>
                  <li>HTML5, CSS3 (Flexbox, Grid...)</li>

                  <li>CSS Frameworks: Bootstrap 4, Material-ui</li>

                  <li>CSS preprocessor: SASS</li>

                  <li>Solid understading of JavaScript concepts: Promise, async/await, saga, arrow function, DOM manipulation...</li>

                  <li>Have experience in TypeScript</li>

                  <li>Have experience in AMP</li>

                  <li>Mobile-First Web Design</li>

                  <li>Task runner, bundler: Webpack</li>

                  <li>Have knowledge of color theory, typography</li>

                  <li>jQuery</li>
                </ul>
              </li>

              <br />

              <li>
                ReactJS

                <ul>
                  <li>Solid understanding of React concepts: Virtual DOM, Component&apos;s lifecycle, PureComponent, Hooks...</li>

                  <li>Deep understanding about Redux</li>

                  <li>Have experience about React Admin</li>

                  <li>Deep understading about Immutability in Redux, React</li>

                  <li>Have experience optimizing React performance (by using PureComponent, React.memo, memoization, restructuring components...)</li>

                  <li>ReactJS middlewares &amp; libralires: redux-thunk, redux-saga, styled-components, redux-form... </li>

                  <li>Have experience in Server-side rendering with NextJS</li>

                  <li>Others: Gatsby...</li>
                </ul>
              </li>

              <br />

              <li>Basic knowledge about Kotlin</li>
            </ul>
          </Main.SkillSectionContentWrapper>
        </Main.SkillSection>
      </Col>

      <Col md={6}>
        <Row>
          <Col xs={12}>
            <Main.SkillSection>
              <Main.SkillSectionHeading>Common Knowledge</Main.SkillSectionHeading>

              <Main.SkillSectionContentWrapper>
                <ul className="mb-0">
                  <li>Understanding about OOP</li>

                  <li>Database design</li>

                  <li>RestfulAPI</li>

                  <li>Git</li>

                  <li>CI/CD</li>
                </ul>
              </Main.SkillSectionContentWrapper>
            </Main.SkillSection>
          </Col>

          <Col xs={12}>
            <Main.SkillSection>
              <Main.SkillSectionHeading>Back-end</Main.SkillSectionHeading>

              <Main.SkillSectionContentWrapper>
                <ul className="mb-0">
                  <li>NodeJS</li>

                  <li>PHP: Laravel</li>

                  <li>Database: SQLite, MongoDB</li>
                </ul>
              </Main.SkillSectionContentWrapper>
            </Main.SkillSection>
          </Col>

          <Col xs={12}>
            <Main.SkillSection>
              <Main.SkillSectionHeading>Soft skills</Main.SkillSectionHeading>

              <Main.SkillSectionContentWrapper>
                <ul className="mb-0">
                  <li>Good at researching new technologies</li>

                  <li>Good communication with teammate</li>

                  <li>High responsibility</li>

                  <li>Positive thinking</li>

                  <li>English documents reading</li>

                  <li>Basic English communication</li>
                </ul>
              </Main.SkillSectionContentWrapper>
            </Main.SkillSection>
          </Col>
        </Row>
      </Col>
    </Row>
  </Main.SectionWrapper>

  <Main.SectionWrapper>
    <SectionHeading>Experiences</SectionHeading>

    <Row>
      <Col xs={12}>
        <Main.SkillSection>
          <Main.SkillSectionContentWrapper>
            <ul className="mb-0">
              <li>Time: 06/2018 - Present</li>

              <li>Role: Front-end developer</li>

              <li>Technologies: Kotlin, ReactJS (2+)</li>

              <li>
                Projects

                <ul>
                  <li>Web booking (main project): ReactJS (for seach, book hotel)</li>

                  <li>Web Chart: React(Buy {"&"} Sell Crypto)</li>
                </ul>
              </li>
            </ul>
          </Main.SkillSectionContentWrapper>
        </Main.SkillSection>
      </Col>
    </Row>
  </Main.SectionWrapper>

  <Main.SectionWrapper>
    <SectionHeading>Education</SectionHeading>

    <Row>
      <Col xs={12}>
        <Main.SkillSection>
          <Main.SkillSectionHeading>University of Information Technology - VNUHCM</Main.SkillSectionHeading>

          <Main.SkillSectionContentWrapper>
            <ul className="mb-0">
              <li>Time: 2014 - 2018</li>

              <li>Major: Software Engineering</li>
            </ul>
          </Main.SkillSectionContentWrapper>
        </Main.SkillSection>
      </Col>
    </Row>
  </Main.SectionWrapper>

  <Main.SectionWrapper>
    <SectionHeading>Freelance projects</SectionHeading>

    <Row>
      <Col md={6}>
        <Main.SkillSection>
          <Main.SkillSectionHeading>Laravel</Main.SkillSectionHeading>

          <Main.SkillSectionContentWrapper>
            <ul className="mb-0">
              <li>
                <a href="http://gps.dientunamlong.vn/">GPS Dientunamlong</a>
              </li>
            </ul>
          </Main.SkillSectionContentWrapper>
        </Main.SkillSection>
      </Col>

      <Col md={6}>
        <Main.SkillSection>
          <Main.SkillSectionHeading>ReactJS</Main.SkillSectionHeading>

          <Main.SkillSectionContentWrapper>
            <ul className="mb-0">
              <li>
                <a href="http://wish.iotservices.xyz:81">Web Admin: React-Admin (Manager user, product)</a>
              </li>
            </ul>
          </Main.SkillSectionContentWrapper>
        </Main.SkillSection>
      </Col>

      <Col md={6}>
        <Main.SkillSection>
          <Main.SkillSectionHeading>Kotlin</Main.SkillSectionHeading>

          <Main.SkillSectionContentWrapper>
            <ul className="mb-0">
              <li>
                <a>Wish App Android</a>
              </li>
            </ul>
          </Main.SkillSectionContentWrapper>
        </Main.SkillSection>
      </Col>
    </Row>
  </Main.SectionWrapper>
</Main>