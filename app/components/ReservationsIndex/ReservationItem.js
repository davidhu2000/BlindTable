import React from 'react';
import { ScrollView, View, Text, Image, Alert, TouchableOpacity } from 'react-native';

import { SmallButton } from '../common';

class ReservationItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonOne: false,
      buttonTwo: false,
      buttonThree: false,
      buttonFour: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(time) {
    const res = {
      restaurant_id: this.props.res.rid,
      date_time: time,
      party_size: 1
    };
    this.props.createReservation(res);
    Alert.alert(
      `${this.props.res.name}`,
      `See you there ;)`,
      [
        {text: 'Dismiss', onPress: () => console.log('Cancel Pressed!') },
      ]
    );
  }

  render() {
    if(this.props.res.rid) {
      return(
        <View style={styles.container}>
          <View style={styles.details}>
            <Image source={{uri: `https://resizer.otstatic.com/v2/photos/small/${this.props.res.rid}.jpg`}} style={{height: 75, width: 75}}>
            </Image>
            <View style={styles.containerStyle}>

              <View style={styles.infoStyle}>
                <Text style={styles.name}>{this.props.res.name}</Text>
                <Text style={styles.address}>{this.props.res.address}</Text>
                <Text style={styles.city}>{this.props.res.city}, {this.props.res.state}, {this.props.res.postal_code}</Text>
              </View>

            </View>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.itemButton}>
              <SmallButton
                buttonText={'8:00 PM'}
                onPress={() => Alert.alert(
                  `${this.props.res.name}`,
                  `Join the party for 8:00PM?`,
                  [
                    {text: 'No', onPress: () => console.log('Cancel Pressed!') },
                    {text: 'Yes', onPress: () => this.handleSubmit('8:00 PM') },
                  ]
                )}
                />
              <SmallButton
                buttonText={'8:15 PM'}
                onPress={() => Alert.alert(
                  `${this.props.res.name}`,
                  `Join the party for 8:15PM?`,
                  [
                    {text: 'No', onPress: () => console.log('Cancel Pressed!') },
                    {text: 'Yes', onPress: () => this.handleSubmit('8:15 PM') },
                  ]
                )}
                />
            </View>
            <View style={styles.itemButton}>
              <SmallButton
                buttonText={'8:30 PM'}
                onPress={() => Alert.alert(
                  `${this.props.res.name}`,
                  `Join the party for 8:30PM?`,
                  [
                    {text: 'No', onPress: () => console.log('Cancel Pressed!') },
                    {text: 'Yes', onPress: () => this.handleSubmit('8:30 PM') },
                  ]
                )}
                />
              <SmallButton
                buttonText={'8:45 PM'}
                onPress={() => Alert.alert(
                  `${this.props.res.name}`,
                  `Join the party for 8:45PM?`,
                  [
                    {text: 'No', onPress: () => console.log('Cancel Pressed!') },
                    {text: 'Yes', onPress: () => this.handleSubmit('8:45 PM') },
                  ]
                )}
                />
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <Text>Loading</Text>
      );
    }
  }
}

const styles = {
  details: {
    width: "100%",
    flexDirection: "row"
  },
  container: {
    width: "100%",
    flexDirection: "column",
    padding: "7%",
    borderBottomWidth: 1,
    borderColor: '#edb6ba',
  },
  containerStyle: {
    elevation: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: "7%"
  },
  itemButton: {
    flexDirection: 'row'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#202021'
  },
  address: {
    color: '#343435'
  },
  city: {
    color: '#343435'
  },
  button: {
    marginTop: '7%',
    // alignSelf: 'center',
    height: 30,
    width: 150,
    backgroundColor: '#ed6d72',
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 20
  },
  buttonText: {
    zIndex: 30,
    fontSize: 16,
    color: 'white',
    fontFamily: 'Arial',
    letterSpacing: 0.5
  },
  buttonAlt: {
    marginTop: '7%',
    // alignSelf: 'center',
    height: 30,
    width: 150,
    backgroundColor: '#f7a5a9',
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 20,
  }
};

export default ReservationItem;
