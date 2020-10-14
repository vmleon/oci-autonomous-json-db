# Oracle Cloud Autonomous JSON Database

Learn a NoSQL database that can go from prototype to production straight away!

## What is Autonomous JSON Database (ADJ)

ADJ is a Cloud **NoSQL Document** Database.

- Serverless scaling
- ACID transactions
- Comprehensive security
- 99.995% availability
- Up to 32MB document size
- Indexing without limitation
- Full SQL support
- Simple and Fast cross-collection Joins and Aggregations

## Requirements

- Oracle Cloud Account
- Node JS

Install `node-oracledb` dependency.

A native, open-source document store API called SODA (Simple Oracle Document Access) for common programming languages

## SODA

Official Documentation:

[Using Oracle Autonomous JSON Database](https://docs.oracle.com/en/cloud/paas/autonomous-json-database/ajdug/use-sql-developer-web-soda.html)

[SODA for REST Developer's Guide](https://docs.oracle.com/en/database/oracle/simple-oracle-document-access/rest/adrst/rest.html)

[JSON Developer's Guide](https://docs.oracle.com/en/database/oracle/oracle-database/19/adjsn/index.html)

### Create JSON collection

Go to `Tools` > `SQL Developer Web` and run the following:

```
soda create books;
soda insert books {"title":"Command and Control","author":"Eric Schlosser"}
soda insert books {"title":"Originals","author":"Adam Grant"}
```

Create reviews

```
soda create reviews
soda insert reviews {"book": "Command and Control", "score": 5, "comment": "A must read for nuclear accidents"}
```

## GraphQL Server

On [src/api](./src/api) you can find the implementation of a GraphQL server.

Go there and run `npm install` then `npm start`.

Go to [localhost:4000](http://localhost:4000/)

On the GraphQL Playground:

```
query Books {
  books {
    title
    author
  }
}
```

---

```
soda help
```

```
soda list
```

```
soda create cities;
soda insert cities {"name":"San Jose","population":1021795,"county":"Santa Clara"}
soda insert cities {"name":"Atlanta","population":506811,"county":["Fulton", "DeKalb"]}
```

```
describe cities;
```

```
soda get cities -f {"county":"Fulton"}
soda get cities -f {"population":{"$gte":1000000}}
```

```
select j.* from cities NESTED json_document
    COLUMNS (name, population number,
        NESTED county[*]
        COLUMNS(countyName PATH '$')) j;
```
