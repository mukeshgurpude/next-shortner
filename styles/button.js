import styled from 'styled-components';
import { color, space, variant } from 'styled-system';

const Button = styled('button')({
  border: 'none',
  padding: '1em',
  fontWeight: 'bold',
  cursor: 'pointer',
  borderRadius: '.2rem'
}, color, space, variant({
  variants: {
    default: {
      bg: 'primary.cyan',
      color: '#fff',
      '&:hover': {
        filter: 'brightness(150%)'
      }
    },
    active: {
      bg: 'primary.violet',
      color: '#fff'
    }
  }
}))

export default Button
