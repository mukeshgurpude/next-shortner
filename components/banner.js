import styled from 'styled-components'
import Button from '../styles/button'

export default function Banner() {
  return <Wrapper>
    <h2>Boost your links today</h2>
    <Button variant='default' style={{borderRadius: 50}} py='.6rem' px='1rem'>Get Started</Button>
  </Wrapper>
}


const Wrapper = styled.section`
  background-image: url(/Meteor.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  padding: 2rem; color: white;
`
