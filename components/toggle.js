import styled from 'styled-components'

export default function Toggle({ open=false, toggle }) {
  return <Wrapper onClick={toggle}>
    <div></div>
    <div></div>
    <div></div>
  </Wrapper>
}

const Wrapper = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  cursor: pointer;
  padding: .3em;
  border: 1px solid gray;
  box-sizing: content-box;

  &>div {
    background: #000;
    height: .2rem;
    width: 100%;
  }
`
