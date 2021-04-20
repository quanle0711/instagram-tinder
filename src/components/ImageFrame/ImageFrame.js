import React, { Component } from 'react'
import Onion1 from '../../images/onion.jpg'
import Onion2 from '../../images/onion2.jpg'
export class ImageFrame extends Component {
    render() {
        return (
            <div>
                <img src={Onion1} alt="onion" className="h-96 rounded mb-14 shadow-sm"/>
            </div>
        )
    }
}

export default ImageFrame
