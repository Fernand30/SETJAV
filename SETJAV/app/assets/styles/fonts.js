import { Platform } from 'react-native';

// for (NSString* family in [UIFont familyNames])
// {
//     NSLog(@"%@", family);
//     for (NSString* name in [UIFont fontNamesForFamilyName: family])
//     {
//         NSLog(@"  %@", name);
//     }
// }

export default {
    mono: Platform.OS === 'ios' ? 'MaisonNeue-Mono' : 'maisonneue-mono',
    medium: Platform.OS === 'ios' ? 'MaisonNeue-Medium' : 'maisonneue-medium',
    demi: Platform.OS === 'ios' ? 'MaisonNeue-Demi' : 'maisonneue-demi',
    light: Platform.OS === 'ios' ? 'MaisonNeue-Light' : 'maisonneue-light',
    bold: Platform.OS === 'ios' ? 'PonaDisplay-Bold' : 'ponadisplay-bold',
    black: Platform.OS === 'ios' ? 'DINPro-CondBlack' : 'dinpro-condblack',
    weather: Platform.OS === 'ios' ? 'WeatherIcons-Regular' : 'weathericons_regular',
};
