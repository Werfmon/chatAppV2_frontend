import React, { useState } from "react";

import { TextInputContainer } from "./TextInputContainer";
import { Container } from "./Container";
import { CustomTextInput } from "./CustomTextInput";

import { Color } from "../../../../Components/Style/Color";

import SearchSvg from "../../../../../public/static/svg/icon_search.svg";

const SearchInput = ({setRefresh, refresh, setSearch}: any) => {

  return (
        <Container>
          <TextInputContainer>
            <CustomTextInput
              onChangeText={(text: string) => setSearch(text)}
              placeholder="Search..."
              placeholderTextColor={Color.INPUT_PLACEHOLDER}
            />
            <SearchSvg onPress={() => setRefresh(refresh + 1)} height={20} width={20} />
          </TextInputContainer>
        </Container>
  );
};

export default SearchInput;
