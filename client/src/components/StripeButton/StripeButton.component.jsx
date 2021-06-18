import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51J3n60H4Fq9ZELbMSR3owJBEbYw5tIjJA0PiwOrRqSNmXwibS5bsjWcCmeEaldnZ9a9HVq8ltW3chzSfVeNWeH9S00MMOaiYZ1';

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
      label='Payer maintenant'
      name='Pau de fleur'
      billingAddress
      shippingAddress
      currency='EUR'
      image='https://cdn.discordapp.com/attachments/357675942728040460/855526973963108392/monstera-leaf.svg'
      description={`Votre total est de ${price}€`}
      amount={priceForStripe}
      panelLabel='Payer maintenant'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;