const greet = require("./greet")

const a = 1;
const b = 2;
const c = 3;

console.log(c)

if (a != c) {

} else if (b == null) {

}

function hello(text, callback) {
  callback(text)
}

hello("Hello World!", function (data) {
  console.log(data);
})

greet.english()
greet.portuguese()