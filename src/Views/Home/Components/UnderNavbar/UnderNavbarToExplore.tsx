import React from 'react'

import { Container } from './UnderNavbarContainer'
import ExploreButton from './ExploreButton'
import SearchInput from './SearchInput'


const UnderNavbar = (searchChats: any) => {

  return (
    <Container>
        <SearchInput onPress={searchChats}/>
        <ExploreButton />
    </Container>
  )
}

export default UnderNavbar