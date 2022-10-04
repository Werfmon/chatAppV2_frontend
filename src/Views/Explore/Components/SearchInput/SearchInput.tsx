import React, { useState } from 'react'

import { TextInputContainer } from './TextInputContainer';
import { Container } from './Container';
import { CustomTextInput } from './CustomTextInput';

import { Color } from '../../../../Components/Style/Color';

import SearchSvg from '../../../../../public/static/svg/icon_search.svg';
import { searchUsers } from '../../../../Services/Explore/searchUsers';

const SearchInput = ({setState}: any) => {
    const [search, setSearch] = useState<string>('');

    function onSearch() {
        searchUsers(search, setState)
        setSearch('');
    }

    return (
      <Container>
          <TextInputContainer>
              <CustomTextInput onChangeText={(text: string) => setSearch(text)} value={search} placeholder='Search...' placeholderTextColor={Color.INPUT_PLACEHOLDER}/>
              <SearchSvg onPress={onSearch} height={20} width={20}/>
          </TextInputContainer>
      </Container>
    )
}

export default SearchInput