import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { compose } from 'redux'

import { selectIsCollectionFetching } from '../../redux/Shop/Shop.selectors';

import WithSpinner from '../WithSpinner/WithSpinner.component';
import CollectionsOverview from '../CollectionsOverview/CollectionsOverview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;