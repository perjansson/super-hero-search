import React from 'react'
import HeroDetails from '../HeroDetails'

export default {
  title: 'HeroDetails',
  component: HeroDetails,
}

export const HeroDetailsWithImage = () => (
  <HeroDetails
    hero={{
      id: '123',
      name: 'Superman',
      image: {
        url: 'https://www.superherodb.com/pictures2/portraits/10/100/791.jpg',
      },
    }}
  />
)

HeroDetailsWithImage.story = {
  name: 'with image',
}

export const HeroDetailsWithoutImage = () => (
  <HeroDetails
    hero={{
      id: '123',
      name: 'Superman',
    }}
  />
)

HeroDetailsWithoutImage.story = {
  name: 'without image',
}
