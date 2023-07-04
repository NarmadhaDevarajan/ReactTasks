import React from "react";

const Cart = ({ cartItems, removeItem }) => {
  const totalItem = cartItems.length;
  const sumTotalItems =
    totalItem === 0
      ? "0"
      : cartItems
          .map((items) => parseFloat(items.productPrice))
          .reduce((a, b) => a + b);
  const shipping = totalItem === 0 ? "0" : 20.0;
  return (
    <div>
                    {cartItems.map((cartItem) => {
                      return (
                        <CartItem
                          key={cartItem.id}
                          cartItem={cartItem}
                          removeItem={removeItem}
                        />
                      );
                    })}
                  
            
            
    </div>
  );
};

function CartItem({ cartItem, removeItem }) {
  return (
    <li className="list-group-item gy-5">
      <div className="row">
        <div className="col-sm-9">
          <h3 className="card-text">{cartItem.productName}</h3>

          <button
            onClick={() => removeItem(cartItem.id)}
            className="btn btn-primary"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default Cart;