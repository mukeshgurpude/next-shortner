import styled from 'styled-components'
import { color } from 'styled-system'

/** Feature card component on homepage */
export default function Feature({icon, heading, description}) {
  return <Wrapper>
    <Heading>{heading}</Heading>
    <Description>{description}</Description>
    <Icon src={icon} alt={heading} bg='neutral.dark_violet' />
  </Wrapper>
}

const Wrapper = styled('div')({
  background: '#fff', paddingTop: 50,
  maxWidth: '350px', marginTop: 50,
  position: 'relative', borderRadius: '.5rem',
  boxShadow: '0 0 10px rgba(0,0,0,.1)', padding: '1rem',
  zIndex: 2
})
const Icon = styled('img')({
  height: 80, width: 80,
  position: 'absolute', top: -50, left: 20,
  borderRadius: '50%'
}, color)

const Heading = styled('h3')({})
const Description = styled('p')({})
