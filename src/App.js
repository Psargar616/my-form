import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // const [FirstName, setFirstName] = useState("");
  // const [LastName, setLastName] = useState("");

  // function firstNameHandler(event){
  //   console.log("First Name");
  //   console.log(event.target.value);
  //   setFirstName(event.target.value)

  // }
  // function lastNameHandler(event){
  //   console.log("Last Name");
  //   console.log(event.target.value);
  //   setLastName(event.target.value);

  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: false,
    mode: "",
    favCar: "",
  });

  function changeHandler(event) {
   
    // destructuring
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {

      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
      
    });
    // console.log(formData);
  }

  function submitHandler(event){
    event.preventDefault();

    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Email..."
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
        <br />
        <br />
        <textarea
          placeholder="Enter comments here..."
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />
        <br />
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am I visible?</label>
        <br />
        <br />
        <fieldset>
          <legend>Mode:</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            id="online-mode"
            value="online-mode"
            checked={formData.mode === "online-mode"}
          />
          <label htmlFor="online-mode">Online mode</label>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            id="offline-mode"
            value="offline-mode"
            checked={formData.mode === "offline-mode"}
          />
          {/* very imp in radio btns => "checked= {formData.mode === "offline-mode"}" */}
          <label htmlFor="offline-mode">Offline mode</label>
        </fieldset>
        {/* dropdown */}
        <br />
        <br />
        <label htmlFor="favCar">Your favourite car </label>
        <select
          name="favCar"
          value={formData.favCar}
          id="favCar"
          onChange={changeHandler}
        >
          <option value="scarpio">Scarpio</option>
          <option value="fortuner">Fortuner</option>
          <option value="tharr">Tharr</option>
          <option value="defender">Defender</option>
          <option value="honda">Honda</option>
        </select>

        <br/><br/>
        {/* <input type="submit" value="submit" /> */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
