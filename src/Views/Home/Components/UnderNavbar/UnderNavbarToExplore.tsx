import React from 'react'

import { Container } from './UnderNavbarContainer'
import ExploreButton from './ExploreButton'
import SearchInput from './SearchInput'


const UnderNavbar = ({setSearch}: any) => {

  return (
    <Container>
        <SearchInput setSearch={setSearch}/>
        <ExploreButton />
    </Container>
  )
}

export default UnderNavbar