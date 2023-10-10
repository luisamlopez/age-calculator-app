import { useState } from "react";
import "./card.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Field, Form, Formik, getIn } from "formik";

const schema = yup.object().shape({
  day: yup
    .number()
    .moreThan(0, "Please enter a valid day")
    .lessThan(32, "Please enter a valid day")
    .required("This field is required"),
  month: yup
    .number()
    .moreThan(0, "Please enter a valid month")
    .lessThan(13, "Please enter a valid month")
    .required("This field is required"),
  year: yup
    .number()
    .moreThan(1899, "The year must be greater than 1899")
    .lessThan(2024, "The year must be less than 2023")
    .required("This field is required"),
});

export const Card = () => {
  const [year, setYears] = useState(0);
  const [month, setMonths] = useState(0);
  const [day, setDays] = useState(0);

  const onSubmit = (values) => {
    let today = new Date();
    let birthDate = new Date(values.year, values.month - 1, values.day);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    let d = today.getDate() - birthDate.getDate();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
      m += 12;
    }
    if (d < 0) {
      m--;
      d += 30;
    }
    setYears(age);
    setMonths(m.toString().padStart(2, "0"));
    setDays(d.toString().padStart(2, "0"));
    // //reset form
    // values.day = "";
    // values.month = "";
    // values.year = "";
  };

  return (
    <div className="card">
      <div className="form">
        <Formik
          onSubmit={onSubmit}
          validationSchema={schema}
          initialValues={{
            day: "",
            month: "",
            year: "",
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="inputs">
                <div className="input-holder">
                  <label>Day</label>
                  <Field name="day">
                    {({ field, meta }) => (
                      <>
                        <input
                          className={touched && errors ? "invalid" : ""}
                          type="number"
                          min={1}
                          max={31}
                          name="day"
                          placeholder="DD"
                          {...field}
                        />
                        {meta.touched && meta.error ? (
                          <p className="error">{meta.error} </p>
                        ) : (
                          <p> </p>
                        )}
                      </>
                    )}
                  </Field>
                </div>
                <div className="input-holder">
                  <label>Month</label>
                  <Field name="month">
                    {({ field, meta }) => (
                      <>
                        <input
                          className={touched && errors ? "invalid" : ""}
                          type="number"
                          min={1}
                          max={12}
                          name="month"
                          placeholder="MM"
                          {...field}
                        />
                        {meta.touched && meta.error ? (
                          <p className="error">{meta.error} </p>
                        ) : (
                          <p> </p>
                        )}
                      </>
                    )}
                  </Field>
                </div>
                <div className="input-holder">
                  <label>Year</label>
                  <Field name="year">
                    {({ field, form: { touched, errors }, meta }) => (
                      <>
                        <input
                          className={touched && errors ? "invalid" : ""}
                          type="number"
                          min={1900}
                          max={2023}
                          name="year"
                          placeholder="YYYY"
                          {...field}
                        />
                        {meta.touched && meta.error ? (
                          <p className="error">{meta.error} </p>
                        ) : (
                          <p> </p>
                        )}
                      </>
                    )}
                  </Field>
                </div>
              </div>
              <div className="divider-btn">
                <div className="divider"></div>
                <button type="submit"></button>
              </div>
            </Form>
          )}
        </Formik>
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
