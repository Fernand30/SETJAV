import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, ListView, ImageBackground, StatusBar, ScrollView, FlatList} from "react-native"
import { Images } from "../../themes"
import styles from './styles'

const arrayData = [{
    id:1,
    date:'27/03/2017',
    name:'Oxford',
    items: [{
        date: '08:00',
        image: 'walk',
        title: 'Meet at the meting point,',
        description: 'Treffen Sie sich am Messpunkt',
    }, {
        date: '10:00',
        image: 'point',
        title: 'Oxford guided walk',
        description: 'Oxford getuhrte Wanderung.',
    }, {
        date: '10:00',
        image: 'point',
        title: 'Freizeit in Oxford.',
        description: 'Shopping Town Rallye',
    }, {
        date: '18:30',
        image: 'point',
        title: 'Back with families.',
        description: '',
    }],
}, {
    id:2,
    date:'28/03/2017',
    name:'London',
    items: [{
        date: '14:30',
        title: 'Some other action',
        description: 'More description',
    }],
}]; /* data from backend*/

class App extends Component {
  constructor(props){
    super(props);

      this.ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2,
          sectionHeaderHasChanged: (s1, s2) => s1 !== s2
      });
    this.state = { data: {} };
  }

    renderSectionHeader(sectionData, category) {
        const section = arrayData.find(i => i.id === parseInt(category, 10));
        return (
            <View style={styles.flaxView}>
                <View style={styles.oxford}>
                    <Text style={styles.dateText}>{section.date}</Text>
                    <Text style={styles.oxfordText}>{section.name}</Text>
                </View>
            </View>
        );
    }

    renderRow(item, sectionID, rowID) {
      return (
          <View style={styles.flaxView}>
              <View style={styles.rowView}>
                  <View style={styles.fixView}>
                      <View style={styles.dateView}>
                          <Image
                              source={Images[item.image]}
                              style={styles.point}
                          />
                          <Text style={styles.timeText}>
                              {item.date}
                          </Text>
                      </View>
                  </View>
                  <View style={styles.shadowView}>
                      <Text style={styles.commonText}>
                          {item.title}
                      </Text>
                      <Text style={styles.commonText}>
                          {item.description}
                      </Text>
                  </View>
              </View>
          </View>
      )
    }

  transformData() {
      const data = {};

      arrayData.forEach((destination) => {
          data[destination.id] = destination.items;
      });

      return data;
  }

  render(){
      const dataSource = this.ds.cloneWithRowsAndSections(this.transformData(this.state.data));

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
          <ListView
              dataSource={dataSource}
              enableEmptySections={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              renderRow={(rowData, sectionID, rowID) => this.renderRow(rowData, sectionID, rowID)}
              renderSectionHeader={(sectionData, category) => this.renderSectionHeader(sectionData, category)}/>
      </View>
    )
  }
}
export default App
