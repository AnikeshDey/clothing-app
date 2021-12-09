import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K4fKvSIU7ht2xyMjPoZMN4fCOQ8ahhO1W1xVZ3PTDguIs0LK4G9iIX6FzORyQ1hPsplf2J6Ig85LSXy0nvCKogQ00PvtHEBbh';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
        label='Pay Now'
        name='New Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )

}

export default StripeCheckoutButton;