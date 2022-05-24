import styled from 'styled-components'
import { color, space } from 'styled-system'
import Logo from './logo'
import Social from './social'

const footer_links = [{
  heading: 'Features',
  links: [{text: 'Link Shortening', href: '/'}, {text: 'Branded Links', href: '/'}, {text: 'Analytics', href: '/'}]
}, {
  heading: 'Resources',
  links: [{text: 'Blog', href: '/'}, {text: 'Developers', href: '/'}, {text: 'Support', href: '/'}]
}, {
  heading: 'Company',
  links: [{text: 'About', href: '/'}, {text: 'Our Team', href: '/'}, {text: 'Careers', href: '/'}, {text: 'Contact', href: '/'}]
}]

export default function Footer() {
  return <Wrapper bg='neutral.dark_violet'>
    <Logo fill='#fff' />
    <Social />
    <LinksContainer>{
      footer_links.map(({heading, links}) => {
        return <LinksGroup key={heading}>
          <Heading>{heading}</Heading>
          <LinksList>{
            links.map(({text, href}) => <Link key={text} href={href}>{text}</Link>)
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
  display: 'flex', flexDirection: 'column', paddingLeft: 0
})
const Link = styled('a')({})
