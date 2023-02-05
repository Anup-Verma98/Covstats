import {StyleSheet} from 'react-native';
import {AppColor} from '../../../theme';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColor.Palette.white,
    marginTop: 25,
    marginBottom: 18,
    flex: 1,
    borderWidth: 0.25,
    borderColor: AppColor.Palette.black100,
    marginHorizontal: 14,
    borderRadius: 15,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  btnContainer: {
    borderRadius: 8,
    borderWidth: 0.25,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 25,
    right: 31,
  },
  heading: {
    marginHorizontal: 10.9,
    marginBottom: 5,
    marginTop: 25,
    fontWeight: '600',
    fontSize: 17,
  },
  subheading: {
    marginHorizontal: 10.9,

    color: AppColor.Palette.quickSilver2,
  },
});
