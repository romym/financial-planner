# Financial Planner

'CRUD application for daily financial planning'

### Overview

The purpose of this project for me was to make a small application that allows me to set a budget, and track how much money I am spending against that budget daily.  

To install the dependencies:

```
yarn
```

To configure the database:

```
cp server/ormconfig-sample.js server/ormconfig.js
```

To fire up a development server:

```
yarn start:server
```

To fire up the client in the browser:

```
yarn start
```


### API

**METHOD**
`POST /users` 

**BODY** 
`{ name: string, email: string }`
    
**RESPONSE**
`{{ "id": 106, "name": "Patrick", "email": "patrick@email.com","accounts": []`

**METHOD**
`POST /accounts` 

**BODY** 
`{ user: string, budget: 1400, period: "month" }`
    
**RESPONSE**
`{ "id": 1,"spending": 1924.8,"income": 320.8, "budget": 1400,"remaining": 1400, "period": "week","user": { "id": 1, "name": "Patrick", "email": "patrick@email.com" }`

**METHOD** 
`DELETE /accounts/:id`
    
**BODY** 
    

**RESPONSE**
    `{ "id": 1,"spending": 1924.8,"income": 320.8, "budget": 1400,"remaining": 1400, "period": "week","user": { "id": 1, "name": "Patrick", "email": "patrick@email.com" }, "transactions": [{"id": 1, "memo": "Kodak Film", "amount": 320.8 "type": "spending", "category": "none"}]}`

**METHOD**
`GET /accounts`

**RESPONSE**
`{ "id": 1,"spending": 1924.8,"income": 320.8, "budget": 1400,"remaining": 1400, "period": "week","user": { "id": 1, "name": "Patrick", "email": "patrick@email.com" }, "transactions": [{"id": 1, "memo": "Kodak Film", "amount": 320.8 "type": "spending", "category": "none"}]}, { "id": 2,"spending": 924.8,"income": 320.8, "budget": 140,"remaining": 0, "period": "week","user": { "id": 1, "name": "Patrick", "email": "patrick@email.com" }, "transactions": [{"id": 1, "memo": "Slim Jims", "amount": 320.8 "type": "spending", "category": "none"}]}`

**METHOD**
`POST /transactions` 

**BODY** 
`{ "account": 2, "type": "spending", "category: "Work", "amount": 1220.80, "memo": "Kodak Film"}`
    
**RESPONSE**
`{ "id": 1, "memo": "Kodak Film", "amount": 1220.8, "type": "spending", "category": "Work"}`

**METHOD**
`GET /transactions`

**RESPONSE**
`[{ "id": 1, "memo": "Kodak Film", "amount": 320.8, "type": "spending", "category": "none"}, { "id": 2, "memo": "Leather Jacket", "amount": 520.8, "type": "spending", "category": "none"}]`

**METHOD**
`GET /transactions/:id`

**RESPONSE**
`{ "id": 1, "memo": "Kodak Film", "amount": 320.8, "type": "spending", "category": "none"}`
    
