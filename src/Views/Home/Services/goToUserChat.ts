import { navigate } from "../../../Components/Navigation/RootNavigation";

export function goToUserChat(chat: any, loggedUser: any): void {
    navigate('Chat', {
      chat: chat,
      currentUser: loggedUser
    })
  }