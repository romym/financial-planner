import { Account } from "../accounts/accounts.entity";

import { TransactionCategory, TransactionType } from './transactions.enums'

export class TransactionsDTO {
    account: Account
    type: TransactionType
    category: TransactionCategory
    amount: number
    memo: string
}