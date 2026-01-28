import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from './redux/counterSlice'
import ToDoRedux from './components/ToDoRedux'
function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <ToDoRedux/>
      </div>
      {/* <div className="card">
        <button onClick={() => dispatch(increment())}>
          count is {count}
        </button>
        <button onClick={() => dispatch(decrement())}> - </button>
      </div> */}
    </>
  )
}

export default App
