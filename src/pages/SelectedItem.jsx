export default function SelectedItem({pickedItem,setpicked}){
    function deleteItem(targetindex){
        const newpickedItem=pickedItem.filter((item,index)=>index!=targetindex)
        setpicked(newpickedItem)
        const pickedJSON=JSON.stringify(pickedItem);
        localStorage.setItem("pick",pickedJSON)
    }
    if (!Array.isArray(pickedItem)) {
        return <div>No selected items</div>; // or handle the case where pickedItem is not an array
    }
    return (<>
            {pickedItem.map((item, index) => (
            <div key={index} className="card bg-light" style={{ height: '200px', width: '300px' }}>
                <div className="card-body">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img src={item.food.image} style={{ height: '100px', width: '100px' }} className="card-img-top" alt="..." />
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <div style={{ textAlign: 'center', fontSize: '12px', fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.food.label}</div>
                    </div>
                </div>
                <div className="row" style={{fontSize: '12px', fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    calories:{item.food.nutrients.ENERC_KCAL.toFixed(2)}kcal
                </div>
                <div className="row">
                    <button onClick={()=>deleteItem(index)} style={{ backgroundColor: 'red', color: 'white' }}>Delete Item</button>
                </div>
                </div>
            </div>
           
            ))}
    </>)
}