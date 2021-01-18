import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { category, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>Tech Challenge</h2>
          <div className="form-control">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={category}
              onChange={handleChange}
            >
              <option value="JavaScript">JavaScript</option>
              <option value="ReactJS">ReactJS</option>
              <option value="Java">Java</option>
              <option value="SpringBoot">SpringBoot</option>
            </select>
          </div>

          {error && (
            <p className="error">
              can't generate questions, please try different options
            </p>
          )}
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
