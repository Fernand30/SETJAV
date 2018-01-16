import React, { PureComponent } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar, ScrollView, FlatList, ListView} from "react-native"

import styles from './styles'

import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { FEATURE_NAME } from '../../constants';
import * as ExampleActions from '../../actions';

import { ExampleItem } from '../components/ExampleItem/ExampleItem';
import { fonts, colors, Images} from '../../../../assets/styles';

class App extends PureComponent {
  constructor(props) {
      super(props);

      this.state = {
          data: props.model.get('someData').toJS() || [],
      };
  }

  componentWillMount() {
        this.props.fetchData();
  }

  componentWillReceiveProps(nextProps) {
      if (this.props.model.get('someData') !== nextProps.model.get('someData')) {
          this.updateData(nextProps);
      }
  }

  updateData(props) {
      this.setState({
          data: props.model.get('someData').toJS() || []
      });
  }

  
  render(){
    const { model } = this.props;
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
              data={model.get('someData').toJS() || []}
              keyExtractor={(item, index) => index}
              renderItem={({ item }) => (
                  <ExampleItem
                      item={item}
                  />
              )}
          />
         
      </View>
    )
  }
}
App.propTypes = {
    model: ImmutablePropTypes.contains({
        someData: ImmutablePropTypes.list,
    }).isRequired,
    fetchData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ model: state.get(FEATURE_NAME) });
const mapDispatchToProps = dispatch => (bindActionCreators(ExampleActions, dispatch));

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
