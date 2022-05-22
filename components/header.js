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
    <LinkWrapper>
      <ul>{ links.map((link, i) => <Link key={i} {...link} />) }</ul>
      <ul>
        <Link href='#'>Login</Link>
        <Link href='#' variant='button'>Sign Up</Link>
      </ul>
    </LinkWrapper>
  </Wrapper>
}

const Wrapper = styled.header`
  display: flex;
`
const LinkWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  &>ul {
    display: flex;
    gap: 1em;
    align-items: center;
  }
`
