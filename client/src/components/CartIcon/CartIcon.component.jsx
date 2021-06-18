import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { toggleCartHidden } from '../../redux/Cart/Cart.actions';
import { selectCartItemsCount } from '../../redux/Cart/Cart.selectors';


import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountSpan,
} from './CartIcon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={ toggleCartHidden }>
    <ShoppingIconContainer />
    <ItemCountSpan>{ itemCount }</ItemCountSpan>
  </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
