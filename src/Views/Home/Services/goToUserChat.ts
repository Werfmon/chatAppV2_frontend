import { navigate } from "../../../Components/Navigation/RootNavigation";
import { setMessagesAsSeen } from "./setMessagesAsSeen";
import { Dispatch, SetStateAction } from 'react';
import { ErrorProps } from "../../_Components/ErrorHanding/Types/ErrorProps";

export function goToUserChat(chat: any, loggedUser: any, setError: Dispatch<SetStateAction<ErrorProps>>): void {
    setMessagesAsSeen(chat.uuid, setError);
    navigate('Chat', {
      chat: chat,
      currentUser: loggedUser
    })
  }