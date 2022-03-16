
const getAge=require('n-age-calc')
const db=new Date()
db.setYear(2022)
db.setUTCMonth(03)
db.setDate(10);

console.log(getAge(db))

