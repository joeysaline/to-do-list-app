import { Button } from '@mui/material'
import React from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Logout() {
    const { logout } = useAuth();
  return (
    <>
        <Button onClick={logout}>Log Out</Button>
    </>
  )
}
