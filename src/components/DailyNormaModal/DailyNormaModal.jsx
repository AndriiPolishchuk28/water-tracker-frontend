import React, { useState } from 'react';


export const DailyNormaModal = ({ onClose, waterRate }) => {
  const [gender, setGender] = useState(null);
  const [weight, setWeight] = useState(0);
  const [activityTime, setActivityTime] = useState(0);
  const [waterIntake, setWaterIntake] = useState(0);
  const [dailyNorm, setDailyNorm] = useState(waterRate);

  const handleSubmit = (event) => {
    event.preventDefault();
    let waterIntakeValue = 0;
    if (gender === 'For girl') {
        waterIntakeValue = weight * 0.03 + activityTime * 0.4;
    } else if (gender === 'For man') {
        waterIntakeValue = weight * 0.04 + activityTime * 0.6;
    }
    const newWaterRate = waterIntakeValue;
    console.log("New water rate:", newWaterRate);
    onClose(newWaterRate);
};


  

  return (
    <div >
      <h4>My daily norma</h4>
<p>For girl:<span>V=(M*0,03) + (T*0,4)</span></p>
<p>For man:<span>V=(M*0,04) + (T*0,6)</span></p>
<p>* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)</p>
      <form onSubmit={handleSubmit}>
        <p>Calculate your rate:</p>
        <label>
          Gender:
          <input type="radio" value="For girl" checked={gender === 'For girl'} onChange={() => setGender('For girl')} />
          <p>For woman</p>
          <input type="radio" value="For man" checked={gender === 'For man'} onChange={() => setGender('For man')} />
          <p>For man</p>
        </label>
        <label>
          Weight:
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
        <label>
          Activity Time:
          <input type="number" value={activityTime} onChange={(e) => setActivityTime(e.target.value)} />
        </label>
        <p>The required amount of water in liters per day:</p><p>{waterIntake}</p>
        <label>
        Write down how much water you will drink:
          <input type="number" value={waterIntake} onChange={(e) => setWaterIntake(e.target.value)} />
        </label>
        <button type="submit" >Save</button>
      </form>
      {dailyNorm && <p>Daily Norm: {dailyNorm}</p>}
    </div>
  );
};
