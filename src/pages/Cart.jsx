import axios from 'axios';
import { useEffect, useState } from 'react';
import Search from "../components/Search";
import SearchResult from '../components/SearchResult';
import SelectedItem from './Selecteditem';
import Meter from '../components/Meter';
export default function Cart(){
    const [picked,setPicked]=useState(()=>{
        const localpicked=localStorage.getItem("pick")
        if (localpicked==null){
            return []
        }
        return JSON.parse(localpicked)
    });
    const [food,setFood]=useState('');
    const [list,setList]=useState([]);

    // function foodSelected(){
    //     this 
    // }
    function picker(id) {
        setPicked(prevPicked => {
            const previousPickedArray = Array.isArray(prevPicked) ? prevPicked : [];
            const selectedObject = list[id];
            return [...previousPickedArray, selectedObject];
        });
    }
    useEffect(() => {
        const pickedJSON=JSON.stringify(picked);
        localStorage.setItem("pick",pickedJSON)
        console.log(picked);
    }, [picked]);
    
    async function foodCart(){
        const options = {
        method: 'GET',
        url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser',
        params: {
            'nutrition-type': 'cooking',
            'ingr':food.toString(),
            // 'category[0]': 'generic-foods',
            // 'health[0]': 'alcohol-free'
        },
        headers: {
            'X-RapidAPI-Key': '0388d9f15fmsh33b0ddd34789c84p10f183jsn1607fc021a74',
            'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            setList(response.data.hints);
        } catch (error) {
            console.error(error);
        }
    }
    const customborder={
        border:'2px solid #000',
    };
    useEffect(()=>{
        if (food){
            foodCart();
        }
    },[food]);




    return (<>
    <div className="container">
      <h1>Cart</h1>
      <div className="row">
        <div className="col-md-8 " >
            <div className="row">
                <div className="col-md-12"style={customborder}>
                <Search fetchFood={setFood} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12"style={customborder}>
                    <SearchResult list={list} picker={picker}/>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className='row'>
                <div className='col-md-12'style={customborder}>
                    <h3>Daily Calorie Requirement(kcal)</h3>
                    <Meter picked={picked} />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'style={customborder}>
                    <h3>Each item Serving Size: 100gm</h3>
                    <SelectedItem pickedItem={picked} setpicked={setPicked}/>
                </div>
            </div>
        </div>
      </div>
    </div>
        </>)
}