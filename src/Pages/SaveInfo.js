import React,{useEffect, useRef, useState} from 'react'
import '../Styles/SaveInfo/saveInfo.css'

export default function SaveInfo() {
    let [info,setInfo] = useState('')
    let [arrs,setArray] = useState([])
    let inp = useRef()
    // localStorage.clear()
    // show Saved Data
    let showData = () =>{
      let data = JSON.parse(localStorage.getItem('list'))
      for(let i of Object.entries(data)){
      let ul = document.querySelector('.listUl')
      let li = document.createElement('li')
      let btn = document.createElement('button')
      btn.setAttribute('class','removeButton')
      btn.innerHTML = 'Done'
      btn.addEventListener('click',()=>{
        li.classList.toggle('line-middle')
      })
      li.setAttribute('class','listLi')
      li.append(i[1])
      li.append(btn)
      ul.append(li)
    }
  }

let add = (e) => {
  arrs.push(info)
    if(info === ''){
        alert('input something')
    }else{
      localStorage.setItem('list',JSON.stringify(arrs))
      let texts = document.querySelector('.save-text')
        let ul = document.querySelector('.listUl')
        let li = document.createElement('li')
        let btn = document.createElement('button')
        btn.setAttribute('class','removeButton')
        btn.innerHTML = 'Done'
        btn.addEventListener('click',()=>{
           li.classList.toggle('dones')
        })
        li.setAttribute('class','listLi')
        li.append(info)
        li.append(btn)
        ul.append(li)
        inp.current.focus()
texts.value = ''
  }
}
let clear = () => {
  localStorage.clear()
 window.location.reload()
}
  return (
      <div className="saveInfoBox">
      <div className="savebox">
        <div className="oneLine">
        <div className="remove">
            <center>
            <i className="fa-solid fa-x" onClick={()=>clear()}/>
            </center>
          </div>
          <input className="save-text" type="text" placeholder="type..." onChange={(e)=>setInfo(e.target.value)} ref={inp}/>
          <div className="plus">
            <center>
            <i className="fa-solid fa-plus" onClick={()=>add()}/>
            </center>
          </div>
          <div className="showData" onClick={()=>showData()}>
            Show
          </div>
        </div>
        <div className="list-todo">
          <ul className="listUl">
          </ul>
        </div>
      </div>
    </div>
  )
}
