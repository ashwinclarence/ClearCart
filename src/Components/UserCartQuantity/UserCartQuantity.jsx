import { useContext, useState } from 'react'
import './UserCartQuantity.css'
import PropTypes from 'prop-types'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../Firebase/config'
import { AuthContext } from '../../Store/FirebaseContext'
function UserCartQuantity({productsID,cartProductsList}) {
    const { CurrentUserID } = useContext(AuthContext)
    const [quantity,setQuantity]=useState(1)


    // function to remove cart items and update the Cart with remaining items
    const RemoveFromCart=async()=>{
        let index = cartProductsList.findIndex(cart => cart.ProductID === productsID);
        console.log(index);
        cartProductsList.splice(index,1)
        console.log(cartProductsList);
        const deleteDocRef = doc(db, "User", CurrentUserID);
        await updateDoc(deleteDocRef,{
            Cart:cartProductsList
        })
        location.reload()
    }
    UserCartQuantity.propTypes = {
        productsID: PropTypes.string.isRequired,
        cartProductsList: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                // Add any other required properties of cartDetails here
            })
        ).isRequired,
    };
    return (
        <div className="cart-item-action">
            <label htmlFor="Quantity">Quantity</label>
            <select name="Quantity" id="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <button id='delete-item' onClick={RemoveFromCart}>Remove from cart <i className="fa-solid fa-trash-can"></i></button>
        </div>
    )
}

export default UserCartQuantity
