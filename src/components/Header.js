import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR} from '../assets/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Header = props => {
  const {title, right} = props;
  const [colorHear, setColorHear] = useState(COLOR.BLACK);
  const changeHear = () => {
    setColorHear(colorHear === COLOR.RED ? COLOR.BLACK : COLOR.RED);
  };
  return (
    <View style={styles.container}>
      <AntDesign name="arrowleft" size={25} color={COLOR.BLACK} />
      <Text style={styles.title}>{title}</Text>
      {right ? (
        <TouchableOpacity onPress={() => changeHear()}>
          <AntDesign name="heart" size={25} color={colorHear} />
        </TouchableOpacity>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: 'SF-Pro-Display-Bold',
  },
});
