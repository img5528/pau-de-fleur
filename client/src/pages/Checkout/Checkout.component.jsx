import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.component';
import StripeCheckoutButton from '../../components/StripeButton/StripeButton.component';

import { selectCartItems, selectCartTotal } from '../../redux/Cart/Cart.selectors';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  CheckoutHeaderBlockContainer,
  TotalContainer
} from './Checkout.styles';

const Checkout = ({ cartItems, total }) =>
<CheckoutPageContainer>
  <CheckoutHeaderContainer>
    <CheckoutHeaderBlockContainer>
      <span>Product</span>
    </CheckoutHeaderBlockContainer>
    <CheckoutHeaderBlockContainer>
      <span>Description</span>
    </CheckoutHeaderBlockContainer>
    <CheckoutHeaderBlockContainer>
      <span>Quantity</span>
    </CheckoutHeaderBlockContainer>
    <CheckoutHeaderBlockContainer>
      <span>Price</span>
    </CheckoutHeaderBlockContainer>
    <div className="header-block">
      <span>Remove</span>
    </div>
  </CheckoutHeaderContainer>
  { cartItems.map(cartItem => <CheckoutItem id={cartItem.id} cartItem={cartItem} />) }

  <TotalContainer>
    <span>TOTAL: { total }€</span>
  </TotalContainer>
  <StripeCheckoutButton price={total} />
</CheckoutPageContainer>

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);