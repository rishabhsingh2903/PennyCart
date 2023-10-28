import React, { useEffect, useState } from 'react';

export default function Meter({ picked }) {
  const [totalCalorieIntake, setTotalCalorieIntake] = useState(0);
  const [dailyCalorieRequirement, setDailyCalorieRequirement] = useState(0);

  useEffect(() => {
    // Load data from local storage
    const localData = localStorage.getItem('DATA');
    if (localData !== null) {
      const data = JSON.parse(localData);
      setDailyCalorieRequirement(data.CalorieReq);
    }
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  useEffect(() => {
    if (picked === null) {
      return;
    }

    let newCalorie = 0;
    picked.forEach((element) => {
      newCalorie = newCalorie + parseFloat(element.food.nutrients.ENERC_KCAL.toFixed(2));
    });
    setTotalCalorieIntake(newCalorie);
  }, [picked]);


 //calculate percentage
  const caloriePercentage = (totalCalorieIntake / dailyCalorieRequirement) * 100;

  // Determine the color of the score based on the calorie percentage
  let scoreColor;
  if (caloriePercentage >100) {
    scoreColor = 'red';
  } else if (caloriePercentage >=90) {
    scoreColor = 'green';
  } else {
    scoreColor = 'orange';
  }


  return (
    <>
      <h1 style={{ color: scoreColor }}>
        {totalCalorieIntake.toFixed(2)}/{dailyCalorieRequirement.toFixed(2)}
      </h1>
    </>
  );
}
