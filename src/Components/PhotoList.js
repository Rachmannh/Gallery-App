import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
import Navigation from '@react-navigation/native';

const PhotoList = props => {
  const [results, setResults] = useState([]);

  let page = 0;

  let Token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6Imh0dHBzOlwvXC9ibGFja28uaWQifQ.eyJpc3MiOiJodHRwczpcL1wvYmxhY2tvLmlkIiwiYXVkIjoiaHR0cHM6XC9cL2JsYWNrby5pZCIsImp0aSI6Imh0dHBzOlwvXC9ibGFja28uaWQiLCJpYXQiOjE2NjY2NjkxNjYsImV4cCI6MTY2OTI2MTE2NiwidWlkIjoidXNlcl81In0.xupkzQuXcG6fwLAU2NkKLueGvvjvQBQ-7L1yDKjqW2s';

  const getPhoto = async () => {
    let url = `https://playgroundapi.com/bootcamp/api/web/posting/list-posting?page${page}`;

    await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Token}`,
      },
      params: {
        results,
      },
    })
      .then(res => res.json())
      .then(json => {
        setResults(json.data);
        console.log('tester data', json.data);
      })
      .catch(error => console.log('err', error));
  };

  useEffect(() => {
    getPhoto();
  }, []);

  const Navigation = useNavigation();

  const openDetailPage = dataDetails => {
    Navigation.navigate('Detail', dataDetails);
  };

  return (
    <SafeAreaView>
      <FlatList
        style={styles.list}
        keyExtractor={data => data.id}
        data={results}
        numColumns={3}
        renderItem={({item}) => (
          <>
            <TouchableOpacity
              style={styles.item}
              onPress={() => openDetailPage(item.id)}>
              <Image source={{uri: item.full_image_url}} style={styles.item} />
            </TouchableOpacity>
          </>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default PhotoList;
