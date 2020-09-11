import React from 'react';
import './Orders.css';
import { db } from '../../config/firebase';
import { useStateValue } from '../../stateProvider/stateProvider';
import Order from './Order';

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        if (user) {
            db
                .collection('users')                        //accessing the users collection
                .doc(user?.uid)                             //get the specific user
                .collection('orders')                       //access that user orders
                .orderBy('created', 'desc')                 //inside collection order then base on date created in descending order
                .onSnapshot(snapshot => {                   //it goes through the orders
                    setOrders(snapshot.docs.map(doc => ({   //get the data
                        id: doc.id,
                        data: doc.data()
                    })));
                });
        } else {
            setOrders([]);
        }

    }, [user]);

    return (
        <div className="orders">
            <h1>Your orders</h1>

            <div className="orders__order">
                {orders?.map((order) => (<Order order={order} />))}
            </div>
        </div>
    );
}

export default Orders;
