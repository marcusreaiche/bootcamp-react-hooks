import React, { useState } from 'react';


function App() {
  
  const [techs, setTechs] = useState([
    "ReactJS",
    "React Native",
  ]);

  const [input, setInput] = useState("");

  function handleAdd() {
    if(input && !techs.find(tech => tech === input)) {
      setTechs([...techs, input])
    }
    setInput("");
  }

  return (
    <>
      <h1>My awesome techs</h1>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <input 
        type="text" 
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button 
        type="button"
        onClick={handleAdd}
      >
        Add Tech
      </button>
    </>
  );
}

export default App;
