import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton.component';

const getImageUrl = props => {
  if(props.imageUrl){
    return `background-image: url(${props.imageUrl})`;
  }
}

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  ${getImageUrl}
`;

export const CustomButtonContainer = styled(CustomButton)`
  width: 80%;
  opacity: .7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: 30px;


  &:hover {
    ${ImageContainer} {
      opacity: .8;
    }

    ${CustomButtonContainer} {
      opacity: .85;
      display: flex;
    }
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameSpan = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceSpan = styled.span`
  width: 10%;
`;
