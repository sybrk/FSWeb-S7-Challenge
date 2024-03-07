import React, { useState } from "react";
import DataObj from "../Data/Data";
import "../components/Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    size: "",
    toppings: [],
    sauce: "",
    substitute: false,
    specialInstructions: "",
  });

  const onChange = (e) => {
    
    if (e.target.type === "checkbox") {
      if (e.target.name === "toppings") {
        let toppings = [...formData.toppings];
        if (e.target.checked) {
          toppings.push(e.target.id);
        } else {
          toppings.splice(toppings.indexOf(e.target.id), 1);
        }
        setFormData({
          ...formData,
          toppings,
        });
      } else if (e.target.name === "substitute1") {
        setFormData({
          ...formData,
          substitute: e.target.checked,
        });
      }
    } else if (e.target.type === "radio") {
      if (e.target.name === "sauce") {
        let sauce = [...formData.sauce];
        if (e.target.value) {
          sauce.push(e.target.value);
        } else {
          sauce.splice(sauce.indexOf(e.target.value), 1);
        }
        setFormData({
          ...formData,
          sauce,
        });
      }
    } else if(e.target.type === "select-one"){
		if(e.target.name =="size"){
			console.log(e.target.selectedOptions[0].value);
			setFormData({
				...formData,
				size: e.target.selectedOptions[0].value
			});
		}
		
	} else if(e.target.type === "text"){
		if(e.target.name =="instruction"){
			console.log(e.target.value);
			setFormData({
				...formData,
				specialInstructions: e.target.value
			});
		}
	}
    console.log(formData);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let orderSuccess = DataObj.postData(formData);
    if (orderSuccess) {
      window.location.href = `/confirmation?size=${formData.size}`;
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className={"size-select"}>
          <h2>Choose Size</h2>
          <label htmlFor={"size"}>
            Pizza Size
            <select name="size" id="pizza-size" onChange={onChange}>
              <option value=""></option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="x-large">X-Large</option>
            </select>
          </label>
        </div>
        <div className="pizza-sos">
          <h2>Choose Sauce</h2>
          {DataObj.getSauceList.map((item, itx) => (
            <div key={itx}>
              <label htmlFor={"sauce"}>
                {item}
                <input
                  type="radio"
                  name="sauce"
                  value={item}
                  onChange={onChange}
                />
              </label>
            </div>
          ))}
        </div>
        <div className="pizza-toppings">
          <h2>Choose Toppings</h2>
          {DataObj.getToppingList.map((item, itx) => (
            <div key={itx}>
              <label htmlFor={item}>
                {item}
                <input
                  type="checkbox"
                  name="toppings"
                  id={item}
                  onChange={onChange}
                />
              </label>
            </div>
          ))}
        </div>
        <div className="pizza-substitutes">
          <h2>Choose substitute</h2>
          <label htmlFor="substitute1">
            Alternative Option
            <input type="checkbox" name="substitute1" onChange={onChange} />
          </label>
        </div>
        <div className="pizza-notes">
          <h2>Special Instructions</h2>
          <label htmlFor="instruction">
            Special Note
            <input type="text" name="instruction" onChange={onChange} />
          </label>
        </div>
        <button type="submit">Order</button>
      </form>
    </>
  );
};

export default Form;
