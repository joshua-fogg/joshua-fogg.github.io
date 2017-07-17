<h1>Data Bases</h1>

Positives:
<ul>
  <li> Concurrency </li>
  <li> multi-user </li>
  <li> Efficiency </li>
  <li> Larger data sets </li>
  <li> Inter-data relationships </li>
  <li> Security Features </li>
  <li> Consistency </li>
  <li> reliability / all or nothing data change </li>
  <li> stability  / all or nothing data change / non-volatile / transactions </li>
  <li> Are a service - listening, like an API with no GUI or UI </li>
</ul>
<br<br>
<ul>Database Examples:
<li>SQLite: client side DB; single-user; file-based; useful for testing, development and for apps as only 1 user  needed. Open SOurce (OS) </li>
<li>PostgreSQL: OS </li>
<li>MS SQL </li>
<li>Oracle </li>
<li>MySQL & Maria: OS </li>
<li>KNEX.js OS </li>
</ul>

Types of Database Management Services (DBMS):
- Relational / RDBMS: MySQL, Oracle, MS SQL; most common type.
- Document / DDBMS: MongoDB
- Object / ODBMS: Jade
- Column Based / CBDBMS: Dynamo DB
- Key-Value Stores: Cassandra, Redis
- Graph: NeoJS

Relational Databases:
Sheet===table===Entity
Column===fields
row===record
Object Relational MArkers = Library
schemas / Metadata = data that describes data. table name, column name, titles.
Data = record.
CLI = command Line Interface
DB uses snakecase, underscore joining. JS uses camelCase .: can require conversion.
Don't edit schemas, create new Schemas.

Migration = creates tables, columns; is an evolution of change in data structure.
 -- ie how many table do you need.

 npm install knex sqlite
 index.js: const knex = require('knex'), const config = require('./knexfile')
 const db = knex(config)


 Promsies:
 * dont take a call back
 * Resolve OR Reject
 * .then()   OR .catch()
 * can only .catch once.
 * used to chain functions
 * cleaner than call back, prevents callback hell.
