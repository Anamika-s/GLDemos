import React from 'react'
var age = 20

class Hello extends React.Component {
  render() {
    return '<div> Hello from React Comp </div>'
  }
}
function sayHello() {
  return age
}

console.log(sayHello())
