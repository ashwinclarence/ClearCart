import { useEffect, useState } from "react";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import PreLoadPage from "./Pages/PreLoadPage";
import Home from "./Pages/Home";

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])
  return (
    <div className='app'>
      {
        loading ? <PreLoadPage /> :
          <Router>
            <Routes>
              <Route path='/' element={<Home />} ></Route>
            </Routes>
          </Router>

      }
    </div>
  )
}

export default App
