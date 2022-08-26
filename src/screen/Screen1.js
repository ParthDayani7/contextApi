import React, { useContext } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Context1 } from '../../App';



function Screen1({ navigation }) {
const context = useContext(Context1)
return (
<View>
<Text>Enter your First name</Text>
<TextInput
placeholder={'Full Name'} value={context.firstName
}
onChangeText={(name) => {
context.setFirstName(name)
}} />
<Button title={'NEXT'} onPress={() => {
navigation.navigate('Screen2')
}} />
</View>
);
}
export default Screen1;