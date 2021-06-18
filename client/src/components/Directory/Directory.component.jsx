import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/Directory/Directory.selectors';

import MenuItem from '../MenuItem/MenuItem.component';

import {DirectoryMenuContainer} from './Directory.styles';



const Directory = ({ sections }) => 
<DirectoryMenuContainer>
  { sections.map(({ id, ...otherSectionsProps }) => (
  <MenuItem key={id} { ...otherSectionsProps } />
  )) }
</DirectoryMenuContainer>
;

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);