import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
import BioCard from '../Components/BioCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Homepage = ({navigation}) => {
  const Navigation = useNavigation();

  const [data, setData] = useState([]);

  let page = 0;

  const getPhoto = async () => {
    let url = `https://playgroundapi.com/bootcamp/api/web/posting/list-posting?page${page}`;
    let token = await AsyncStorage.getItem('token');
    await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token} `,
      },
    })
      .then(res => res.json())
      .then(json => {
        setData(json.data);
      })
      .catch(error => console.log('err', error));
  };

  useEffect(() => {
    getPhoto();
  }, []);

  const openDetailPage = dataDetails => {
    Navigation.navigate('Detail', {item: dataDetails});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.biocardStyle}>
          <BioCard navigation={navigation} />
        </View>
        <View style={{flex: 2}}>
          <FlatList
            style={styles.list}
            keyExtractor={data => data.id}
            data={data}
            numColumns={3}
            renderItem={({item}) => (
              <>
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => openDetailPage(item)}>
                  <Image
                    source={{uri: item.full_image_url}}
                    style={styles.item}
                  />
                </TouchableOpacity>
              </>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  biocardStyle: {
    flex: 0.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  list: {
    width: responsiveScreenWidth(100),
    backgroundColor: '#2B4141',
  },
  item: {
    aspectRatio: 1,
    width: responsiveScreenWidth(100),
    flex: 1,
  },
});

export default Homepage;
