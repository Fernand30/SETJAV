import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Metrics from './metrics';
import Constants from './constants';
import Fonts from './fonts';
import Colors from './colors';

const Styles = {
    container : {
        flex : 1,
    },

    fullContainer : {
        width : Metrics.screenWidth,
        height : Metrics.screenHeight,
    },

    columnContainer : {
        flex : 1,
        flexDirection : 'column'
    },

    rowContainer : {
        flex : 1,
        flexDirection : 'row',
    },
    responsiveContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      height: responsiveHeight(50), // 50% of screen height
      width: responsiveWidth(50), // 50% of screen width
    },
    navigationImageBack:{
      height: responsiveHeight(4),
      width: responsiveWidth(4),
      resizeMode:'stretch',
      marginLeft:5,
    },
    navigationImageNotification:{
      height: responsiveHeight(4),
      width: responsiveWidth(5),
      resizeMode:'stretch',
      marginRight:10,
    },
    navigationImageSearch:{
      height: responsiveHeight(4),
      width: responsiveWidth(7),
      resizeMode:'stretch',
      marginRight:5,
    },
    fireImage:{
      height: responsiveHeight(4),
      width: responsiveWidth(5),
      resizeMode:'stretch',
      marginLeft:5,
    },
    startImage:{
      height: responsiveHeight(5),
      width: responsiveWidth(9),
      resizeMode:'stretch',
    },
    sampleText: {
      fontSize: responsiveFontSize(2), // 2% of total screen size
      //fontFamily:Fonts.ultra,
      color:'white',
      marginLeft:5,
    },
    development: {
      marginTop:10,
      fontSize: responsiveFontSize(2), // 2% of total screen size
      textAlign:'center',
      color:Colors.textFourth,
    },
    blockchain: {
      marginTop:10,
      fontSize: responsiveFontSize(2), // 2% of total screen size
      textAlign:'center',
      color:Colors.textFourth,
      marginBottom:20,
    },
    visit: {
      marginTop:30,
      fontSize: responsiveFontSize(3), // 2% of total screen size
      textAlign:'center',
      color:Colors.textPrimary,
    },
    project: {
      marginTop:30,
      fontSize: responsiveFontSize(3), // 2% of total screen size
      textAlign:'center',
      color:Colors.textPrimary,
    },
    whitepager: {
      marginTop:30,
      fontSize: responsiveFontSize(3), // 2% of total screen size
      textAlign:'center',
      color:Colors.textPrimary,
    },
    startText: {
      marginTop:10,
      fontSize: responsiveFontSize(2), // 2% of total screen size
      textAlign:'center',
      color:Colors.textFourth,
    },
    startDateText: {
      marginTop:10,
      fontSize: responsiveFontSize(3), // 2% of total screen size
      textAlign:'center',
      color:Colors.textSecondary,
    },
    endDateText: {
      marginTop:10,
      fontSize: responsiveFontSize(3), // 2% of total screen size
      textAlign:'center',
      color:Colors.textThird,
    },
    NeblioText:{
      fontSize: responsiveFontSize(3),
      fontWeight:'700',
      color:'white',
    },
    upcoming:{
      fontSize: responsiveFontSize(2),
      fontWeight:'700',
      color:'white',
      textAlign:'center',
      marginTop:10,
    },
    titleText: {
      fontSize: responsiveFontSize(2), // 2% of total screen size
      //fontFamily:Fonts.ultra,
      color:'white',
      textAlign:'center',
    },
    alignCenter:{
      alignItems:'center'
    },
    justifyCenter:{
      justifyContent:'center'
    },
}

export default Styles;
