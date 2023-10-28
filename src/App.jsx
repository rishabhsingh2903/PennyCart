import {Routes,Route }from "react-router-dom"
import Welcome from "./pages/Welcome"
import Cart from "./pages/Cart"
import Info from "./pages/Info"
import Navi from "./Navi"
import Form from "./pages/Form"
import Dashboard from "./pages/Dashboard"
import { useEffect, useState } from "react"
import axios from 'axios';
export default function App(){
    const [bmr,setBmr]=useState('')
    const [data,setData]=useState(()=>{
        const localdata=localStorage.getItem("DATA")
        if (localdata==null)
            return {
                Name: '',
                Age: 0,
                Gender: '',
                Height: '',
                Weight: 0,
                Activity: '',
                Budget: 0,
                CalorieReq:0
            }
        return JSON.parse(localdata) 

    });


    useEffect(()=>{
        const dataJSON = JSON.stringify(data);
        localStorage.setItem('DATA', dataJSON);
    },[data]);


    async function fetchData(age,gender,height,weight,activity) {            
        const options = {
          method: 'GET',
          url: 'https://fitness-calculator.p.rapidapi.com/dailycalorie',
          params: {
            age: age.toString(),
            gender: gender,
            height: height.toString(),
            weight: weight.toString(),
            activitylevel: activity
            },
          headers: {
              'X-RapidAPI-Key': '0388d9f15fmsh33b0ddd34789c84p10f183jsn1607fc021a74',
              'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
            }
          };
      
          const response = await axios.request(options);
          const d=response.data;
          setBmr(d.data.BMR)
      }

    function storeData(name,age,gender,height,weight,activity,budget){
        const activityLevelMap = {
            'Sedentary: little or no exercise': 'level_1',
            'Exercise 1-3 times/week': 'level_2',
            'Exercise 4-5 times/week': 'level_3',
            'Daily exercise or intense exercise 3-4 times/week': 'level_4',
            'Intense exercise 6-7 times/week': 'level _ 5',
            'Very intense exercise daily, or physical job': 'level_6',
          };
        const activitylvl=activityLevelMap[activity]
        fetchData(age,gender,height,weight,activitylvl)
        //   console.log(clr)
        const newData={
            Name:name,
            Age:age,
            Gender:gender,
            Height:height,
            Weight:weight,
            Activity:activitylvl,
            Budget:budget,
            CalorieReq:bmr
        };
        setData(newData);
        console.log(bmr)
    }
    return (<>
        <Navi />
        

        <Routes>
            <Route path="/Penny-Cart/" element={<Welcome />}/>
            <Route path='/Penny-Cart/cart' element={<Cart />}/>
            <Route path='/Penny-Cart/info'>
                <Route index element={<Info data={data}/>}/>
                <Route path="form" element={<Form onsubmit={storeData}/>}/>
            </Route>
            <Route path='/Penny-Cart/dashBoard' element={<Dashboard />}/>
        </Routes>
    
    </>)
}