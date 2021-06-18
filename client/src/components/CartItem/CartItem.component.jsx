import {
  CartItemContainer,
  ImgContainer,
  ItemDetailsContainer,
  NameSpan,
  PriceSpan,
} from './CartItem.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => 

<CartItemContainer>
  <ImgContainer src={ imageUrl } alt={ name } />
  <ItemDetailsContainer>
    <NameSpan>{ name }</NameSpan>
    <PriceSpan>{ quantity } x { price }€</PriceSpan>
  </ItemDetailsContainer>
</CartItemContainer>
;

export default CartItem;