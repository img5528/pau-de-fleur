import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
  HeaderContainer, 
  LogoContainer, 
  OptionsContainer, 
  OptionLink } from './Header.styles';

import { ReactComponent as Logo } from '../../assets/monstera-leaf.svg';

import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';

import { selectCartHidden } from '../../redux/Cart/Cart.selectors';
import { selectCurrentUser } from '../../redux/User/User.selectors';
import { signOutStart } from '../../redux/User/User.actions';

const Header = ({ currentUser, hidden, signOutStart }) => 
<HeaderContainer>
  <LogoContainer to='/'>
    <Logo />
  </LogoContainer>
  <OptionsContainer>
    <OptionLink to='/shop'>BOUTIQUE</OptionLink>
    <OptionLink to='/shop'>CONTACT</OptionLink>
    {
      currentUser
      ? <OptionLink as='div' onClick={signOutStart}>SE DÉCONNECTER</OptionLink>
      : <OptionLink to='/signin'>SE CONNECTER</OptionLink>
    }
    <CartIcon />
  </OptionsContainer>
  {
    hidden
    ? null
    : <CartDropdown />
  }
</HeaderContainer>

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart : () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);