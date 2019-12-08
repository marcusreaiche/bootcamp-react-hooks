import React, { useState, useEffect, useMemo } from 'react';


function App() {
  
  // Hook useState
  const [techs, setTechs] = useState([]);
  const [input, setInput] = useState("");

  // Hook useEffect
  // Fetching techs from local storage
  useEffect(() => {
    const storageTechs = JSON.parse(localStorage.getItem("techs"));
    if(storageTechs) {
      setTechs(storageTechs);
    }
  }, []);

  // Writing techs to local storage
  useEffect(() => {
    localStorage.setItem("techs", JSON.stringify(techs));
  }, [ techs ]);

  // Hook useMemo: used to call a function when some variable changes
  const techSize = useMemo(() => techs.length, [techs]);

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
        <strong>You've added {techSize} techs!</strong>
        <br />
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
