import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { API_URL } from './config/api'
// import './App.css'

function App() {

  return (
    <div>
      <Link to="/posts">Go To posts</Link>
      <Outlet />
    </div>
  )

}

export default App
