import { useState } from "react";
export default function Search({fetchFood}){
    const [searchItem,setSearchItem]=useState('');

    function handleSearch(){
        fetchFood(searchItem);
    }
    return (<>
    <div className="container">
      <div className="search-container text-center col-md-6">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            // value={searchTerm}
            onChange={e => setSearchItem(e.target.value)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
        
    </>)
}