import { useState } from "react";
import "./card.css";
export const Card = () => {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  return (
    <div className="card">
      <div className="form">
        <form action="">
          <div className="inputs">
            <div className="input-holder">
              <label>Day</label>
              <input type="text" placeholder="DD" name="day" />
            </div>
            <div className="input-holder">
              <label>Month</label>
              <input type="text" placeholder="MM" name="month" />
            </div>
            <div className="input-holder">
              <label>Year</label>
              <input type="text" placeholder="YYYY" name="year" />
            </div>
          </div>
          <div className="divider-btn">
            <div className="divider"></div>
            <button type="submit"></button>
          </div>
        </form>
      </div>
      <div className="age">
        <div className="result">
          <div className="number">{years === 0 ? "--" : years}</div>
          <div className="text">years</div>
        </div>
        <div className="result">
          <div className="number">{months === 0 ? "--" : months}</div>
          <div className="text">months</div>
        </div>
        <div className="result">
          <div className="number">{days === 0 ? "--" : days}</div>
          <div className="text">days</div>
        </div>
      </div>
    </div>
  );
};
