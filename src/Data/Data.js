import axios from "axios";
import React from "react";
const DataObj = {
    postData: async (formData) => {
        let result;
        try {
            
            const requestResult = await axios.post('https://reqres.in/api/users', {
                formData
            });

            let {
                data,
                status
            } = requestResult;

            if (status == 200 || status == 201) {
                console.log('data: ', data);
                result = true;
            }

        } catch (error) {
            console.log("error: ", error);
            result = false;
        }

        return result;
    },
    getToppingList: ["pepperoni","ham","pineapples","sausage","salami","bacon","chicken","onion sauce","chili","pepperonis","sausages","anchovies","mozzerella","sun dried tomatos","tomato basil","olives","tomatoe","eggplant","pesto","oregano","zuccini","alfredo sauce","alfredo","white sauce","parmesean","butter","canadian bacon strips","grilled chicken","italian sausage","green peppers","bbq sauce","parmesan cheese","pizza sauce","jalapeno peppers","jalapeño","hot pepper","chili pepper","meatballs","mushrooms","pesto sauce"],

    getSauceList: ["Tomato Sauce","Barbecue Sauce","Soy Sauce","Hollandaise Sauce","Alfredo Sauce","Pesto Sauce","Teriyaki Sauce","Hoisin Sauce","Tartar Sauce","Sweet Chili Sauce"],
}

export default DataObj;