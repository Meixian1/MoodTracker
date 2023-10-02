import React, { useContext } from "react";
import { ComplimentsContext } from "../context/ComplimentsContext"; // Correct the relative path
import { CurrentMoodContext } from "../context/CurrentMoodContext"; // Correct the relative path

const ComplimentButton = () => {
  // Access the compliments state and setCurrentMood function from the context
  const { compliments, setCompliments } = useContext(ComplimentsContext);
  const { setCurrentMood } = useContext(CurrentMoodContext);

  // Function to handle the button click
  const handleComplimentClick = () => {
    // Increment compliments by 1
    setCompliments((prevCompliments) => prevCompliments + 1);

    // Determine the new currentMood based on compliments
    if (compliments < 5) {
      setCurrentMood("sad");
    } else if (compliments >= 5 && compliments <= 9) {
      setCurrentMood("fine");
    } else if (compliments >= 10 && compliments <= 15) {
      setCurrentMood("happy");
    }
  };

  return (
    <div>
      <button onClick={handleComplimentClick}>Give Compliment</button>
      <p>Compliments: {compliments}</p>
    </div>
  );
};

export default ComplimentButton;
