
// import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';
// Client screens
import C_categories from './client/C_categories';
import C_favourites from './client/C_favourites';
import C_nearPlaces from './client/C_nearPlaces';
import C_offers from './client/C_offers';
import C_profile from './client/C_profile';
import C_whatsNew from './client/C_whatsNew';
//shared screens
import Login from './shared/Login';
import SignUp from './shared/SignUp';
import AuthLoadingScreen from './shared/authLoading';

// Vendor Screens
// export default C_categories;
module.exports = {
  C_categories,
  C_favourites,
  C_nearPlaces,
  C_offers,
  C_profile,
  C_whatsNew,
  Login,
  SignUp,
  AuthLoadingScreen
};
