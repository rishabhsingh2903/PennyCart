export default function Form(){
    function getinfo(e){
        console.log(e.target.textContent);
    }
    return (<>
        <h1 className="d-flex justify-content-center align-items-center">Form</h1>
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form className="col-md-6" >



                <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control form-control-sm"
                    id="Name"
                    placeholder="Example: Rishabh Singh"
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
                    
                />
                </div>

                <label className="form-label">Gender</label>
                <div className="form-check">
                    
                    <input className="form-check-input" 
                    type="radio"
                    value="male"
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
                    placeholder="In cm"
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
                   placeholder="In kg"
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