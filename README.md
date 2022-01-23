## Assessment-Api for Mosiac

### Heroku link

https://mosiac-assessment-api.herokuapp.com/api/posts

### Valid Routes

`/api/ping`
`/posts/:queryString`

- queryString contains 1 required param and 2 optional params.
- tags :(required) (politics,health,science,history.....)
- sortBy : (id,likes,reads, popularity) (optional)
- direction : (desc,asc) (optional)
  <br>

Example api request:
<br>
https://mosiac-assessment-api.herokuapp.com/api/posts?tags=health,politics&sortBy=likes&direction=desc

### Stack

- NodeJs
- Express
- Heroku

### Test

- Jest

### Running Instructions

Either fetch API using heroku link or download & run this repo locally.

`clone the project` <br>
`cd to the folder` <br>
`npm install`
<br>
` npm start`

### To Test

`npm test`
