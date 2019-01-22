import { User } from "../users/users.entity";
import { Period } from "./accounts.enums";

export class AccountsDTO {
    user: User
    period: Period
    budget: number
}