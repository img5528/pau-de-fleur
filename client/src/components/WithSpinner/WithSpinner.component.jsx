import { 
  SpinnerOverlayContainer, 
  SpinnerContainer 
} from './WithSpinner.styles';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps}) =>
  isLoading
    ? <SpinnerOverlayContainer><SpinnerContainer /></SpinnerOverlayContainer>
    : <WrappedComponent {...otherProps} />;

export default WithSpinner;