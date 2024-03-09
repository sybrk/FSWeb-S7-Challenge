import React, { useState } from "react";
import DataObj from "../Data/Data";
import styled from "styled-components";

const MyForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    gap: 10px;
    margin: 0 auto;
  `
const MyDivRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `
const MyDivCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  ${props => props.id === "sauce-container" && `
    height: 100px;
    flex-wrap: wrap;
    align-items: start;
  `};
  ${props => props.id === "toppings-container" && `
    height: 200px;
    flex-wrap: wrap;
    align-items: start;
  `};
`

const MyLabel = styled.label`
    font-size: 25px;
    font-weight: bold
  `
const MyInput = styled.input`
    height: 25px;
    border-radius: 5px;
    border: dashed;
  `
const MySelect = styled.select`
    height: 25px;
    border-radius: 5px;
    border: dashed;
  `
  const Button = styled.button`
  margin: 0 auto;
  border: solid black;
  border-radius: 10px;
  background-color: dimgray;
  font-size: large;
`
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
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
          if (toppings.length === 10) {
            window.alert("Max 10 items allowed")
            e.target.checked = false
          } else {
            toppings.push(e.target.id);
          }
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
        setFormData({
          ...formData,
          sauce: e.target.value,
        });
      }
    } else if (e.target.type === "select-one") {
      if (e.target.name == "size") {
        console.log(e.target.selectedOptions[0].value);
        setFormData({
          ...formData,
          size: e.target.selectedOptions[0].value
        });
      }

    } else if (e.target.type === "text") {
      if (e.target.name == "instruction") {
        console.log(e.target.value);
        setFormData({
          ...formData,
          specialInstructions: e.target.value
        });
      } else if (e.target.name == "name-input") {
        setFormData({
          ...formData,
          name: e.target.value
        });
      }
    }
    console.log(formData);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let orderSuccess = DataObj.postData(formData);
    if (orderSuccess) {
      window.location.href = `/confirmation?size=${formData.size}&name=${formData.name}&sauce=${formData.sauce}
      &toppings=${formData.toppings}&substitue=${formData.substitute}&notes=${formData.specialInstructions}`;
    }
  };


  return (
    <>
      <MyForm id="pizza-form" onSubmit={onSubmit}>
        <MyDivCol>
          <MyDivRow>
            <MyLabel htmlFor={"name-input"}>
              Your Name:
            </MyLabel>
            <MyInput id="name-input" name="name-input" type="text" onChange={onChange} required />
          </MyDivRow>
          <MyDivRow>

            <MyLabel htmlFor={"size"}>
              Pizza Size:
            </MyLabel>
            <MySelect name="size" id="pizza-size" onChange={onChange} required>
              <option value=""></option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="x-large">X-Large</option>
            </MySelect>

          </MyDivRow>
        </MyDivCol>
        <MyDivCol>
          <MyLabel >
            Choose Sauce:
          </MyLabel>
          <MyDivCol id="sauce-container">

            {DataObj.getSauceList.map((item, itx) => (
              <MyDivRow key={itx}>
                <input
                  type="radio"
                  name="sauce"
                  value={item}
                  onChange={onChange}
                  required
                />
                <label htmlFor={"sauce"}>
                  {item}
                </label>
              </MyDivRow>
            ))}
          </MyDivCol>
        </MyDivCol>

        <MyDivCol>
          <MyLabel >
            Choose Toppings:
          </MyLabel>
          <p>Number of Toppings: {formData.toppings.length}</p>
          <MyDivCol id="toppings-container">
              {DataObj.getToppingList.map((item, itx) => (
                <MyDivRow key={itx}>
                  
                    <input
                      type="checkbox"
                      name="toppings"
                      id={item}
                      onChange={onChange}
                    />
                    <label htmlFor={item}>
                    {item}
                  </label>
                </MyDivRow>
              ))}

          </MyDivCol>
        </MyDivCol>

        <MyDivCol>
          <MyLabel>
            Alternative Option
          </MyLabel>
          <MyDivRow>
            
            <input type="checkbox" name="substitute1" onChange={onChange} />
            <label htmlFor="substitute1">Gluten-free</label>
          </MyDivRow>
          
          
        </MyDivCol>
        <MyDivCol>
          <MyLabel>
              Special Note
            </MyLabel>
            <MyInput type="text" name="instruction" onChange={onChange} />
        </MyDivCol>
        <Button type="submit">Order</Button>
      </MyForm>
    </>
  );
};

export default Form;
