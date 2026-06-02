import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from './store/uiSlice';

import Notification from './components/UI/Notification';
import { cartActions } from './store/cartSlice';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  const cart = useSelector(state => state.cart);

  const notificationStatus = useSelector(state => state.ui.notification);

  useEffect(() => {
      async function fetchCartData(){
      const fetchData = async() => {
        const response = await fetch("https://redux-store-57fd0-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json");

        if(!response.ok){
          throw new Error("Failed to fetch the data!!")
        }

        const data = await response.json();

        return data
      };

      try{
        const cartData = await fetchData();
        dispatch(
          cartActions.replaceCart({
            items: cartData?.items || [],
            totalQuantity: cartData?.totalQuantity || 0,
          })
        );
      } catch(error){
        dispatch(uiActions.showNotification({
          status: "error",
          title: "Error!!",
          message: "sending cart data failed!!"
        }));
      }
    };

    fetchCartData();
  }, []);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: "pending",
        title: "sending...",
        message: "sending cart data..."
      }));
      const response = await fetch("https://redux-store-57fd0-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json", {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if(!response.ok){
        throw new Error("Fetching cart data failed!!")
      }

      dispatch(uiActions.showNotification({
        status: "success",
        title: "success!",
        message: "sent cart data successfully!",
      }));
    };

    if(isInitial){
      isInitial = false;
      return;
    }

    if(cart.changed){
      sendCartData();
    }

  }, [cart, dispatch]);

  return (
    <Fragment>
      {notificationStatus && <Notification
      status={notificationStatus.status} 
      title={notificationStatus.title}
      message={notificationStatus.message}
      />}
    <Layout>
      {
        showCart && <Cart />
      }
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
