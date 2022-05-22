import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import { layout } from 'styled-system'
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
    <Image src='/logo.svg' alt='' height='28px' width='100%' />
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

const Wrapper = styled.header``
const LinkWrapper = styled.div``
