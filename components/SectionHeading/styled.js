import styled from 'styled-components'
import { math } from 'polished'

const lineThick = '4px'
const firstLineWidth = '20px'
const secondLineWidth = '100px'
const lineDistance = '0.35rem'

const SectionHeading = styled.div`
  position: relative;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: calc(${math(`40px + ${lineThick}`)} + ${lineDistance});

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: -${lineDistance};
    height: ${lineThick};
    background: #FBCD0C;
  }

  &::before {
    width: ${firstLineWidth};
    left: 0;
  }

  &::after {
    width: ${secondLineWidth};
    left: ${math(`${firstLineWidth} + ${lineThick} + 1px`)};
  }
`

export default SectionHeading