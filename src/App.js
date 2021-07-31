import React, { useState } from 'react';
const chalk = require('chalk');
const os = require('os');
const log = console.log;
// import {SetState} from './hook/SetState';
const Path = require('path');
function SetState() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
function App() {
  const s1 = Symbol('')
  function* loop () {
    for (let i = 0; i < 5; i++) {
      yield console.log(i)
    }
  }
  
  // const l = loop()
  // console.log(l.next())
  // console.log(l.next())
  // console.log(l.next())
  // chalk.enabled = true;
  log(Path.resolve(__dirname))
  log(chalk.blue('哈哈哈'))
  log(os.cpus())
  return (
    <div className="App">
      <SetState></SetState>
    </div>
  );
}

export default App;
