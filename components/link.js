import styled from 'styled-components';
import { space, variant } from 'styled-system';


export default function Link({ children, variant= 'default', href }) {
  return <StyledLink href={href} variant={variant} >{children}</StyledLink>
}

export const StyledLink = styled('a')({
  '&:hover': { cursor: 'pointer' }
}, space, variant({
  variants: {
    default: {
      color: 'neutral.gray',
      '&:hover': {
        color: 'primary.violet'
      }
    }, dark: {
      color: 'neutral.gray',
      '&:hover': {
        color: 'primary.cyan'
      }
    }, button: {
      color: '#fff',
      bg: 'primary.cyan',
      p: '.3em .7em',
      'border-radius': '1em',
      '&:hover': {
        bg: 'neutral.violet'
      }
    }
  }
}))
