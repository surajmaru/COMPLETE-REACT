import React from 'react'
import Modal from './UI/Modal'
import { useContext } from 'react'
import CartContext from '../store/CartContext'
import { currencyFormatter } from '../util/formatting';
import Input from './UI/Input';
import Button from './UI/Button';
import UserProgressContext from '../store/UserProgressContext';
import useHttp from '../hooks/useHttp';
import ErrorMsg from './Error';
import { useActionState } from 'react';

const requestConfig = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
};

function Checkout() {

    const cartCtx = useContext(CartContext);

    const cartTotal = cartCtx.items.reduce((total, item) => total + item.quantity * item.price, 0);

    const userProgressCtx = useContext(UserProgressContext);

    const {data, isLoading, error, sendRequest, clearData} = useHttp("http://localhost:3000/orders", requestConfig);

    function handleClose(){
        userProgressCtx.hideCheckout();
    }

    function handleFinish(){
        userProgressCtx.hideCheckout();
        cartCtx.clearCart();
        clearData();
    }

    async function checkOutAction(prevState, fd){
        const customerData = Object.fromEntries(fd.entries());

        await sendRequest(
            JSON.stringify({
                order: {
                    items: cartCtx.items,
                    customer: customerData
                }
            })
        )
    };

    const [formState, formAction , pending] = useActionState(checkOutAction, null);

    let actions = (
        <>
            <Button onClick={handleClose} type="button" textOnly>Close</Button>
            <Button>Submit Order</Button>
        </>
    );

    if(pending){
        actions = <span>Sending order data...</span>
    }

    if(data && !error){
        {setTimeout(() => {
            handleFinish();
        }, 3000)}

        return <Modal open={userProgressCtx.progress === "checkout"} onClose={handleFinish}>
            <h2>Success!!</h2>
            <p>Your order was submitted successfully..</p>

            <p className='modal-actions'>
                <Button onClick={handleFinish}>Okay</Button>
            </p>
        </Modal>
    }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
        <form action={formAction}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

            <Input label="Full Name" id="name" type="text" />
            <Input label="Email Address" id="email" type="email" />
            <Input label="Street" id="street" type="text" />

            <div className='control-row'>
                <Input label="Postal Code" type="text" id="postal-code" />
                <Input label="City" type="text" id="city" />
            </div>

            {error && <ErrorMsg title="Failed to submit order" message={error} />}

            <p className='modal-actions'>{actions}</p>
        </form>
    </Modal>
  )
}

export default Checkout