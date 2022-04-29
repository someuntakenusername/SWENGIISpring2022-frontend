import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import CreateOwner from './CreateOwner';
export default function CreateOwnerContainer() {
    const {currentUser} = useAuth();
  return (
      <>
        <CreateOwner currentUser={currentUser}></CreateOwner>
      </>
    
  )
}
