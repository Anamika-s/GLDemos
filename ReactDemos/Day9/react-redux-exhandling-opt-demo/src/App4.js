import React, { Component } from 'react'
import Image from './Image'
import img1 from './Be-agile-237x300.png';
import img2 from './extra-mile-237x300.png'

import Error from './Error';
export default class App4 extends Component {
  render() {
    return (
      <div>App4
        {/* <Error> */}
<Image image={img1}/>
 
<Image image={img2}/>
 
<Image image="no image"/>
    {/* </Error> */}
      </div>
    )
  }
}
