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

import Menu from '../Menu';
import Intinerary from '../Intinerary';

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
            tabBarStyle={{backgroundColor:'#212f3c'}}
          >
            <TabNavigator.Item
                renderIcon={() => <Image source={Images.unselecttab1}/>}
                renderSelectedIcon={() => <Image source={Images.selecttab1} />}
                selected={this.state.selectedTab === 'tab1'}
                onPress={() => {                 
                    this.setState({
                      selectedTab: 'tab1'
                    });
                }}
               title=''>
                <Menu />
            </TabNavigator.Item>

            <TabNavigator.Item
                renderIcon={() => <Image source={Images.unselecttab2}/>}
                renderSelectedIcon={() => <Image source={Images.unselecttab2} />}
                selected={this.state.selectedTab === 'tab2'}
                onPress={() => {                 
                    this.setState({
                      selectedTab: 'tab2'
                    });
                }}
                title=''>
                <Menu />
            </TabNavigator.Item>

            <TabNavigator.Item
                renderIcon={() => <Image source={Images.unselecttab3}/>}
                renderSelectedIcon={() => <Image source={Images.unselecttab3} />}
                selected={this.state.selectedTab === 'tab3'}
                onPress={() => {                 
                    this.setState({
                      selectedTab: 'tab3'
                    });
                }}
                title=''>
                <Menu />
            </TabNavigator.Item>

            <TabNavigator.Item
                renderIcon={() => <Image source={Images.unselecttab4}/>}
                renderSelectedIcon={() => <Image source={Images.unselecttab4} />}
                selected={this.state.selectedTab === 'tab4'}
                onPress={() => {                 
                    this.setState({
                      selectedTab: 'tab4'
                    });
                }}
                title=''>
                <Menu />
            </TabNavigator.Item>

            <TabNavigator.Item
                renderIcon={() => <Image source={Images.unselecttab2}/>}
                renderSelectedIcon={() => <Image source={Images.unselecttab2} />}
                selected={this.state.selectedTab === 'tab5'}
                onPress={() => {                 
                    this.setState({
                      selectedTab: 'tab5'
                    });
                }}
                title=''>
                <Menu />
            </TabNavigator.Item>

          </TabNavigator>
        </View>
     )
  }
}
export default App
