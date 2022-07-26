import React, { Component } from 'react'
// import Home from './Home';
// import AboutUs from './AboutUs';
// import {add} from './Math'
import {lazy, Suspense} from "react"

import ('./Math').then((res)=> {console.log("Result is " + res.add(2,3))
})

// console.log(add(2,3));

const Home = lazy(()=> import ('./Home'));
const AboutUs = lazy(()=> import ('./AboutUs'));


export default class App4 extends Component {
  render() {
    return (
      <div> <h1> Lazy Loading </h1>
        <Suspense fallback = {<h1> Home Page is loading </h1>}>
<Home/>
</Suspense>
<Suspense fallback = {<h1> About Us Page is loading </h1>}>
<AboutUs/>
</Suspense>

      </div>
    )
  }
}
