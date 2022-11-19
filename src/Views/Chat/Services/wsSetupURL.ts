import EnvConfig from "../../../../EnvConfig";

export function wsSetupURL(chatUuid: string, personUuid: string): string {
    return `${EnvConfig.WS_API}/socket-chat/${chatUuid}${personUuid}`;
}