export default function SelectedItem({pickedItem}){

    if (!Array.isArray(pickedItem)) {
        return <div>No selected items</div>; // or handle the case where pickedItem is not an array
    }
    return (<>
            <h2>Selected Items</h2>
            {pickedItem.map((item, index) => (
                <div key={index}>{item.food.label}</div>
            ))}
    </>)
}