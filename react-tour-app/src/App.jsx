import { useState } from 'react';

function App() {
  const [isOn, setIsOn] = useState(true);
  const [tours, setTours] = useState([]);

  const handleClick = () => {
    const newIsOn = !isOn;
    console.log(newIsOn);
    setIsOn(newIsOn);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <button onClick={handleClick} className="bg-amber-300 px-4">
        {isOn ? 'Bat' : 'Tat'}
      </button>
    </div>
  );
}

export default App;
