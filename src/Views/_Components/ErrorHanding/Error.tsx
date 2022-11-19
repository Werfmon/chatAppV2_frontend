import React, { Dispatch, SetStateAction } from 'react'
import { delay } from '../../../Helper/delay'
import { Container } from './Components/Container'
import { Text } from './Components/Text'
import { Status } from './Helper/Status'
import { ErrorProps } from './Types/ErrorProps'

export function removeError(setError: Dispatch<SetStateAction<ErrorProps>>) {
  delay(3000).then(
    () => setError({message: '', status: Status.INFO, show: false})
  );
}

export default function Error({message, status, show}: ErrorProps) {

  return (
    <Container show={show} status={status}>
      <Text> 
        {message}
      </Text>
    </Container>
  )
}