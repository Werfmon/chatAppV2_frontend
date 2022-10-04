import React, { useState } from 'react'

import { TextInputContainer } from './TextInputContainer';
import { Container } from './Container';
import { CustomTextInput } from './CustomTextInput';

import { Color } from '../../../../Components/Style/Color';

import SearchSvg from '../../../../../public/static/svg/icon_search.svg';

const SearchInput = ({onPress, setState}: any) => {
    const [search, setSearch] = useState<string>('');

    return (
      <Container>
          <TextInputContainer>
              <CustomTextInput onChangeText={(text: string) => setSearch(text)} placeholder='Search...' placeholderTextColor={Color.INPUT_PLACEHOLDER}/>
              <SearchSvg onPress={() => onPress(search, setState)} height={20} width={20}/>
          </TextInputContainer>
      </Container>
    )
}

export default SearchInput