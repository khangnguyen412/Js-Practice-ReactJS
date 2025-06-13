import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import ChooseLecture from './pages/lecture';
import Chap2Lecture01 from './pages/chapter-02/examples/lecture01-intro';
import Chap2Lecture02 from './pages/chapter-02/examples/lecture02-jsx';
import Chap2Lecture03FC from './pages/chapter-02/examples/lecture03-function-component';
import Chap2Lecture03CC from './pages/chapter-02/examples/lecture03-class-component';
import Chap2Lecture04 from './pages/chapter-02/examples/lecture04-props';
import Chap2Lecture05 from './pages/chapter-02/examples/lecture05';
import Chap3Lecture01 from './pages/chapter-03/examples/lecture01-lifecycle';
import Chap3Lecture02 from './pages/chapter-03/examples/lecture02-useref';
import Chap3Lecture03 from './pages/chapter-03/examples/lecture03-conditional';
import Chap3Lecture04 from './pages/chapter-03/examples/lecture04-renderList';
import Chap3Lecture05 from './pages/chapter-03/examples/lecture05-formhandling';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route>
            <Route index element={<Welcome></Welcome>} />
          </Route>

          <Route>
            <Route path="/choose-lecture" element={<ChooseLecture></ChooseLecture>} />
          </Route>
          
          <Route>
            <Route path="/chapter2-lecture1" element={<Chap2Lecture01></Chap2Lecture01>} />
          </Route>
          
          <Route>
            <Route path="/chapter2-lecture2" element={<Chap2Lecture02></Chap2Lecture02>} />
          </Route>
          
          <Route>
            <Route path="/chapter2-lecture3-1" element={<Chap2Lecture03FC></Chap2Lecture03FC>} />
          </Route>
          
          <Route>
            <Route path="/chapter2-lecture3-2" element={<Chap2Lecture03CC></Chap2Lecture03CC>} />
          </Route>
          
          <Route>
            <Route path="/chapter2-lecture4" element={<Chap2Lecture04></Chap2Lecture04>} />
          </Route>

          <Route>
            <Route path="/chapter2-lecture5" element={<Chap2Lecture05></Chap2Lecture05>} />
          </Route>
          
          <Route>
            <Route path="/chapter3-lecture1" element={<Chap3Lecture01></Chap3Lecture01>} />
          </Route>

          <Route>
            <Route path="/chapter3-lecture2" element={<Chap3Lecture02></Chap3Lecture02>} />
          </Route>
          
          <Route>
            <Route path="/chapter3-lecture3" element={<Chap3Lecture03></Chap3Lecture03>} />
          </Route>
          
          <Route>
            <Route path="/chapter3-lecture4" element={<Chap3Lecture04></Chap3Lecture04>} />
          </Route>
          
          <Route>
            <Route path="/chapter3-lecture5" element={<Chap3Lecture05></Chap3Lecture05>} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
