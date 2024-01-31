import React, { useEffect } from 'react'
import authservice from '../../service/appwrite/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'

function Logout() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        authservice.logoutUser().then(()=>{
            dispatch(logout())
            navigate("/")
        })
    },[])
  return (
    <div>
      loading...
    </div>
  )
}

export default Logout
