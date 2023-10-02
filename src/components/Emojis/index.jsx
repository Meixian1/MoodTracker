import React from "react";
import { useCompliments } from "../context/ComplimentsContext";
import { useCurrentMood } from "../context/CurrentMoodContext";


const Emojis = () => {
  // Access the currentMood value from the context
  const currentMood = useCurrentMood();

  // Determine which emoji to display based on the currentMood
  let emoji;
  switch (currentMood) {
    case "happy":
      emoji = "😃";
      break;
    case "neutral":
      emoji = "😐";
      break;
    case "sad":
      emoji = "😞";
      break;
    default:
      emoji = "Unknown Mood";
  }

  return (
    <div>
      <p>Current Mood: {emoji}</p>
    </div>
  );
};

export default Emojis;
