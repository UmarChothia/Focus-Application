import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colours';
import { RoundedButton } from '../components/button';

export const Focus = () => {
const [subject, setSubject] = useState(null);

return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput 
      style={styles.textInput}
      onChangeText={setSubject} 
      label="Today's Focus?"
      theme={{
         colors: {
                    placeholder: colors.darkGrey, text: colors.darkGrey, primary: colors.darkGrey,
                    underlineColor: 'transparent', 
                    // background: '#003489'
            }
      }}
      />
      <View style={styles.button}>
      <RoundedButton style={styles.buttonInside} title='+' size={50}/>
      </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    justifyContent: 'center',
    paddingLeft: 14
  },
  buttonInside: {
    justifyContent: 'center'
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  inputContainer: {
    padding: 25,
    justifyContent: 'top',
    flexDirection: 'row'
  },
});