import { Status } from "../Helper/Status"

export type ErrorProps = {
    message: string,
    status: Status,
    show?: boolean
}