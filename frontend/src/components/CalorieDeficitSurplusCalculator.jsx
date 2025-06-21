import React, { useState } from "react";
import { toast } from "react-toastify";

const CalorieDeficitSurplusCalculator = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [goal, setGoal] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fats, setFats] = useState("");

  const calculateCalories = (e) => {
    e.preventDefault();

    if (!age || !gender || !height || !weight || !activityLevel || !goal) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Calculate BMR (Basal Metabolic Rate) using Mifflin-St Jeor Equation
    let bmr;
    if (gender === "Male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Adjust for activity level
    let activityMultiplier;
    switch (activityLevel) {
      case "Sedentary":
        activityMultiplier = 1.2;
        break;
      case "Lightly Active":
        activityMultiplier = 1.375;
        break;
      case "Moderately Active":
        activityMultiplier = 1.55;
        break;
      case "Very Active":
        activityMultiplier = 1.725;
        break;
      case "Extremely Active":
        activityMultiplier = 1.9;
        break;
      default:
        activityMultiplier = 1.2;
    }

    const tdee = bmr * activityMultiplier; // Total Daily Energy Expenditure

    // Adjust calories based on goal
    let adjustedCalories;
    switch (goal) {
      case "Weight Loss":
        adjustedCalories = tdee - 500; // 500 calorie deficit
        break;
      case "Maintenance":
        adjustedCalories = tdee;
        break;
      case "Muscle Gain":
        default:
        adjustedCalories = tdee + 300; // 300 calorie surplus
    }

    setCalories(Math.round(adjustedCalories));

    // Calculate macronutrients (protein: 30%, carbs: 40%, fats: 30%)
    const proteinGrams = Math.round((adjustedCalories * 0.3) / 4);
    const carbsGrams = Math.round((adjustedCalories * 0.4) / 4);
    const fatsGrams = Math.round((adjustedCalories * 0.3) / 9);

    setProtein(proteinGrams);
    setCarbs(carbsGrams);
    setFats(fatsGrams);

    toast.success("Calories calculated successfully!");
  };

  return (
    <section className="calorie-calculator">
      <h1>CALORIE DEFICIT & SURPLUS CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateCalories}>
            <div>
              <label>Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label>Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Activity Level</label>
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                required
              >
                <option value="">Select Activity Level</option>
                <option value="Sedentary">Sedentary (little/no exercise)</option>
                <option value="Lightly Active">Lightly Active (light exercise 1-3 days/week)</option>
                <option value="Moderately Active">Moderately Active (moderate exercise 3-5 days/week)</option>
                <option value="Very Active">Very Active (hard exercise 6-7 days/week)</option>
                <option value="Extremely Active">Extremely Active (very hard exercise & physical job)</option>
              </select>
            </div>
            <div>
              <label>Goal</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                required
              >
                <option value="">Select Goal</option>
                <option value="Weight Loss">Weight Loss (Deficit)</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Muscle Gain">Muscle Gain (Surplus)</option>
              </select>
            </div>
            <button type="submit">Calculate Calories</button>
          </form>
        </div>
        <div className="wrapper">
          {calories && (
            <div className="results">
              <h2>Your Daily Caloric Needs</h2>
              <p><strong>Calories:</strong> {calories} kcal</p>
              <h3>Macronutrient Breakdown</h3>
              <p><strong>Protein:</strong> {protein}g (30%)</p>
              <p><strong>Carbs:</strong> {carbs}g (40%)</p>
              <p><strong>Fats:</strong> {fats}g (30%)</p>
              <p className="tip">
                {goal === "Weight Loss"
                  ? "Aim for a 500-calorie deficit per day for healthy weight loss (~0.5kg/week)."
                  : goal === "Muscle Gain"
                  ? "Aim for a 300-calorie surplus per day for lean muscle gain."
                  : "Maintain your current weight by balancing calories in vs. out."}
              </p>
            </div>
          )}
           
        </div>
      </div>
    </section>
  );
};

export default CalorieDeficitSurplusCalculator;