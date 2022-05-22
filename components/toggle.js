import styled from 'styled-components'
import { layout } from 'styled-system'

export default function Toggle({ open=false, toggle }) {
  return <Wrapper display={['none', 'flex']} onClick={toggle}>
    <div></div>
    <div></div>
    <div></div>
  </Wrapper>
}

const Wrapper = styled('div')({
  width: '16px',
  height: '16px',
  maxWidth: '16px',
  display: 'none',
  justifyContent: 'space-between',
  flexFlow: 'column',
  cursor: 'pointer',
  padding: '.3em',
  border: '1px solid gray',
  boxSizing: 'content-box',
  '&>div': {
    background: '#000',
    height: '.2rem',
    width: '100%'
  }
}, layout)
