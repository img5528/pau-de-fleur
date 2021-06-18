import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  TitleContainer,
  SubtitleSpan
} from './MenuItem.styles';

import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => 

  <MenuItemContainer size={size}
  onClick={() => history.push(`${match.url}${linkUrl}`) } 
  >
    <BackgroundImageContainer imageUrl={imageUrl} />
    <ContentContainer>
    <TitleContainer>{ title.toUpperCase() }</TitleContainer>
      <SubtitleSpan></SubtitleSpan>
    </ContentContainer>
  </MenuItemContainer>
;

export default withRouter(MenuItem);