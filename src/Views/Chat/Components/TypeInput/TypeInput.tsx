import React, { useState } from 'react'
import { Color } from '../../../../Components/Style/Color';
import { Input } from './Input';

import { InputContainer } from './InputContainer'
import SendButton from './SendButton';

interface Props {
  send: (text: string) => void;
}

const TypeInput = ({send}: Props) => {

  const [text, setText] = useState<string>('');

  return (
    <InputContainer>
        <Input onChangeText={(_text: string) => setText(_text)} placeholder='Type...' placeholderTextColor={Color.INPUT_PLACEHOLDER}/>
        <SendButton onPress={() => send(text)}/>
    </InputContainer>
  )
}

export default TypeInput