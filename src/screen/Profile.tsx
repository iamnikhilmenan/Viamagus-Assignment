import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';

export default function Profile() {
  const [isFocused, setIsFocused] = useState(false);

  const dummyData = [
    {
      title: 'First Stripe Earned',
      subTitle: 'Top 10% of highest spending players in a month',
      icon: require('../assest/secondIcon.png'),
    },
    {
      title: 'First Stripe Earned',
      subTitle: 'Top 10% of highest spending players in a month',
      icon: require('../assest/secondIcon.png'),
    },
    {
      title: 'First Stripe Earned',
      subTitle: 'Top 10% of highest spending players in a month',
      icon: require('../assest/secondIcon.png'),
    },
    {
      title: 'First Stripe Earned',
      subTitle: 'Top 10% of highest spending players in a month',
      icon: require('../assest/secondIcon.png'),
    },
    {
      title: 'First Stripe Earned',
      subTitle: 'Top 10% of highest spending players in a month',
      icon: require('../assest/secondIcon.png'),
    },
    {
      title: 'First Stripe Earned',
      subTitle: 'Top 10% of highest spending players in a month',
      icon: require('../assest/secondIcon.png'),
    },
    {
      title: 'First Stripe Earned',
      subTitle: 'Top 10% of highest spending players in a month',
      icon: require('../assest/secondIcon.png'),
    },
    {
      title: 'First Stripe Earned',
      subTitle: 'Top 10% of highest spending players in a month',
      icon: require('../assest/secondIcon.png'),
    },
    {
      title: 'First Stripe Earned',
      subTitle: 'Top 10% of highest spending players in a month',
      icon: require('../assest/secondIcon.png'),
    },
    {
      title: 'First Stripe Earned',
      subTitle: 'Top 10% of highest spending players in a month',
      icon: require('../assest/secondIcon.png'),
    },
    {
      title: 'First Stripe Earned',
      subTitle: 'Top 10% of highest spending players in a month',
      icon: require('../assest/secondIcon.png'),
    },
  ];

  return (
    <ScrollView stickyHeaderIndices={[0, 2]} style={styles.mainContainer}>
      {/* section 1 */}
      <View>
        <View style={styles.navContainer}>
          <Image source={require('../assest/logo.png')} />
          <Text style={styles.textStyle}>Profile</Text>
          <Image source={require('../assest/message-icon.png')} />
        </View>
      </View>

      {/* section 2 */}
      <View style={styles.profileContainer}>
        <Image
          source={require('../assest/profile-image.png')}
          style={{
            paddingVertical: 12,
          }}
        />
        <Text style={[styles.textStyle, {color: '#000'}]}>Jina Simons</Text>
        <Text style={[styles.textStyle, {fontSize: 14}]}>6000 Pts</Text>
        <Text style={[styles.textStyle]}>
          I’m a software developer that has been in the crypto space since 2012.
          And I’ve seen it grow and falter over a period of time. Really happy
          to be here!
        </Text>
        <View style={styles.logout}>
          <Image
            source={require('../assest/logout.png')}
            style={{marginRight: 12}}
          />
          <Text style={styles.textStyle}>Logout</Text>
        </View>
        <View style={styles.showPositionContainer}>
          <View style={styles.showPosition}>
            <View style={styles.showPositionBox}>
              <Text style={[styles.textStyle, {fontWeight: '500'}]}>
                Under or Over
              </Text>
              <View style={styles.showPercentContainer}>
                <Image
                  source={require('../assest/upMark.png')}
                  style={{marginRight: 12}}
                />
                <Text style={styles.percentText}>90%</Text>
              </View>
            </View>
            <View style={styles.showPositionBox}>
              <Text style={[styles.textStyle, {fontWeight: '500'}]}>Top 5</Text>
              <View style={styles.showPercentContainer}>
                <Image
                  source={require('../assest/downMark.png')}
                  style={{marginRight: 12}}
                />
                <Text style={styles.percentText}>51%</Text>
              </View>
            </View>
          </View>
          <Image
            source={require('../assest/star-icon.png')}
            style={styles.starIcon}
          />
        </View>
      </View>

      {/* section 3 */}
      <View
        style={{
          marginTop: 6,
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
          }}>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              borderBottomColor: '#000',
              borderBottomWidth: isFocused ? 2 : 0,
              color: isFocused ? '#000' : 'gray',
              paddingVertical: 14,
            }}
            onPress={() => setIsFocused(!isFocused)}>
            Games played
          </Text>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              borderBottomColor: '#000',
              borderBottomWidth: !isFocused ? 2 : 0,
              color: !isFocused ? '#000' : 'gray',
              paddingVertical: 14,
            }}
            onPress={() => setIsFocused(!isFocused)}>
            Badges
          </Text>
        </View>
      </View>

      <FlatList
        data={dummyData}
        contentContainerStyle={{paddingBottom: 12}}
        renderItem={({item, index}) => {
          return (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 12,
                  marginTop: 12,
                  padding: 12,
                  backgroundColor: '#fff',
                  borderRadius: 5,
                  elevation: 1,
                }}
                key={index.toString()}>
                <Image source={item.icon} style={{marginRight: 12}} />
                <View style={{flex: 1}}>
                  <Text>{item.title}</Text>
                  <Text>{item.subTitle}</Text>
                </View>
              </View>
            </>
          );
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: Dimensions.get('screen').width,
  },
  navContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  profileContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 12,
  },
  textStyle: {
    fontSize: 16,
    paddingVertical: 4,
    lineHeight: 22,
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  showPositionContainer: {
    width: '100%',
    height: 112,
    marginBottom: 12,
  },
  showPosition: {
    width: '100%',
    height: 100,
    position: 'absolute',
    bottom: 0,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: 'gray',
    flexDirection: 'row',
    padding: 16,
  },
  showPositionBox: {
    flex: 1,
  },
  starIcon: {
    position: 'absolute',
    alignSelf: 'center',
  },
  showPercentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  percentText: {
    fontSize: 24,
    fontWeight: '800',
  },
});
