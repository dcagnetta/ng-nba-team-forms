export class Player implements IPlayer {
    firstName: string;
    lastName: string;
    number: number;
    position: string;

    constructor(firstName?: string, lastName?: string, number?: number, position?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.number = number;
        this.position = position;
    }
}

export interface IPlayer {
  firstName: string;
  lastName: string;
  number: number;
  position: string;
}
