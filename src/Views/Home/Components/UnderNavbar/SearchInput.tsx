import React, { useState } from 'react'

import { Color } from '../../../../Components/Style/Color';

import { CustomTextInput } from './CustomTextInput';
import { TextInputContainer } from './TextInputColor';
import { Container } from './Container';

import SearchSvg from '../../../../../public/static/svg/icon_search.svg'

const SearchInput = (onPress: any) => {
    const [search, setSearch] = useState<string>('');
    return (
      <Container>
          <TextInputContainer>
              <CustomTextInput onChangeText={(text: string) => setSearch(text)} placeholder='Search...' placeholderTextColor={Color.INPUT_PLACEHOLDER}/>
              <SearchSvg onPress={() => onPress(search)} height={20} width={20}/>
          </TextInputContainer>
      </Container>
    )
}

export default SearchInput