import { Link } from "react-router-dom"
export default function Info({data}){
    return (<>
    <br></br>

    <div className="d-flex justify-content-center mb-3">
          <Link to="/info/form" className="btn btn-primary">
            Edit/Add information
          </Link>
    </div>
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div >
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center">User Information</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Name:</strong> {data.Name}
                </li>
                <li className="list-group-item">
                  <strong>Age:</strong> {data.Age}
                </li>
                <li className="list-group-item">
                  <strong>Gender:</strong> {data.Gender}
                </li>
                <li className="list-group-item">
                  <strong>Height:</strong> {data.Height}
                </li>
                <li className="list-group-item">
                  <strong>Weight:</strong> {data.Weight}
                </li>
                <li className="list-group-item">
                  <strong>Activity Level:</strong> {data.Activity}
                </li>
                <li className="list-group-item">
                  <strong>Budget:</strong> {data.Budget}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>)
}