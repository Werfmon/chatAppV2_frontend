import { WS_API } from "@env";;

export function wsSetupURL(chatUuid: string, personUuid: string): string {
    return `${WS_API}/socket-chat/${chatUuid}${personUuid}`;
}