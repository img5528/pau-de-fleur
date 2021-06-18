import { connect } from 'react-redux';

import { addItem } from '../../redux/Cart/Cart.actions';

import { 
  CollectionItemContainer,
  ImageContainer,
  CustomButtonContainer,
  CollectionFooterContainer,
  NameSpan,
  PriceSpan
 } from './CollectionItem.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>{price}€</PriceSpan>
      </CollectionFooterContainer>
      <CustomButtonContainer onClick={() => addItem(item) } inverted>Ajouter au panier</CustomButtonContainer>
    </CollectionItemContainer>
    );
  }

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
