import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import Link from './link'
import Toggle from './toggle'

const links = [
  { children: 'Features', href: '#' },
  { children: 'Pricing', href: '#' },
  { children: 'Resources', href: '#' }
]

export default function Header() {
  const [ open, setOpen ] = useState(true)

  return <Wrapper>
    <Image src='/logo.svg' alt='' width='150px' height='18px'/>
    <Toggle open={open} toggle={() => setOpen(c => !c)} />
    <LinkWrapper className={open ? 'active' : ''}>
      <ul>{ links.map((link, i) => <Link key={i} {...link} />) }</ul>
    </LinkWrapper>
  </Wrapper>
}

const Wrapper = styled.header`
  display: flex;
  @media screen and (min-width: 768px) {
    width: 800px;
    margin: .8em auto;
  }
`
const LinkWrapper = styled('div')({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  '&>ul': {
    display: 'flex',
    gap: '1em',
    alignItems: 'center',
  },
  '@media(max-width: 768px)': {
    background: '#000',
    position: 'absolute',
    top: 30, zIndex: 998,
    height: 0, overflow: 'hidden',
    '&>ul': {flexDirection: 'column'},
    '&.active': {
      height: 'max-content',
    }
  }
})
