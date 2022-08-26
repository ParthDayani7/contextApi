import React, { useContext } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Context1 } from '../../App';





function Screen2({ navigation }) {
const context = useContext(Context1)
return (
<View>
<Text>Enter your middle name</Text>
<TextInput
placeholder={'Middle Name'} value={context.middleName}
onChangeText={(dest) => {
context.setMiddleName(dest)
}} />
<Button title={'NEXT'} onPress={() => {
navigation.navigate('Screen3')
}} />
</View>
);
}
export default Screen2;