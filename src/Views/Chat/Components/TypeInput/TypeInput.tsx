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
  
  function handleInput() {
    if (text.length !== 0) {
      send(text)
      setText('');
    }
  }
  
  return (
    <InputContainer>
        <Input onChangeText={(_text: string) => setText(_text)} value={text} placeholder='Type...' placeholderTextColor={Color.INPUT_PLACEHOLDER}/>
        <SendButton onPress={handleInput}/>
    </InputContainer>
  )
}

export default TypeInput