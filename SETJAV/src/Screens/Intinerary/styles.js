import {StyleSheet} from 'react-native'

const React = require("react-native");
const { Dimensions, Platform } = React;
import {Colors, Fonts, Metrics, Images, Constants} from "../../themes"
const deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ebebeb',
  },
  title:{
    fontSize: Constants.Font25,
    textAlign: 'center',
    color: 'white',
    backgroundColor:'transparent',
    fontWeight: '800',
  },
  voucher:{
    fontSize: Constants.Font20,
    textAlign: 'center',
    color: 'white',
    backgroundColor:'transparent',
    fontWeight: '700',
  },
  flaxView:{
    paddingBottom: Constants.Marin4
  },
  headerView:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingTop: Constants.Marin8,
    height: Constants.Marin22,
    paddingHorizontal: Constants.Marin4,
    backgroundColor:'#2e499a'
  },
  rightView:{
    flex: 1,
    alignItems:'flex-end',
    justifyContent:'center',
  },
  redbutton:{
    backgroundColor:'#e42328',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: Constants.Marin5,
    paddingVertical: Constants.Marin2,
    marginTop:Constants.Marin2
  },
  leftView:{
    flex: 1,
  },
  centerView:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  account:{
    width: Constants.Marin5,
    height:Constants.Marin5*50/30,
  },
  commonTextInput:{
    width: Constants.width*2/3,
    height:Constants.width*2/15,
    borderRadius: Constants.width*2/30,
    backgroundColor: 'white',
    textAlign:'center',
    justifyContent:'center',
    fontSize:Constants.Font25,
    paddingHorizontal: Constants.Marin6,
    
  },
  oxford:{
    flexDirection:'row',
    paddingHorizontal:Constants.Marin4,
    height: Constants.Marin12,
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#2fa8e1'
  },
  london:{
    flexDirection:'row',
    paddingHorizontal:Constants.Marin4,
    height: Constants.Marin12,
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#2fa8e1',
    marginTop:Constants.Marin8  
  },
  dateText:{
    fontSize:Constants.Font25,
    color:'white',
  },
  oxfordText:{
    fontSize:Constants.Font25,
    color:'white',
    fontWeight: '900'
  },
  commonText:{
    fontSize: Constants.Font20,
    backgroundColor:'transparent'
  },
  timeText:{
    fontSize: Constants.Font20,
    backgroundColor:'transparent',
    marginLeft:Constants.Marin4,
  },
  point:{
    width: Constants.Marin7,
    height: Constants.Marin7,
  },
  dateView:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:Constants.Marin2
  },
  shadowView:{
    marginLeft:Constants.Marin4,
    paddingHorizontal:Constants.Marin4,
    paddingVertical: Constants.Marin3,
    backgroundColor:'white',
    borderRadius:5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#d6d6d6',
    shadowOpacity: 1,
    flex:1
  },
  fixView:{
    width:Constants.Marin20,
  },
  nextButton:{
    width: Constants.width/3,
    height: Constants.width/8,
    borderRadius: Constants.width/16,
    borderWidth: 1,
    borderColor: 'white',
    alignItems:'center',
    justifyContent:'center',
    marginBottom: Constants.Marin6
  },
  rowTextView:{
    flexDirection:'row',
  },
  smallText:{
    fontSize: Constants.Font16,
    textAlign: 'center',
    
    color: 'white',
    backgroundColor:'transparent'
  },
  underlineSmallText:{
    fontSize: Constants.Font16,
    textAlign: 'center',
    
    color: 'white',
    textDecorationLine: 'underline',
    backgroundColor:'transparent'
  },
  alignItemCenter:{
    alignItems: 'center',
  },
  circleView:{
    width: Constants.Marin12,
    height: Constants.Marin12,
    borderRadius: Constants.Marin6,
    backgroundColor:'#e76065',
    justifyContent:'center',
    alignItems:'center'
  },
  plusText:{
    color: 'white',
    fontSize: Constants.Font30,
    marginBottom:Constants.Marin1,
    backgroundColor:'transparent'
  },
  loginText:{
    fontSize: Constants.Font25,
    textAlign:'center',
    marginTop: Constants.Marin16
  },
  codeText:{
    fontSize: Constants.Font20,
    
    textAlign:'center',
  },
  boldText:{
    fontSize: Constants.Font25,
    textAlign:'center',
  },
  nextText:{
    fontSize: Constants.Font25,
    
    textAlign:'center',
  },
  marginFirstView:{
    marginTop: Constants.Marin5,
    alignItems:'center'
  },
  marginSecondView:{
    marginTop: Constants.Marin5,
    alignItems:'center'
  },
  marginThirdView:{
    marginTop: Constants.Marin7,
    alignItems:'center'
  },
  inputView:{
    marginTop: Constants.Marin1,
    justifyContent:'center',
    alignItems:'center',
  },
  inputRowView:{
    marginTop: Constants.Marin1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  rowView:{
    marginTop: Constants.Marin4,
    flexDirection:'row',
    paddingHorizontal:Constants.Marin4
  },
  shadowButton:{
    width:Constants.Marin30,
    height:Constants.Marin15,
    borderRadius:Constants.Marin7,
    alignItems:'center',
    justifyContent:'center',
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowColor: '#f5f5f5',
    shadowOpacity: 1,
  },
  cameraView:{
    backgroundColor:'#e76065',
    height: Constants.Marin14,
    width:Constants.width*1/9,
    alignItems:'center',
    justifyContent:'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  camera:{
    height:Constants.Marin3,
    width:Constants.Marin4,
    resizeMode:'stretch'
  }
})
