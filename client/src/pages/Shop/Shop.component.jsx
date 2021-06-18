import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionContainer from '../Collection/Collection.container';
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview.component';

import { fetchCollectionsStart } from '../../redux/Shop/Shop.actions';

const Shop = ({ fetchCollectionsStart, match }) => {

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return(
    <div>
      <Route 
        exact path={`${match.path}`} 
        component={CollectionsOverviewContainer}
      /> 
      <Route 
        path={`${match.path}/:collectionId`} 
        component={CollectionContainer}
      />
    </div>
  );
};


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(Shop);