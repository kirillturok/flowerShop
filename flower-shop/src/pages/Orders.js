const Orders = ({ orders }) => {
    return (
      <div className="orders">
        <h1>Your Orders</h1>
        {orders.map(order => (
          <div key={order.id} className="order">
            <h3>Order #{order.id}</h3>
            <p>{order.date}</p>
            <p>Total: ${order.total}</p>
          </div>
        ))}
      </div>
    );
  };
  export default Orders;
  