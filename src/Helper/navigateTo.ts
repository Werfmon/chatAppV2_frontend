import { Locations } from '../types/Locations';

export function navigateTo(navigation: any, location: keyof Locations) {
  navigation.navigate(location);
}