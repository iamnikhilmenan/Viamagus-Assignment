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
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import {Modal} from 'react-native-paper';

const dummyEntryTickets = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  var today = new Date();

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

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
              <Image source={require('../assest/infoIcon.png')} />
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
                    {marginRight: 8, color: '#D2BAF5'},
                  ]}>
                  Starting in
                </Text>
                <Image source={require('../assest/clock.png')} />
              </View>

              <Text style={[styles.textStyle, {color: '#D2BAF5'}]}>
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
            <Text style={[styles.textStyle]}>
              <Text style={[styles.textStyle, {fontWeight: '600'}]}>
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
              <Text>PRIZE POOL</Text>
              <Text style={styles.prizeValueText}>$12,000</Text>
            </View>
            <View>
              <Text>UNDER</Text>
              <Text style={styles.prizeValueText}>3.25x</Text>
            </View>
            <View>
              <Text>OVER</Text>
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
                source={require('../assest/upArrow.png')}
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
                source={require('../assest/downArrow.png')}
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
                source={require('../assest/profile_2.png')}
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
                source={require('../assest/graphIcon.png')}
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
            }}>
            Your Prediction is Under
          </Text>
          <Text
            style={{
              color: '#000',
              fontSize: 11,
              textTransform: 'uppercase',
              marginVertical: 12,
            }}>
            Every Ticket
          </Text>

          <View
            style={{
              height: Dimensions.get('screen').width / 2,
            }}>
            <FlatList
              data={dummyEntryTickets}
              renderItem={({item}) => {
                return (
                  <>
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 24,
                          alignSelf: 'center',
                          color: '#000',
                        }}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  </>
                );
              }}
            />
          </View>

          <View>
            <Text>You can win</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: '#03A67F', fontWeight: '500', fontSize: 14}}>
                ${2000}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 14}}>Total</Text>
                <Image
                  source={require('../assest/totalIcon.png')}
                  style={{marginHorizontal: 6}}
                />
                <Text style={{fontSize: 14}}>5</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={hideModal}
            style={{
              backgroundColor: '#6231AD',
              borderRadius: 25,
              alignItems: 'center',
              paddingVertical: 8,
              marginVertical: 24,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
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
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
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
    fontWeight: '400',
    color: '#000',
    paddingBottom: 14,
  },
  prizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
  },
  prizeValueText: {
    fontWeight: '400',
    color: '#000',
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
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
  },
  thirdContainer: {
    backgroundColor: '#F6F3FA',
    padding: 14,
  },
});
