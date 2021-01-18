import React, {useEffect, useState, useCallback} from 'react';
import {StatusBar, SafeAreaView, FlatList} from 'react-native';

import Ad from '../../components/ad/ad.component';
import Spinner from '../../components/spinner/spinner.component';
import {getAds} from '../../api/ads.api';
import styles from './app.styles';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => getMoreAds(0), [getMoreAds]);

  const renderListFooter = () => (isLoading ? <Spinner /> : null);
  const keyExtractor = ({ad_id}) => ad_id.toString();
  const renderItem = ({item}) => <Ad item={item} />;

  const getMoreAds = useCallback(
    (currentDataLength) => {
      setIsLoading(true);
      getAds(currentDataLength)
        .then((newData) => {
          if (newData) {
            setData([...data, ...newData]);
          }
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    },
    [data],
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {isLoading && data.length <= 0 ? (
          <Spinner />
        ) : (
          <FlatList
            contentContainerStyle={styles.list}
            data={data}
            renderItem={renderItem}
            ListFooterComponent={renderListFooter}
            onEndReached={() => getMoreAds(data.length)}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            initialNumToRender={2}
            maxToRenderPerBatch={4}
            onEndReachedThreshold={2}
            windowSize={5}
            removeClippedSubviews
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default App;
