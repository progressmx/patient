import React, { useState } from "react";

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [targetTime, setTargetTime] = useState(new Date(2023, 8, 13, 12, 0, 0));

  const remainingHours = () => {
    const now = new Date();
    const then = new Date(targetTime);
    return Math.floor((Number(then) - Number(now)) / (60*1000));
  };

  return (
    <div>
      <h1>Remaining Hours</h1>
      <p>
        The number of remaining hours until the event is: {remainingHours()}
      </p>
      <input
        type="datetime-local"
        onChange={(e) => setCurrentDate(new Date(e.target.value))}
      />
      <input
        type="datetime-local"
        onChange={(e) => setTargetTime(new Date(e.target.value))}
      />
    </div>
  );
};

export default App;