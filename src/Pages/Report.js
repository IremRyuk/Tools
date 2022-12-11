import React, { useState } from 'react'
import '../Styles/Report/report.css'

export default function Report() {
    let [reportInfo,setReportInfo] = useState('')
    let send = (e) =>{
        e.preventDefault();
        if(reportInfo === ''){
            return
        }else{
            console.log(`Report Information About Web-Page: ${reportInfo}`)
        }
        
    }
  return (
    <div className='report'>
        <form className='report-box' onSubmit={send}>
            <center>
            <p className='report-header'>If you have some problem in our web-site
 feel free and tell us about it</p>
 <textarea className="report-text" placeholder='type...' onChange={(e)=>{setReportInfo(e.target.value)}}></textarea>
 <div className='report-btns'>
<input type='reset' className='report-reset'/>
<input type='submit' className='report-submit'/>
</div>
 </center>
        </form>
    </div>
  )
}
