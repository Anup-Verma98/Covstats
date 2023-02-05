import {StyleSheet} from 'react-native';
import {AppColor} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -55,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  // userInfo
  userInfoSection: {
    backgroundColor: AppColor.Palette.grape,
    paddingHorizontal: 28,
    paddingTop: 95,
    paddingBottom: 13,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 18,
  },
  userName: {
    fontSize: 22,
    color: AppColor.Palette.white,
    marginBottom: 8,
  },
  userSpecificDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexGrow: 2,
  },
  location: {
    color: AppColor.Palette.white,
    fontWeight: '500',
    fontSize: 22,
    marginBottom: 14,
  },
  userType: {
    color: 'white',
    marginLeft: 12,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  ratings: {
    color: 'orange',
  },

  // Routes
  containerRoutes: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: AppColor.Palette.white,
    minHeight: '150%',
  },
  routes: {
    backgroundColor: AppColor.Palette.grape,
  },
  login: {
    marginTop: 55,
  },
});
