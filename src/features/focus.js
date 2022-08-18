import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colours';
import { RoundedButton } from '../components/button';
import { paddings } from '../utils/sizes';

// addTask is now a prop (property) of Focus
export const Focus = ({addTask}) => {
const [task, setTask] = useState(null);

return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput 
      style={styles.textInput}
      onChangeText={setTask} 
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
      {/* onPress - When pressed call 'addTask', with out 'task' */}
      <RoundedButton style={styles.buttonInside} title='+' size={50} onPress={() => addTask(task)}/>
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
    paddingLeft: paddings.md,
  },
  buttonInside: {
    justifyContent: 'center'
  },
  textInput: {
    flex: 1,
    marginRight: paddings.sm,
  },
  inputContainer: {
    padding: 25,
    justifyContent: 'top',
    flexDirection: 'row'
  },
});