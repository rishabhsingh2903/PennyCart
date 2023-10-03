export default function SearchResult({ list,picker }) {
    if (list.length === 0) {
      return null;
    }
    // console.log(list);

    return (
      <>
        <h1>List of Items</h1>
        <ul>
        {list
    .filter((result, index, self) => self.findIndex(item => item.food.label === result.food.label) === index)
    .map((result, index) => (
      <div key={index} className="col-md-4 mb-3">
        <div className="card bg-light">
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img src={result.food.image} className="img-fluid" alt="Food" />
              </div>
              <div className="col-md-8">
                {result.food.label}
              </div>
            </div>
            <div className="row">
              <button onClick={() => picker(index)}>Add To Cart</button>
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