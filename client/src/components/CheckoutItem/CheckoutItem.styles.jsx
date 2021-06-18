import styled, {css} from 'styled-components';

const noSelect = css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
const widthCheckoutItems = css`width: 23%;`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  ${widthCheckoutItems}
  padding-right: 15px;
`;

export const ImgContainer = styled.img`
  width: 100%;
  height: 100%;
`;

export const NameSpan = styled.span`
  ${widthCheckoutItems}
`;

export const QuantitySpan = styled.span`
  ${widthCheckoutItems}
  padding-left: 20px;
  display: flex;
`;

export const PriceSpan = styled.span`
  ${widthCheckoutItems}
`;

export const ArrowContainer = styled.div`
  cursor: pointer;
  ${noSelect}
`;

export const ValueContainer = styled.div`
  margin: 0 10px;
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
  ${noSelect}
`;