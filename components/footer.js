import styled from 'styled-components'
import { color, space, variant } from 'styled-system'
import footer_links from '../data/footer_links'
import Logo from './logo'
import Social from './social'

export default function Footer() {
  return <Wrapper bg='neutral.dark_violet'>
    <Logo fill='#fff' />
    <Social />
    <LinksContainer>{
      footer_links.map(({ heading, links }) => {
        return <LinksGroup key={heading}>
          <Heading>{heading}</Heading>
          <LinksList>{
            links.map(
              ({ text, href }) => <Link variant='footer_link' key={text} href={href}>{text}</Link>
            )
          }</LinksList>
        </LinksGroup>
      })
    }</LinksContainer>
  </Wrapper>
}

const Wrapper = styled('footer')({
  display: 'grid', color: '#fff',
  gridTemplateAreas: `"logo links" "social links" "_ links"`,
  gridTemplateColumns: '1fr 3fr', padding: '2rem', gap: '1rem',
  '@media (max-width: 768px)': {
    gridTemplateAreas: `"logo" "links" "social"`,
    gridTemplateColumns: '1fr',
  }
}, space, color)

const LinksContainer = styled('div')({
  gridArea: 'links', display: 'flex', gap: '1rem', flexWrap: 'wrap',
  margin: '0 auto'
})
const LinksGroup = styled('div')({
  display: 'flex', flexDirection: 'column', padding: '.5rem',
  minWidth: '250px',
})
const Heading = styled('h3')({ margin: 0 })
const LinksList = styled('ul')({
  display: 'flex', flexDirection: 'column', paddingLeft: 0, gap: '.4rem'
})
const Link = styled('a')(color, variant({
  variants: {
    footer_link: {
      color: 'neutral.gray',
      '&:hover': {
        color: 'primary.cyan'
      }
    }
  }
}))
