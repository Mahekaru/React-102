import React, { useState } from 'react'

const Solution = () => {
      const [cart, setCart] = useState({
        discount: 0.1,
        items: [
          { id: 1, title: "Product 1", quantity: 1, price: 100 },
          { id: 2, title: "Product 2", quantity: 1, price: 200 },
        ],
      });
      
      
  const handleClick = () => {
    setCart({
      ...cart,
      items: [...cart.items.slice(0, 1), { ...cart.items[1], quantity: 5 }],
    });
    setCart({
      ...cart,
      items: cart.items.map((items) =>
        items.id === 2 ? { ...items, quantity: 5 } : items
      ),
    });
  };
  
  return <button onClick={handleClick}>Click</button>;
}

export default Solution