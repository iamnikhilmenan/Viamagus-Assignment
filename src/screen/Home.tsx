import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {Modal} from 'react-native-paper';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

const dummyEntryTickets = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

export default function Home() {
  const [visible, setVisible] = React.useState(false);
  const [entryTicket, setEntryTicket] = useState();

  var today = new Date();

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const onSubmitButtonPress = () => {
    hideModal();
    console.log(`Entry Ticket===>`, entryTicket);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.navBarText}>Today's Games</Text>
      <View
        style={{
          borderRadius: 4,
          borderWidth: 0.2,
        }}>
        {/* :: FIRST CONTAINER */}
        <View style={styles.firstContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={[styles.textStyle, {marginRight: 8, color: '#D2BAF5'}]}>
                UNDER OR OVER
              </Text>
              <Image source={require('../assets/infoIcon.png')} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingRight: 12,
                }}>
                <Text
                  style={[
                    styles.textStyle,
                    {
                      marginRight: 8,
                      color: '#D2BAF5',
                      fontFamily: 'Montserrat-Regular',
                    },
                  ]}>
                  Starting in
                </Text>
                <Image source={require('../assets/clock.png')} />
              </View>

              <Text
                style={[
                  styles.textStyle,
                  {color: '#D2BAF5', fontFamily: 'Montserrat-Regular'},
                ]}>
                {today.getHours() +
                  ':' +
                  today.getMinutes() +
                  ':' +
                  today.getSeconds()}
              </Text>
            </View>
          </View>

          <View style={{paddingTop: 12}}>
            <Text style={[styles.textStyle, {color: '#D2BAF5'}]}>
              Bitcoin price will be under
            </Text>
            <Text
              style={[
                styles.textStyle,
                {fontFamily: 'Montserrat-Regular', color: '#fff'},
              ]}>
              <Text style={[styles.textStyle, {fontFamily: 'Montserrat-Bold'}]}>
                ${'24,524'}
              </Text>{' '}
              at {'7'} a ET on {'22nd Jan 21'}
            </Text>
          </View>
        </View>

        {/* :: SECOND CONTAINER */}
        <View style={styles.secondContainer}>
          <View style={styles.prizeContainer}>
            <View>
              <Text style={{fontFamily: 'Montserrat-Regular'}}>PRIZE POOL</Text>
              <Text style={styles.prizeValueText}>$12,000</Text>
            </View>
            <View>
              <Text style={{fontFamily: 'Montserrat-Regular'}}>UNDER</Text>
              <Text style={styles.prizeValueText}>3.25x</Text>
            </View>
            <View>
              <Text style={{fontFamily: 'Montserrat-Regular'}}>OVER</Text>
              <Text style={styles.prizeValueText}>1.25x</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}>
              <Text style={styles.prizeValueText}>5</Text>
              <View style={styles.dotStyle} />
            </View>
          </View>

          <Text
            style={[styles.textStyle, {color: '#727682', marginVertical: 12}]}>
            What's your prediction?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.button,
                {marginRight: 12, backgroundColor: '#452C55'},
              ]}>
              <Image
                source={require('../assets/upArrow.png')}
                style={[styles.buttonIcon]}
              />
              <Text style={[styles.buttonText]}>Under</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button,
                {marginLeft: 12, backgroundColor: '#6231AD'},
              ]}
              onPress={showModal}>
              <Image
                source={require('../assets/downArrow.png')}
                style={[styles.buttonIcon]}
              />
              <Text style={[styles.buttonText]}>Over</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* THIRD CONTAINER */}
        <View style={styles.thirdContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/profile_2.png')}
                tintColor={'#727682'}
              />
              <Text style={[styles.secondaryTextStyle]}>355 Players</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/graphIcon.png')}
                tintColor={'#727682'}
              />
              <Text style={[styles.secondaryTextStyle]}>View chart</Text>
            </View>
          </View>

          <View style={styles.progressBarContainer}>
            <ProgressBarAnimated
              width={Dimensions.get('screen').width - 30}
              height={12}
              value={75}
              maxValue={100}
              backgroundColorOnComplete={'green'}
              backgroundColor={'#FE4190'}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={[styles.textStyle, {color: '#B5C0C8'}]}>
              232 predicted under
            </Text>
            <Text style={[styles.textStyle, {color: '#B5C0C8'}]}>
              123 predicted over
            </Text>
          </View>
        </View>
      </View>
      {/* :: MODAL */}
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={{
          backgroundColor: 'white',
          position: 'absolute',
          width: '100%',
          bottom: 0,
          borderTopRightRadius: 12,
          borderTopLeftRadius: 12,
        }}>
        <View
          style={{
            paddingHorizontal: 12,
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#B5C0C8',
                width: 40,
                height: 5,
                borderRadius: 50,
                marginVertical: 12,
              }}
            />
          </View>

          <Text
            style={{
              color: '#000',
              fontSize: 16,
              marginVertical: 10,
              fontFamily: 'Montserrat-SemiBold',
            }}>
            Your Prediction is Under
          </Text>
          <Text
            style={{
              color: '#000',
              fontSize: 12,
              textTransform: 'uppercase',
              marginVertical: 12,
              fontFamily: 'Montserrat-Regular',
            }}>
            Every Ticket
          </Text>

          <ScrollPicker
            dataSource={dummyEntryTickets}
            wrapperHeight={180}
            wrapperColor="#FFFFFF"
            itemHeight={40}
            highlightColor="#6231AD"
            highlightBorderWidth={1}
            onValueChange={(item: any) => setEntryTicket(item)}
          />

          <View>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Montserrat-Regular',
              }}>
              You can win
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  color: '#03A67F',
                  fontWeight: '500',
                  fontSize: 14,
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                ${2000}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Total
                </Text>
                <Image
                  source={require('../assets/totalIcon.png')}
                  style={{marginHorizontal: 6}}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Montserrat-SemiBold',
                    color: '#000',
                  }}>
                  5
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={onSubmitButtonPress}
            style={{
              backgroundColor: '#6231AD',
              borderRadius: 25,
              alignItems: 'center',
              paddingVertical: 10,
              marginVertical: 24,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontFamily: 'Montserrat-SemiBold',
              }}>
              Submit my prediction
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    padding: 12,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
  },
  button: {
    flex: 1,
    borderRadius: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
  },
  dotStyle: {
    backgroundColor: '#FFD600',
    width: 14,
    height: 14,
    borderRadius: 50,
    marginLeft: 6,
  },
  firstContainer: {
    backgroundColor: '#6231AD',
    padding: 14,
  },
  navBarText: {
    fontSize: 18,
    color: '#000',
    paddingBottom: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
  prizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
  },
  prizeValueText: {
    fontWeight: '400',
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
  },
  progressBarContainer: {
    backgroundColor: '#2DABAD',
    width: '100%',
    overflow: 'hidden',
    marginVertical: 12,
    borderRadius: 12,
  },
  secondContainer: {
    padding: 12,
  },
  secondaryTextStyle: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#727682',
    fontFamily: 'Montserrat-SemiBold',
  },
  textStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
  },
  thirdContainer: {
    backgroundColor: '#F6F3FA',
    padding: 14,
  },
});
