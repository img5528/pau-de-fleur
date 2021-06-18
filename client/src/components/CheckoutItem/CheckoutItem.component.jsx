import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/Cart/Cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  ImgContainer,
  NameSpan,
  QuantitySpan,
  PriceSpan,
  ArrowContainer,
  ValueContainer,
  RemoveButtonContainer
} from './CheckoutItem.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer key={id} >
      <ImageContainer>
        <ImgContainer src={imageUrl} alt='item' />
      </ImageContainer>
      <NameSpan>{name}</NameSpan>
      <QuantitySpan>
        <ArrowContainer onClick={() => removeItem(cartItem)}>
          &#10094;
        </ArrowContainer>
        <ValueContainer>{quantity}</ValueContainer>
        <ArrowContainer onClick={() => addItem(cartItem)}>
          &#10095;
        </ArrowContainer>
      </QuantitySpan>
      <PriceSpan>{price}</PriceSpan>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        ❌
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};


const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
