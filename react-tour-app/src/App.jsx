import { useState } from 'react';

function App() {
  const [isOn, setIsOn] = useState(true);
  const [tours, setTours] = useState([]);

  // funct no args
  const handleClick = () => {
    const newIsOn = !isOn;
    setIsOn(newIsOn);
  };

  // funct co args
  const handleClickArgs = isClicked => {
    setIsOn(isClicked);
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-2">
      <button onClick={handleClick} className="bg-amber-300 px-4">
        {isOn ? 'Bat' : 'Tat'}
      </button>
      <button
        onClick={() => handleClickArgs(!isOn)}
        className="bg-amber-300 px-4"
      >
        {isOn ? 'Bat' : 'Tat'}
      </button>
    </div>
  );
}

export default App;
