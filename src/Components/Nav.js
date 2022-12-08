import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Nav/nav.css'

export default function Nav() {
    return (
        <> < div className = "background" > </div>
    <div className='nav'>
        <div className='nav-menu'>
            <p className='header'><Link to='/' style={{textDecoration:'none',color:'#32e5c4'}}>G3RP</Link></p>
            <ul className="list">
                <li className="lists"><i className="fa-solid fa-house-chimney"/>
                <Link to='/' style={{textDecoration:'none',color:'#32e5c4'}}>
                    Home</Link></li>
                <li className="lists cat-li">
                    <i className="fa-solid fa-list"/>
                    Category
                    <div className="categoryList">
                        <ul className="categ-list2">
                            <li className="kira1"><Link to='/request' style={{textDecoration:'none',color:'#32e5c4'}}>Request Tool</Link></li>
                            <li className="kira1"><Link to='/todo' style={{textDecoration:'none',color:'#32e5c4'}}>Save Personal Information</Link></li>
                            <li className="kira1"><Link to='/news' style={{textDecoration:'none',color:'#32e5c4'}}>New Tools</Link></li>
                        </ul>
                    </div>
                </li>
                <li className="lists">
                    <i className="fa-solid fa-phone">
                        <a className="nav-phone" href="tel:+1-925-555-0139">
                             Call Us</a>
                    </i >
                </li>
                <li className="lists"><i className="fa-solid fa-flag"/>
                    Report</li>
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
