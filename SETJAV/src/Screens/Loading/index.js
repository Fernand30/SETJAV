import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar} from "react-native"
import { Actions } from 'react-native-router-flux';
import { Images } from "../../themes"
import styles from './styles'
import * as Progress from 'react-native-progress';

class App extends Component {
  constructor(props){
    super(props)
    this.state=({
      progressVal: 0,
    })
  }

  componentDidMount() {
    for(i =0;i<100; i++){
      setTimeout(()=>{
        this.setState({
          progressVal: this.state.progressVal+0.01
        })
      },100);
    }
  }

  goTab(){
    Actions.home()
  }


  
  render(){
      alert(this.state.progressVal)
  	return(
      <View style = {styles.container}>
          <Image source={Images.loading} style={styles.loading}/>
          <Progress.Bar style={styles.progress} progress={0.6} width={300} color='white' unfilledColor='#4b5a7b' borderWidth={0} height= {5}/>
          <Text style={styles.bigText}>4 minutes remaining</Text>
          <Text style={styles.smallText}>The app is downloading a</Text>
          <Text style={styles.smallText}>significant amount of information</Text>
          <Text style={styles.smallText}>please do not close</Text>
      </View>
    )
  }
}
export default App
