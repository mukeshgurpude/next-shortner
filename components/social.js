import Image from 'next/image'
import styled from 'styled-components'

const links = [
  { icon: '/icon-facebook.svg', href: 'https://facebook.com', text: 'Facebook' },
  { icon: '/icon-twitter.svg', href: 'https://twitter.com', text: 'Twitter' },
  { icon: '/icon-instagram.svg', href: 'https://instagram.com', text: 'Instagram' },
  { icon: '/icon-pinterest.svg', href: 'https://pinterest.com', text: 'Pinterest' },
]

export default function Social({color='#fff', activeColor='primary.cyan'}) {
  return <Wrapper>
    {
      links.map(({icon, href, text}) => {
        return <Icon key={text} href={href}>
          <Image src={icon} width={24} height={24} alt='' />
        </Icon>
      })
    }
  </Wrapper>
}

const Wrapper = styled('div')({ display: 'flex', gap: '1rem' })
const Icon = styled('a')({})
