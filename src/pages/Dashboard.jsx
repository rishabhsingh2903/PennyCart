import axios from 'axios';
export default function Dashboard(){
    async function fetchData() {
        try {
          const localData = localStorage.getItem('DATA');
          const data = JSON.parse(localData);
            
          const options = {
            method: 'GET',
            url: 'https://fitness-calculator.p.rapidapi.com/dailycalorie',
            params: {
              age: data.Age.toString(),
              gender: data.Gender,
              height: data.Height.toString(),
              weight: data.Weight.toString(),
              activitylevel: data.Activity
            },
            headers: {
              'X-RapidAPI-Key': '0388d9f15fmsh33b0ddd34789c84p10f183jsn1607fc021a74',
              'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
            }
          };
      
          const response = await axios.request(options);
          const d=response.data;
          console.log(d.data);
        } catch (error) {
          console.error(error);
        }
      }
      
      fetchData()
    return (<>
            <h1>Dashboard</h1>
        </>)
}