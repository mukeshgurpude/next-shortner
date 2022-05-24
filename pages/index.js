import { useEffect, useState } from 'react'
import Input from '../components/input'
import Showcase from '../components/showcase'


export default function Home() {
  const [links, setLinks] = useState([])

  useEffect(() => {
    setLinks(JSON.parse(localStorage.getItem('links') || '[]'))
  }, [])

  function addLink(new_link) {
    const links = localStorage.getItem('links')
    if (links) {
      const parsed_links = JSON.parse(links)
      parsed_links.unshift(new_link)
      localStorage.setItem('links', JSON.stringify(parsed_links))
    } else {
      localStorage.setItem('links', JSON.stringify([new_link]))
    }
    setLinks(JSON.parse(localStorage.getItem('links') || '[]'))
  }

  return <>
    <Input addLink={addLink} />
    <Showcase links={links} />
  </>
}
