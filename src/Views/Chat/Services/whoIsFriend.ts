import { Person } from "../Types/Person";

export function whoIsFriend(firstPerson: Person, secondPerson: Person, currentPerson: Person): any {
    return secondPerson.uuid === currentPerson.uuid
    ? firstPerson
    : secondPerson
}