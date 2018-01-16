import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet, View, Text, Image, TouchableOpacity
} from 'react-native';

import styles from './styles'
import { fonts, colors, Images} from '../../../../../assets/styles';

export class ExampleItem extends PureComponent {

    goAction(){

    }
    
    render() {
        const { item } = this.props;

        return (
                <View style={styles.flaxView}>
                    <View style={styles.oxford}>
                      <Text style={styles.dateText}>{item.date}</Text>
                      <Text style={styles.oxfordText}>{item.title}</Text>
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
    }
}

ExampleItem.propTypes = {
    item: PropTypes.object.isRequired, // eslint-disable-line
};
