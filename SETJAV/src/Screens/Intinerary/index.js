import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar} from "react-native"
import { Images } from "../../themes"
import styles from './styles'


class App extends Component {
  constructor(props){
    super(props)
  }
  
  render(){
    
  	return(
      <View style = {styles.container}>
      	<View style={styles.headerView}>
      		<View style={styles.leftView}/>
      		<View style={styles.centerView}>
      			<Text style={styles.title}>ITINERARY</Text>
      		</View>
      		<View style={styles.rightView}>
      			<Image source={Images.account} style={styles.account}/>
      		</View>
      	</View>
      	<View style={styles.oxford}>
  			<Text style={styles.dateText}>27 / 03 / 2017</Text>
  			<Text style={styles.oxfordText}>Oxford</Text>
  		</View>
  		<View style={styles.rowView}>
			<View style={styles.fixView}>	  		
	  			<View style={styles.dateView}>
		  			<Image source={Images.point} style={styles.point}/>
		  			<Text style={styles.timeText}>08:00</Text>
	  			</View>
	  		</View>	
  			<View style={styles.shadowView}>
  				<Text style={styles.commonText}>Meet at the meting point.</Text>
  				<Text style={styles.commonText}>Treffen Sie sich am Messpunkt.</Text>
  			</View>
  		</View>
  		<View style={styles.rowView}>
			<View style={styles.fixView}>	  			
	  			<View style={styles.dateView}>
		  			<Image source={Images.walk} style={styles.point}/>
		  			<Text style={styles.timeText}>10:00</Text>
	  			</View>
	  		</View>	
  			<View style={styles.shadowView}>
  				<Text style={styles.commonText}>Oxford guided walk.</Text>
  				<Text style={styles.commonText}>Oxford getuhrte Wanderung.</Text>
  				<TouchableOpacity style={styles.redbutton}>
  					<Text style={styles.voucher}>VIEW VOUCHER</Text>
  				</TouchableOpacity>
  			</View>
  		</View>
  		<View style={styles.rowView}>
			<View style={styles.fixView}>	  		

	  		</View>	
  			<View style={styles.shadowView}>
  				<Text style={styles.commonText}>Freizeit in Oxford.</Text>
  				<Text style={styles.commonText}>Shopping Town Rallye.</Text>
  			</View>
  		</View>
  		<View style={styles.rowView}>
			<View style={styles.fixView}>	  		
	  			<View style={styles.dateView}>
		  			<Image source={Images.point} style={styles.point}/>
		  			<Text style={styles.timeText}>18:30</Text>
	  			</View>
	  		</View>	
  			<View style={styles.shadowView}>
  				<Text style={styles.commonText}>Back with families.</Text>
  			</View>
  		</View>
  		<View style={styles.london}>
  			<Text style={styles.dateText}>28 / 03 / 2017</Text>
  			<Text style={styles.oxfordText}>London</Text>
  		</View>
  		<View style={styles.rowView}>
			<View style={styles.fixView}>	  		
	  			<View style={styles.dateView}>
		  			<Image source={Images.point} style={styles.point}/>
		  			<Text style={styles.timeText}>08:00</Text>
	  			</View>
	  		</View>	
  			<View style={styles.shadowView}>
  				<Text style={styles.commonText}>Meet at the meting point.</Text>
  				<Text style={styles.commonText}>Treffen Sie sich am Messpunkt.</Text>
  			</View>
  		</View>

      </View>
    )
  }
}
export default App
