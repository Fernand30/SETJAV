import {StyleSheet} from 'react-native'

const React = require("react-native");
const { Dimensions, Platform } = React;
import {colors, fonts, Images, Constants} from "../../../../assets/styles"

const deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  tabImage1:{
    width: Constants.Marin8,
    height: Constants.Marin8*51/39,
  },
  tabImage2:{
    width: Constants.Marin7,
    height: Constants.Marin7*51/33,
  },
  tabImage3:{
    width: Constants.Marin10,
    height: Constants.Marin10
  },
  tabImage4:{
    width: Constants.Marin10,
    height: Constants.Marin10*41/51,
    marginBottom: Constants.Marin1
  },
  tabImage5:{
    width: Constants.Marin11,
    height: Constants.Marin11*35/56,
    marginBottom: Constants.Marin1
  },
  tabbar:{
    backgroundColor:'#212f3c',
    height: Constants.Marin16,
  },
  headerView:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal: Constants.Marin8,
    height: Constants.Marin20,
  },
  arrow_back:{
    width: Constants.Marin4,
    height:Constants.Marin6,
  },
  kmark:{
    width: Constants.Marin8,
    height:Constants.Marin10,
  },
  notMatchView:{
    height: Constants.Marin14,
    backgroundColor: '#ef6e71',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
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
  sideView:{
    flex: 1,
    alignItems: 'center'
  },
  commonText:{
    fontSize: Constants.Font25,
    textAlign: 'center',
    
    color: 'white',
    backgroundColor:'transparent'
  },
  marginView1:{
    marginTop: Constants.Marin16
  },
  marginView2:{
    marginTop: Constants.Marin10
  },
  marginView3:{
    marginTop: Constants.Marin6
  },
  marginView4:{
    marginTop: Constants.Marin4
  },
  marginView5:{
    marginTop: Constants.Marin2
  },
  bottomView: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'flex-end',
    paddingBottom: Constants.Marin6
  },
  textInput:{
    marginHorizontal: Constants.Marin16,
    height: Constants.Marin16,
    fontSize: Constants.Font30,
    
    textAlign: 'center',
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowColor: '#f7f7f7',
    shadowOpacity: 1
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
  textInputID:{
    flex: 1,
    height: Constants.Marin16,
    fontSize: Constants.Font30,
    
    textAlign: 'center',
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowColor: '#f7f7f7',
    shadowOpacity: 1
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
    width: Constants.Marin5,
    height: Constants.Marin5,
    borderRadius: Constants.Marin5/2,
    borderColor: 'white',
    borderWidth: 1 ,
    alignItems: 'center' ,
    justifyContent:'center'
  },
  plusText:{
    color: 'white',
    fontSize: Constants.Font30,
    alignSelf:'center',
    marginBottom: Constants.Marin1,
    
  },
  loginText:{
    fontSize: Constants.Font25,
    textAlign:'center',
    marginTop: Constants.Marin16
  },
  codeText:{
    fontSize: Constants.Font25,
    
    textAlign:'center',
  },
  inputView:{
    flexDirection: 'row',
    paddingHorizontal: Constants.Marin8,
    justifyContent:'space-between'
  },
  eachView:{
    marginTop: Constants.Marin10,
    width: Constants.Marin10,
    height: Constants.Marin10,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#ef6e71',
    textAlign:'center',
    justifyContent:'center',
    fontSize:Constants.Font30
  },
  forgotButton:{
    marginTop: Constants.Marin8
  },
  forgotText:{
    fontSize: Constants.Font15,
    textAlign:'center',
  }
})
