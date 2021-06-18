import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/Shop/Shop.selectors';

import CollectionPreview from '../CollectionPreview/CollectionPreview.component';

import {CollectionsOverviewContainer} from './CollectionsOverview.styles';

const CollectionsOverview = ({ collections }) =>
<CollectionsOverviewContainer>
  {
    collections.map(({ id, ...otherCollectionsProps }) => 
      <CollectionPreview key={id} {...otherCollectionsProps} />
    )
  }
</CollectionsOverviewContainer>
;

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);