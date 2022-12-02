import { useState } from 'react';
import './App.scss';
// import Example from '@/components/Example';
import Example from 'components/Example';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hi</h1>
      <Example />
    </div>
  );
}

export default App;
