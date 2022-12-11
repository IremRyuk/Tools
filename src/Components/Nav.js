import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Nav/nav.css'

export default function Nav() {
    return (
        <> < div className = "background" > </div>
    <div className='nav'>
        <div className='nav-menu'>
        <Link to='/' style={{textDecoration:'none',color:'#32e5c4'}}><p className='header'>G3RP</p></Link>
            <ul className="list">
            <Link to='/' style={{textDecoration:'none',color:'#32e5c4'}}>
                <li className="lists"><i className="fa-solid fa-house-chimney"/>
                    Home</li></Link>
                <li className="lists cat-li">
                    <i className="fa-solid fa-list"/>
                    Category
                    <div className="categoryList">
                        <ul className="categ-list2">
                        <Link to='/request' style={{textDecoration:'none',color:'#32e5c4'}}><li className="kira1">Request Tool</li></Link>
                            <Link to='/todo' style={{textDecoration:'none',color:'#32e5c4'}}><li className="kira1">Save Personal Information</li></Link>
                            <Link to='/tools' style={{textDecoration:'none',color:'#32e5c4'}}><li className="kira1">Tools</li></Link>
                            <Link to='/news' style={{textDecoration:'none',color:'#32e5c4'}}><li className="kira1">New Tools</li></Link>
                        </ul>
                    </div>
                </li>
                <li className="lists">
                <a className="nav-phone" href="tel:+1-925-555-0139">
                    <i className="fa-solid fa-phone">
                        
                             Call Us
                    </i >
                    </a>
                </li>
                <li className="lists"><Link to='/report' style={{textDecoration:'none',color:'#32e5c4'}}><i className="fa-solid fa-flag"/>
                    Report</Link></li>
            </ul>
        </div>
    </div>
    <div className="socialSites">
        <div className="sites">
            <i className="fa-brands fa-whatsapp">
                <a href="tel:+1-925-555-0139"></a>
            </i>
        </div>

        <div className="sites">
            <i className="fa-brands fa-facebook">
                <a href="#"></a>
            </i>
        </div>

        <div className="sites">
            <i className="fa-brands fa-twitter">
                <a href="#"></a>
            </i>
        </div>
    </div>
</>
    )
}
