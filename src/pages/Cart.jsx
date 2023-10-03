import axios from 'axios';
import { useEffect, useState } from 'react';
import Search from "../components/Search";
import SearchResult from '../components/SearchResult';
import SelectedItem from './Selecteditem';
export default function Cart(){
    const [picked,setPicked]=useState([]);
    const [food,setFood]=useState('');
    const [list,setList]=useState([]);
    function fetchFood(item){
        setFood(item);
    }

    // function foodSelected(){
    //     this 
    // }
    function picker(id) {
        setPicked(prevPicked => {
            const selectedObject = list[id];
            return [...prevPicked, selectedObject];
        });
        console.log(picked);
    }
    
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
            // console.log(response.data);
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
        <div className="col-md-4"style={customborder}>
          {/* right-hand side content */}
          <h3>selected item</h3>
          <SelectedItem pickedItem={picked}/>
        </div>
      </div>
    </div>
        </>)
}