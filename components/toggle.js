import styled from 'styled-components'
import { layout } from 'styled-system'

export default function Toggle({ open = false, toggle }) {
  return <Wrapper onClick={toggle}>
    <div></div>
    <div></div>
    <div></div>
  </Wrapper>
}

const Wrapper = styled('div')({
  width: '16px',
  height: '16px',
  maxWidth: '16px',
  display: 'flex',
  justifyContent: 'space-between',
  flexFlow: 'column',
  cursor: 'pointer',
  padding: '.3em',
  border: '1px solid gray',
  boxSizing: 'content-box',
  position: 'absolute',
  zIndex: 999,
  right: '1em',
  '&>div': {
    background: '#000',
    height: '.2rem',
    width: '100%'
  },
  '@media(min-width: 768px)': {
    display: 'none'
  }
}, layout)
