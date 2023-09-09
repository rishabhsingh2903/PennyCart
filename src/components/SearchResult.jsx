export default function SearchResult({ list }) {
    if (list.length === 0) {
      return null;
    }
    return (
      <>
        <h1>List of Items</h1>
        <ul>
          {list.map((result, index) => (
            <li key={index}>{result.food.label}</li>
          ))}
        </ul>
      </>
    );
  }