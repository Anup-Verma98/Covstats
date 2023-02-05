export const ROUTE_NAMES = {
  homeScreen: 'Home',
  mapScreen: 'Map',
  newsScreen: 'News',
  discoveryScreen: 'Discovery',
  educationScreen: 'Education',
};

import {
  DiscoveryScreen,
  EducationScreen,
  MapScreen,
  NewsScreen,
  HomeScreen,
} from '../screens/TabScreens';

import {
  DiscoveryIcon,
  EducationIcon,
  HomeIcon,
  MapIcon,
  NewsIcon,
} from '../assets/images/tab';
import DrawerNav from '../navigations/drawerNav/DrawerNav';

export const Tabs = [
  {
    name: ROUTE_NAMES.homeScreen,
    Icon: HomeIcon,
    title: 'Covid-19',
    component: DrawerNav,
  },
  {
    name: ROUTE_NAMES.mapScreen,
    Icon: MapIcon,
    title: 'World Wide Map',
    component: MapScreen,
  },
  {
    name: ROUTE_NAMES.educationScreen,
    title: 'Education',
    Icon: EducationIcon,
    component: EducationScreen,
  },
  {
    name: ROUTE_NAMES.discoveryScreen,
    title: 'Discovery',
    Icon: DiscoveryIcon,
    component: DiscoveryScreen,
  },
  {
    name: ROUTE_NAMES.newsScreen,
    title: 'News',
    Icon: NewsIcon,
    component: NewsScreen,
  },
];

// export const Drawers = Tabs;
