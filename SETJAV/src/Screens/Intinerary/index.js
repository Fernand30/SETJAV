import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar, ScrollView, FlatList} from "react-native"
import { Images } from "../../themes"
import styles from './styles'

const arrayData = [{id:'1',date:'27/03/2017',name:'Oxford'}, {id:'2',date:'28/03/2017',name:'London'}] /* data from backend*/
class App extends Component {
  constructor(props){
    super(props)
  }

   _renderItem = ({item}) => (

      <View>
        <View style={styles.oxford}>
          <Text style={styles.dateText}>{item.date}</Text>
          <Text style={styles.oxfordText}>{item.name}</Text>
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
      </View>  
       
  );
  
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
        <FlatList
          data={arrayData}
          keyExtractor={(item) => item.id}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}
export default App
