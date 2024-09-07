import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './features/CounterSlice';
import { selectCount } from './store/selectors';
import { PostsList } from './features/posts/PostLists';
import { AddPostForm } from './features/posts/AddPostForm';
import { Navbar } from './components/Navbar'

function App() {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector(selectCount);


  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Navbar />
      <div className="App">
        <AddPostForm />
        <PostsList />
      </div>
    </>
  )
}

export default App;
