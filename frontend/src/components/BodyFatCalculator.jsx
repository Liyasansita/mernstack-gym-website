import React, { useState } from "react";
import { toast } from "react-toastify";

const BodyFatCalculator = () => {
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [neck, setNeck] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [bodyFatPercentage, setBodyFatPercentage] = useState("");

  const calculateBodyFat = (e) => {
    e.preventDefault();

    if (!gender || !height || !neck || !waist || (gender === "Female" && !hip)) {
      toast.error("Please fill all required fields");
      return;
    }

    let bodyFatValue;
    if (gender === "Male") {
      bodyFatValue = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
    } else {
      bodyFatValue = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
    }

    setBodyFatPercentage(bodyFatValue.toFixed(2));

    // Interpretation based on American Council on Exercise standards
    if (gender === "Male") {
      if (bodyFatValue < 6) {
        toast.warning("Dangerously low body fat (Essential fat: 2-5%)");
      } else if (bodyFatValue < 14) {
        toast.success("Athletic range (6-13%) - Excellent condition");
      } else if (bodyFatValue < 18) {
        toast.info("Fitness range (14-17%) - Good shape");
      } else if (bodyFatValue < 25) {
        toast.warning("Average range (18-24%) - Could improve");
      } else {
        toast.error("Obese range (25%+) - Health risk");
      }
    } else {
      if (bodyFatValue < 14) {
        toast.warning("Dangerously low body fat (Essential fat: 10-13%)");
      } else if (bodyFatValue < 21) {
        toast.success("Athletic range (14-20%) - Excellent condition");
      } else if (bodyFatValue < 25) {
        toast.info("Fitness range (21-24%) - Good shape");
      } else if (bodyFatValue < 32) {
        toast.warning("Average range (25-31%) - Could improve");
      } else {
        toast.error("Obese range (32%+) - Health risk");
      }
    }
  };

  return (
    <section className="bodyfat">
      <h1>BODY FAT PERCENTAGE CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBodyFat}>
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
              <label>Neck circumference (cm)</label>
              <input
                type="number"
                value={neck}
                onChange={(e) => setNeck(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Waist circumference (cm)</label>
              <input
                type="number"
                value={waist}
                onChange={(e) => setWaist(e.target.value)}
                required
              />
            </div>
            {gender === "Female" && (
              <div>
                <label>Hip circumference (cm)</label>
                <input
                  type="number"
                  value={hip}
                  onChange={(e) => setHip(e.target.value)}
                  required={gender === "Female"}
                />
              </div>
            )}
            <button type="submit">Calculate Body Fat %</button>
          </form>
        </div>
        <div className="wrapper">
          {bodyFatPercentage && (
            <div className="result">
              <h2>Your Body Fat Percentage: {bodyFatPercentage}%</h2>
              <p>
                <strong>Interpretation:</strong>
                <br />
                {gender === "Male" ? (
                  <>
                    Essential fat: 2-5%<br />
                    Athletes: 6-13%<br />
                    Fitness: 14-17%<br />
                    Average: 18-24%<br />
                    Obese: 25%+
                  </>
                ) : (
                  <>
                    Essential fat: 10-13%<br />
                    Athletes: 14-20%<br />
                    Fitness: 21-24%<br />
                    Average: 25-31%<br />
                    Obese: 32%+
                  </>
                )}
              </p>
            </div>
          )}
          {!bodyFatPercentage && <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" alt="body fat chart" />}
        </div>
      </div>
    </section>
  );
};

export default BodyFatCalculator;