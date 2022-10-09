import React from 'react'
import Interests from '../Interests'
import Buttons from './Buttons'
import Cardtext from './Cardtext'
import ImageCard from './ImageCard'
import Info from './Info'

export default function Businesscard() {
    return (
        <div>

            <div className='mainBox'>
                
               <ImageCard/>
               <Info/>
               <Buttons/>
               <Cardtext/>
               <Interests/>



            </div>




        </div>
    )
}
