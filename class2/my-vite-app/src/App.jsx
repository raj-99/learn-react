import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from "./components/MyComponent"
import DisplayData from "./components/DisplayData"
import ConditionRender from './components/ConditionRender'
import Button from './components/Form'

function App() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];
  const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  return (
    <>
    <Button></Button>
    <ConditionRender isLoggedIn={false} username={person.name}> </ConditionRender>
    <MyComponent message="Hello from App.jsx"/>
    <MyComponent message="This is our first program"/>
    <DisplayData fruits={fruits} person={person}/>
    </>
  )
}

export default App
