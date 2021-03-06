import { useReducer } from 'react'
import styled from 'styled-components'
import { color, layout } from 'styled-system'
import Button from '../styles/button'

function reducer(prevstate, action) {
  switch (action.type) {
    case 'input': // Input element onchange
      return { ...prevstate, url: action.text, error: '' }

    case 'error': // Error message
      return { ...prevstate, error: action.error, loading: false }

    case 'reset': // Reset form to initial state
      return { error: '', url: '', loading: false }

    case 'startLoading':  // During API request
      return { ...prevstate, loading: true }
  }
  return prevstate
}

export default function Input({ addLink }) {
  const [state, dispatch] = useReducer(reducer, { error: '', url: '', loading: false })

  /** Form submit handler */
  function shorten_url(event) {
    event.preventDefault()
    const base_url = 'https://api.shrtco.de/v2'
    const url = `${base_url}/shorten?url=${encodeURIComponent(state.url)}`
    dispatch({ type: 'startLoading' })
    fetch(url, { method: 'POST' })
      .then(res => res.json())
      .then(data => {
        if (!data.ok) {
          return dispatch({ type: 'error', error: data.error })
        }
        addLink(data.result)
        dispatch({ type: 'reset' })
      })
      .catch(err => {
        dispatch({ type: 'error', error: err.error || err.message })
      })
  }

  return <Wrapper>
    <Landing>
      <h1>MORE THAN JUST SHORTER LINKS</h1>
      <ImageWrapper />
    </Landing>
    <FormWrapper>
      <Form onSubmit={shorten_url}>
        <input type='url' value={state.url} placeholder='Shorten a link here...'
          onChange={(e) => dispatch({ type: 'input', text: e.target.value })}
          required className={state.error && 'error'} disabled={state.loading} />
        <Button variant='default' type='submit' disabled={state.loading}>{state.loading ? 'Please wait' : 'Shorten It!'}</Button>
        {state.error && <Error color='secondary'>{state.error}</Error>}
      </Form>
    </FormWrapper>
  </Wrapper>
}

const Wrapper = styled('div')({
  textAlign: 'center', '& h1': { zIndex: 2 }
}, layout)

const Landing = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  padding: '0 1em',
  flexDirection: 'column',
  width: '100%'
}, layout)

const ImageWrapper = styled.div`
  background-image: url(/people%20working.svg);
  background-repeat: no-repeat;
  background-position: center;
  min-height: 400px;
  width: 45%;
  min-width: 400px;
  max-width: 100%;
  margin: 0 auto;
`
const FormWrapper = styled.div`
  width: 100%;
  background: linear-gradient(to bottom, transparent 50%, #F0F1F6 50%);
`
const Form = styled.form`
  background-image: url(/Meteor.svg);
  max-width: min(800px, 90vw);
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  & input {
    width: min(90%, 600px);
    padding: 1em;
  }
  & .error {
    border: 2px solid red;
  }
`
const Error = styled.p`
  ${color}
  display: block;
  width: 100%;
`
