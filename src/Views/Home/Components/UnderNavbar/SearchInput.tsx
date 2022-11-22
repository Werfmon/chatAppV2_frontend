import React, { Dispatch, useState } from 'react'

import { Color } from '../../../../Components/Style/Color';

import { CustomTextInput } from './CustomTextInput';
import { TextInputContainer } from './TextInputColor';
import { Container } from './Container';

const SearchInput = ({setSearch}: any) => {
    return (
      <Container>
          <TextInputContainer>
              <CustomTextInput onChangeText={(text: string) => setSearch(text)} placeholder='Search...' placeholderTextColor={Color.INPUT_PLACEHOLDER}/>
          </TextInputContainer>
      </Container>
    )
}

export default SearchInput