import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Form({onsubmit}){
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [gender,setGender]=useState('');
    const [height,setHeight]=useState('');
    const [weight,setWeight]=useState('');
    const [activity,setActivity]=useState('');
    const [budget,setBudget]=useState('');                        
    const navigate=useNavigate();
    function formsubmit(e){
        e.preventDefault();

        onsubmit(name,age,gender,height,weight,activity,budget);
        navigate('/info')

    }
    function getinfo(e){
        setActivity(e.target.textContent);
    }
    return (<>
        <h1 className="d-flex justify-content-center align-items-center">Form</h1>
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form  className="col-md-6" onSubmit={formsubmit}>



                <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                    Name
                </label>
                <input

                    onChange={e=>setName(e.target.value)}
                    type="text"
                    className="form-control form-control-sm"
                    id="Name"
                    placeholder="Example: Rishabh Singh"
                    required
                />
                </div>



                <div className="mb-3">
                <label htmlFor="Age" className="form-label">
                    Age
                </label>
                <input
                    type="number"
                    className="form-control form-control-sm"
                    id="Age"
                    onChange={e=>setAge(e.target.value)}
                    placeholder="<=80"
                    required
                />
                </div>

                <label className="form-label">Gender</label>
                <div className="form-check">
                    
                    <input className="form-check-input" 
                    type="radio"
                    value="male"
                
                    onChange={e=>setGender(e.target.value)}
                    name="flexRadioDefault" 
                    id="flexRadioDefault1"
                     />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Male
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" 
                    type="radio" 
                    value="female"
                
                    onChange={e=>setGender(e.target.value)}
                    name="flexRadioDefault" 
                    id="flexRadioDefault2" 
                     />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Female
                    </label>
                </div>



                <div className="mb-3">
                <label htmlFor="Height" className="form-label">
                    Height
                </label>
                <input
                    type="number"
                    className="form-control form-control-sm"
                    id="Height"
                    onChange={e=>setHeight(e.target.value)}
                    placeholder=">=130 and <=230 in cm"
                />

                
                </div>



                <div className="mb-3">
                <label htmlFor="Weight" className="form-label">
                    Weight
                </label>
                <input
                    type="number"
                    className="form-control form-control-sm"
                    id="Weight"
                    onChange={e=>setWeight(e.target.value)}
                   placeholder=">=40 and <=160 in kg"
                />
                </div>



                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    data-bs-toggle="dropdown" >
                        Activity Level
                    </button>
                    <ul className="dropdown-menu">
                        <li className="dropdown-item" onClick={getinfo}>Sedentary: little or no exercise</li>
                        <li className="dropdown-item"onClick={getinfo}>Exercise 1-3 times/week</li>
                        <li className="dropdown-item"onClick={getinfo}>Exercise 4-5 times/week</li>
                        <li className="dropdown-item"onClick={getinfo}>Daily exercise or intense exercise 3-4 times/week</li>
                        <li className="dropdown-item"onClick={getinfo}>Intense exercise 6-7 times/week</li>
                        <li className="dropdown-item"onClick={getinfo}>Very intense exercise daily, or physical job</li>

                    </ul>
                </div>
                <br/>



                <div className="mb-3">
                <label htmlFor="Budget" className="form-label">
                    Weekly Budget
                </label>
                <input
                    type="number"
                    className="form-control form-control-sm"
                    id="Weight"
                    onChange={e=>setBudget(e.target.value)}
                   
                />
                </div>


                <br/>
                <button type="submit" className="btn btn-primary">
                Submit
                </button>
            </form>
        </div>
    </>)
}