import React from 'react';
import { Text, View, Image } from 'react-native';

import { styles } from './styles';

const CatScreen = (props: any) => {
  const catItem = props.route?.params;

  return (
    catItem && (
      <View style={styles.item}>
        <View>
          <Text>"name" : {catItem?.id}</Text>
          <Text>"width" : {catItem?.width}</Text>
          <Image
            style={styles.stretch}
            source={{
              uri: `${catItem?.url}`,
            }}
          />
        </View>
      </View>
    )
  );
};

export default CatScreen;
