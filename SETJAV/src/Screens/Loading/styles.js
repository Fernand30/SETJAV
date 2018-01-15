import {StyleSheet} from 'react-native'

const React = require("react-native");
const { Dimensions, Platform } = React;
import {Colors, Fonts, Metrics, Images, Constants} from "../../themes"
const deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#347fb9',
    alignItems:'center',
    paddingTop: Constants.Marin30
  },
  loadingText:{
    color:'white',
    fontSize: Constants.Font25
  },
  loading:{
    width: Constants.Marin40,
    height: Constants.Marin40
  },
  progress:{
    marginTop:Constants.Marin10
  },
  bigText:{
    marginTop:Constants.Marin8,
    color:'white',
    fontSize:Constants.Font25,
    fontWeight:'700',
    marginBottom:Constants.Marin8,
  },
  smallText:{

    color:'white',
    fontSize:Constants.Font20
  }
})
