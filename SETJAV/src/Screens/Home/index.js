import React ,{Component} from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  Platform
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import TabNavigator from 'react-native-tab-navigator';
import { Images } from "../../themes"
import styles from './styles'

import Intinerary from '../Intinerary';
import Location from '../Location';
import Menu from '../Menu';
import Message from '../Message';
import Settings from '../Settings';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedTab: 'tab1'
    };
  }

  render(){
  	return (
        <View style={styles.container}>
          <TabNavigator
            tabBarStyle={styles.tabbar}
          >
            <TabNavigator.Item
                renderIcon={() => <Image source={Images.unselecttab1} style={styles.tabImage1}/>}
                renderSelectedIcon={() => <Image source={Images.selecttab1} style={styles.tabImage1}/>}
                selected={this.state.selectedTab === 'tab1'}
                onPress={() => {                 
                    this.setState({
                      selectedTab: 'tab1'
                    });
                }}
               >
                <Intinerary />
            </TabNavigator.Item>

            <TabNavigator.Item
                renderIcon={() => <Image source={Images.unselecttab2} style={styles.tabImage2}/>}
                renderSelectedIcon={() => <Image source={Images.unselecttab2} style={styles.tabImage2}/>}
                selected={this.state.selectedTab === 'tab2'}
                onPress={() => {                 
                    this.setState({
                      selectedTab: 'tab2'
                    });
                }}
                >
                <Location />
            </TabNavigator.Item>

            <TabNavigator.Item
                renderIcon={() => <Image source={Images.unselecttab3} style={styles.tabImage3}/>}
                renderSelectedIcon={() => <Image source={Images.unselecttab3}  style={styles.tabImage3}/>}
                selected={this.state.selectedTab === 'tab3'}
                onPress={() => {                 
                    this.setState({
                      selectedTab: 'tab3'
                    });
                }}
                >
                <Menu />
            </TabNavigator.Item>

            <TabNavigator.Item
                renderIcon={() => <Image source={Images.unselecttab4} style={styles.tabImage4}/>}
                renderSelectedIcon={() => <Image source={Images.unselecttab4}  style={styles.tabImage4}/>}
                selected={this.state.selectedTab === 'tab4'}
                onPress={() => {                 
                    this.setState({
                      selectedTab: 'tab4'
                    });
                }}
                >
                <Message />
            </TabNavigator.Item>

            <TabNavigator.Item
                renderIcon={() => <Image source={Images.unselecttab5} style={styles.tabImage5}/>}
                renderSelectedIcon={() => <Image source={Images.unselecttab5}  style={styles.tabImage5}/>}
                selected={this.state.selectedTab === 'tab5'}
                onPress={() => {                 
                    this.setState({
                      selectedTab: 'tab5'
                    });
                }}
                >
                <Settings />
            </TabNavigator.Item>

          </TabNavigator>
        </View>
     )
  }
}
export default App
