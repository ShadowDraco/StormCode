import React from 'react'
import OwnerHero from '../components/about/OwnerHero.jsx'
import DanceHero from '../components/about/DanceHero.jsx'
import SetupHero from '../components/about/SetupHero.jsx'
import { Container } from '@mantine/core'


export default function page() {
  return (
    <Container mt={40}>
      <OwnerHero />
      <DanceHero />
      <SetupHero />
    </Container>
  )
}
