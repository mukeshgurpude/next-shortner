import styled from 'styled-components'
import { flex, layout } from 'styled-system'

export default function Input() {
  return <Wrapper>
    <Landing width={1}>
      <h1>MORE THAN JUST SHORTER LINKS</h1>
      <ImageWrapper />
    </Landing>
    <Form></Form>
  </Wrapper>
}

const Wrapper = styled('div')({
  display: 'flex',
  textAlign: 'center',
  '& h1': { zIndex: 2 }
}, layout)
const Landing = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  padding: '0 1em',
  flexDirection: 'column'
}, layout)

const ImageWrapper = styled.div`
  background-image: url(/people%20working.svg);
  background-repeat: no-repeat;
  background-position: center;
  min-height: 400px;
  width: 45%;
  min-width: 400px;
  max-width: 100%;
  margin: 0 auto;
`
const Form = styled.form``
