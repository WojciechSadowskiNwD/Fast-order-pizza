import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuantity, increateItemQuantity } from "./cartSlice"

function UpdateItemQuantity({pizzaId, currentQuantity}) {
    const dispatch = useDispatch();
    
    return (
        <div className="flex gap-2 items-center md:gap-3">
            <Button type="round" onClick={()=>dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
            <p className="text-sm font-medium">{currentQuantity}</p>
            <Button type="round" onClick={()=>dispatch(increateItemQuantity(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity
 