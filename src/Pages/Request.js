import React, { useState } from 'react'
import '../Styles/Request/request.css'

export default function Request() {
  let [name,setName] = useState('')
  let [gmail,setGmail] = useState('')
  let [toolsInfo,setToolsInfo] = useState('')
  class RequestFuture {
    constructor(name,gmail,tool){
        this.name = name
        this.gmail = gmail
        this.tool = tool
      }
    }
  let sendReq = (e) =>{
    e.preventDefault();
    let toolInfo = new RequestFuture(name,gmail,toolsInfo)
    console.log(toolInfo)
  }
  return (
    <div className='req'>
    <div className='request'>
      <center>
          <div className="req-toolBox">
            <form className="inputs" onSubmit={sendReq}>
              <div className="name-gmail">
                <input className="name" type="text" placeholder="Name..." required onChange={(e)=>setName(e.target.value)} />
                <input className="gmail" type="email" placeholder="Gmail..." required onChange={(e)=>setGmail(e.target.value)} />
              </div>
              <textarea
                className="text"
                placeholder="Tell Us Your Thoughts"
                required
                onChange={(e)=>setToolsInfo(e.target.value)}
              ></textarea>
              <div className="resetSend">
                <input className="reset" type="reset" />
                <input className="send" type="submit" />
              </div>
            </form>
          </div>
        </center>
    </div>
    </div>
  )
}
