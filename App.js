import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './src/Screens/Stack'
import UserProvider from './src/Context/UserContext'

export default()=>{

  return(
    <NavigationContainer>
      <UserProvider>
        <Stack></Stack>
      </UserProvider>
    </NavigationContainer>
  )
}