import React from 'react'
import Container from '../../component/Container.jsx'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Logo from '../Logo/Logo.jsx'
import Logout from '../Logout.jsx';
function Header(){
    const authstatus=useSelector((state)=>state.authservice.status)
    const navigate=useNavigate()
    const navitem=[
        {
            name:"Home",
            slug:"/",
            active:true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authstatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authstatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authstatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authstatus,
        },
    ]


    return(
      
            <header className='py-3 shadow bg-gray-500'>
                <Container>
                <nav className='flex'>
                  <div className='mr-4'>
                    <Link to='/'>
                  <Logo width='100px'/>
                  </Link>
                  </div>
                  <ul className='flex ml-auto'>
                    {navitem.map((item)=>(
                          item.active? 
                            <li  key={item.name}>
                                <button 
                            onClick={()=>{
                                navigate(item.slug)
                            }}
                            className='inline-block px-2 py-2 duration-200 
                            hover:bg-blue-100  rounded-full ml-3'>{item.name}</button></li>
                          :null
                    ))}
                    { authstatus && (
                        <li>
                            <Logout/>
                        </li>
                    )}
                  </ul>
                </nav>
                </Container>
                
            </header>
       
    )
}
export default Header;
