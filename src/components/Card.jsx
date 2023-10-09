import { useState } from "react";
import "./card.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  day: yup.number().required("This field is required").min(1).max(31),
  month: yup.number().required("This field is required"),
  year: yup.number().required("This field is required"),
});

export const Card = () => {
  const [year, setYears] = useState(0);
  const [month, setMonths] = useState(0);
  const [day, setDays] = useState(0);

  const onSubmit = (data) => {
    alert(data.day + "/" + data.month + "/" + data.year);
  };

  return (
    <div className="card">
      <div className="form">
        <form onSubmit={onSubmit}>
          <div className="inputs">
            <div className="input-holder">
              <label>Day</label>
              <input
                type="number"
                min={1}
                max={31}
                name="day"
                placeholder="DD"
              />
            </div>
            <div className="input-holder">
              <label>Month</label>
              <input
                type="number"
                min={1}
                max={12}
                name="month"
                placeholder="MM"
              />
            </div>
            <div className="input-holder">
              <label>Year</label>
              <input
                type="number"
                min={1900}
                max={2022}
                name="year"
                placeholder="YYYY"
              />
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
          <div className="number">{year === 0 ? "--" : year}</div>
          <div className="text">years</div>
        </div>
        <div className="result">
          <div className="number">{month === 0 ? "--" : month}</div>
          <div className="text">months</div>
        </div>
        <div className="result">
          <div className="number">{day === 0 ? "--" : day}</div>
          <div className="text">days</div>
        </div>
      </div>
    </div>
  );
};
