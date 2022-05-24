import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'
import Button from '../styles/button'

export default function Card({ original_link, full_short_link }) {
  const [copied, setCopied] = useState(false)

  function copyToClipboard() {
    navigator.clipboard.writeText(full_short_link)
    setCopied(true)
  }

  useEffect(() => {
    setTimeout(() => setCopied(false), 5000)
  }, [copied])

  return <Wrapper>
    <Original>{original_link}</Original>
    <Anchor color='primary.cyan' href={full_short_link} target='_blank' rel='noreferrer' >{full_short_link}</Anchor>
    <Button variant={copied ? 'active' : 'default'} onClick={copyToClipboard} style={{padding: '.5rem 1rem'}}>{ copied ? 'Copied' : 'Copy' }</Button>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: .2rem 1rem;
  padding: .5rem 1rem;
  width: 100%;
  background: #fff;
  border-radius: .2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Original = styled.p`
  @media (min-width: 768px) {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 40%;
  }
`

const Anchor = styled('a')(color, {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  '&:hover': {
    textDecoration: 'underline'
  }
})
