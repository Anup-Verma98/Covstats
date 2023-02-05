import {StyleSheet} from 'react-native';

import {AppColor} from '../../theme/';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  caption: {
    marginTop: 33,
    fontWeight: '600',
    fontSize: 28,
    color: AppColor.Palette.wildWatermelon,
  },
});
