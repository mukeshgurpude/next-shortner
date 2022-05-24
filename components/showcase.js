import styled from 'styled-components'
import { color } from 'styled-system'
import Card from './link-card'

export default function Showcase({ links }) {
  return <Wrapper bg='neutral.gray'>
    <Container>{
    links.map(link => <Card key={link.code} {...link} />)
  }</Container></Wrapper>
}

const Wrapper = styled('div')({
  padding: '1rem',
  width: '100%',
}, color)

const Container = styled('div')({
  margin: '0 auto',
  maxWidth: '600px',
  display: 'flex',
  gap: '1rem',
  flexFlow: 'column'
})
