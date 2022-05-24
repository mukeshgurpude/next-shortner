import styled from 'styled-components'
import { color, layout } from 'styled-system'
import Feature from './feature'

const features = [{
  icon: '/icon-brand-recognition.svg',
  heading: 'Brand Recognition',
  description: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
}, {
  icon: '/icon-brand-recognition.svg',
  heading: 'Brand Recognition',
  description: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
}, {
  icon: '/icon-brand-recognition.svg',
  heading: 'Brand Recognition',
  description: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
}]

export default function Stats() {
  return <Wrapper bg='neutral.bg'>
    <Heading>Advanced Statistics</Heading>
    <Desc color='neutral.blue'>Track how your links are performing across the web with our advanced statistics Dashboard.</Desc>
    <Features>{
      features.map((f, i) => <Feature key={i} {...f} />)
    } <FancyLine bg='primary.cyan' />
    </Features>
  </Wrapper>
}

const Wrapper = styled('section')(color, {
  textAlign: 'center'
})

const Heading = styled('h2')({ margin: '0', paddingTop: '1em' })
const Desc = styled('p')(color)

const Features = styled('div')(layout, {
  display: 'flex', gap: '3rem',
  padding: '.8rem', flexFlow: 'wrap',
  justifyContent: 'space-around', position: 'relative',
  paddingBottom: '3rem'
})

const FancyLine = styled.div`
  ${color}
  height: 20px; width: 90%;
  position: absolute; top: 50%;;
  @media (max-width: 768px) {
    transform: rotate(90deg);
  }
`
