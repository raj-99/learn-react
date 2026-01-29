import { useCallback, useState } from "react"
import { useSearchParams } from "react-router-dom"

const ItemsList = () => {
    const [items, setItems] = useState([
        "Apple",
        "Banana",
        "Orange",
        "Mango",
        "Pineapple",
        "Grapes",
        "Strawberry",
        "Blueberry",
    ]);

    const removeItem = useCallback( (itemToRemove) => {
        setItems(items.filter(item => item !== itemToRemove));
    }, []);

    return (
        <div>
            {items.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ marginRight: '16px' }}>{item}</span> 
                    <button onClick={() => removeItem(item)}>Remove</button>
                    </div>
            ))}
        </div>
    )
}
export default ItemsList