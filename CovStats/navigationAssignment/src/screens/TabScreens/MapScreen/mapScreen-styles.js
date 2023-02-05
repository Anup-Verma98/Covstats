import {Dimensions, StyleSheet} from 'react-native';
import {AppColor} from '../../../theme';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  scrollView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: AppColor.Palette.white,
    width,
  },
  mapContainer: {
    marginTop: 43,
    marginHorizontal: 14,
    paddingTop: 15,
    padding: 15,
    flex: 1,
    borderWidth: 1,
    borderColor: AppColor.Palette.quickSilver,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
    marginBottom: 9.3,
  },
  legendsContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  legendOne: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 19.2,
  },
  legendTwo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  affectedText: {
    paddingLeft: 13,
  },
  map: {
    marginTop: 23,
    height: 230,
    width: 325,
  },

  // countries styles
  dataContainer: {
    flex: 1,
    marginTop: 25,
    borderColor: AppColor.Palette.gallery,
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 14,
    marginBottom: 24,
  },
  heading: {
    fontWeight: '600',
    fontSize: 17,
    paddingHorizontal: 17,
    paddingTop: 15,
  },
  countryListContainer: {
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 21,
  },
  listItemsContainer: {
    width: '100%',
  },
  // keeping this for testing it. . .
  // listItemsContainer: {
  // backgroundColor: AppColor.Palette.white,
  // marginBottom: 15,
  // zIndex: 999,
  // },
  listItems: {
    minWidth: '100%',
    backgroundColor: AppColor.Palette.white,
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: AppColor.Palette.gallery,
    alignItems: 'center',
    width: 325,
    marginBottom: 50,
  },

  pieChartContainer: {
    marginLeft: 10,
    borderTopColor: AppColor.Palette.gallery,
    borderBottomColor: AppColor.Palette.gallery,
    borderRightColor: 'white',
    borderLeftColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120.5,
    aspectRatio: 1,
    borderWidth: 2,
    borderRadius: 100,
  },
  pieChart: {
    backgroundColor: AppColor.Palette.white,
    height: 103.5,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  covidDetails: {
    marginLeft: 15,
  },
  countryName: {
    fontSize: 17,
    marginBottom: 5,
  },
  text: {
    color: AppColor.Palette.quickSilver,
  },
  bellIcon: {
    position: 'absolute',
    top: 5,
    right: 0,
  },
});
