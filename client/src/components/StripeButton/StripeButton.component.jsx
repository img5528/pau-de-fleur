import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IoG7LL6LefSdWNotYHWCwQqFfR53a9oUYCGRshsznNa8kDud1gh5LvW2UWFOpnrq41EWVuISicThhC4aBPferCa009KbvE3C2';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(res => {
      console.log(res)
      alert('Payment Successful');
    }).catch(error => {
      console.log('Payment error : ', error.response.data.error.message);
      alert('There was an issue with your payment. Please sure you use the provided credit card');
    })
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      currency='EUR'
      image='https://cdn.discordapp.com/attachments/357675942728040460/840023986079268894/stripe.svg'
      description={`Your total is ${price}€`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;