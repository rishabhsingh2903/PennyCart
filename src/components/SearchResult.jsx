export default function SearchResult({ list }) {
    if (list.length === 0) {
      return null;
    }
    return (
      <>
        <h1>List of Items</h1>
        <ul>
        {list
    .filter((result, index, self) => self.findIndex(item => item.food.label === result.food.label) === index)
    .map((result, index) => (
      <div key={result.uri} className="col-md-4 mb-3">
        <div className="card bg-light">
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img src={result.food.image} className="img-fluid" alt="Food" /> {/* Replace imageURL with the actual image URL */}
              </div>
              <div className="col-md-8">
                {result.food.label}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  }
        </ul>
      </>
    );
  }