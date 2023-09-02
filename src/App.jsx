import {Routes,Route }from "react-router-dom"
import Welcome from "./pages/Welcome"
import Cart from "./pages/Cart"
import Info from "./pages/Info"
import Navi from "./Navi"
import Form from "./pages/Form"
import Dashboard from "./pages/Dashboard"
import { useEffect, useState } from "react"
export default function App(){
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
            }
        return JSON.parse(localdata) 

    });


    useEffect(()=>{
        const dataJSON = JSON.stringify(data);
        localStorage.setItem('DATA', dataJSON);
    },[data]);

    function storeData(name,age,gender,height,weight,activity,budget){
        const activityLevelMap = {
            'Sedentary: little or no exercise': 'level _ 1',
            'Exercise 1-3 times/week': 'level _ 2',
            'Exercise 4-5 times/week': 'level _ 3',
            'Daily exercise or intense exercise 3-4 times/week': 'level _ 4',
            'Intense exercise 6-7 times/week': 'level _ 5',
            'Very intense exercise daily, or physical job': 'level _ 6',
          };
          const activitylvl=activityLevelMap[activity]
        const newData={
            Name:name,
            Age:age,
            Gender:gender,
            Height:height,
            Weight:weight,
            Activity:activitylvl,
            Budget:budget,
        };
        setData(newData);
    }
    return (<>
        <Navi />
        

        <Routes>
            <Route path="/" element={<Welcome />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/info'>
                <Route index element={<Info data={data}/>}/>
                <Route path="form" element={<Form onsubmit={storeData}/>}/>
            </Route>
            <Route path='/dashBoard' element={<Dashboard />}/>
        </Routes>
    
    </>)
}