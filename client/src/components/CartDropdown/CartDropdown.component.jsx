import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../CustomButton/CustomButton.component';
import CartItem from '../CartItem/CartItem.component';

import { selectCartItems } from '../../redux/Cart/Cart.selectors';
import { toggleCartHidden } from '../../redux/Cart/Cart.actions';

import { 
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageSpan
} from './CartDropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) =>
<CartDropdownContainer>
  <CartItemsContainer>
    {
      cartItems.length
      ? cartItems.map(cartItem => 
        <CartItem key={ cartItem.id } item={ cartItem } />
      )
      : <EmptyMessageSpan>Votre panier est vide</EmptyMessageSpan>
    }
  </CartItemsContainer>
  <CustomButton 
    onClick={ () => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }}
  >ALLER AU PAIEMENT</CustomButton>
</CartDropdownContainer>
;

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));