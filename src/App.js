import React, { useState, useEffect } from 'react';


function App() {
  
  // Hook useState
  const [techs, setTechs] = useState([]);
  const [input, setInput] = useState("");

  // Hook useEffect
  useEffect(() => {
    const storageTechs = JSON.parse(localStorage.getItem("techs"));
    if(storageTechs) {
      setTechs(storageTechs);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("techs", JSON.stringify(techs));
  }, [ techs ]);

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
