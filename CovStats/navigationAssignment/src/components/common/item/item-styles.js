import {StyleSheet} from 'react-native';
import {AppColor} from '../../../theme';

export const styles = StyleSheet.create({
  containerList: {
    marginTop: 19.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: AppColor.Palette.gallery,
    borderRadius: 10,
    marginHorizontal: 10.5,
    height: 80,
  },

  countryContainer: {
    marginLeft: 17.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countryFlag: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  countryName: {
    paddingLeft: 17.1,
    fontSize: 22,
    fontWeight: '300',
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
