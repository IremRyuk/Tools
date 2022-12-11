import React, { useEffect, useState } from 'react'
import '../Styles/Tools/tools.css'

export default function Tools() {
    let [kg,setKg] = useState(0)
    let [Pound,setPound] = useState()
    let [cm,setCm] = useState(0)
    let [Foot,setFoot] = useState()
    let [cm2,setCm2] = useState(0)
    let [Inch,setInch] = useState()
    useEffect(()=>{
        // pound
        setPound(Math.floor((kg * 2.205))/100 )
        // Foot
        let number = (cm /30.48)
        let num2 = Math.round(number * 100) / 100
        setFoot(num2)  
        // inch
        let number2 = cm2 / 2.54
        let num3 = Math.round(number2 * 100) / 100
        setInch(Math.floor(num3))
    },[kg,cm,cm2])
    
  return (
    <div className='tools'>
      <div className="calcBox">
      <div className="flexBox">
        <input className="inp1" type="number" placeholder="Kg" onChange={(e)=>setKg(e.target.value)} />

        <p className="into">Into</p>

        <div className="inp2"><p className="size">{Pound} Pound</p></div>
      </div>
      <div className="flexBox">
        <input className="inp1" type="number" placeholder="Cm" onChange={(e)=>setCm(e.target.value)}/>

        <p className="into">Into</p>

        <div className="inp2"><p className="size">{Foot} Foot</p></div>
      </div>

      <div className="flexBox">
        <input className="inp1" type="number" placeholder="Cm" onChange={(e)=>setCm2(e.target.value)}/>

        <p className="into">Into</p>

        <div className="inp2"><p className="size">{Inch} Inch</p></div>
      </div>
    </div>
    </div>
  )
}
