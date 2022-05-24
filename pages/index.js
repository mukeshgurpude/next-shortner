import { useState } from 'react'
import Input from '../components/input'

export default function Home() {
  const [links, setLinks] = useState([])
  function addLink(new_link) {
    setLinks(current => [...current, new_link])
  }

  return <>
    <Input />
  </>
}
