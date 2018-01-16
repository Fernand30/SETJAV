import fonts from './fonts';
import colors from './colors';

export default {
    light: {
        fontFamily: fonts.light,
        fontSize: 16,
        backgroundColor: colors.background.light,
        borderColor: colors.background.light,
        borderWidth: 1,
        borderRadius: 3,
        paddingVertical: 3,
        color: colors.text.dark,
        paddingHorizontal: 10
    },
    dark: {
        fontFamily: fonts.light,
        fontSize: 16,
        backgroundColor: colors.background.dark,
        borderColor: colors.background.dark,
        borderWidth: 1,
        borderRadius: 3,
        color: colors.text.light,
        paddingHorizontal: 10
    }
}