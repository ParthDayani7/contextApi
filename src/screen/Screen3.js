import React, { useContext } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Context1 } from '../../App';





function Screen3({ navigation }) {
const context = useContext(Context1)
return (
<View>
<Text>Enter your lastName</Text>
<TextInput
placeholder={'Last Name'} value={context.lastName}
onChangeText={(depart) => {
context.setLastName(depart)
}} />
<Button title={'NEXT'} onPress={() => { navigation.navigate('Screen 4') }} />
</View>
);
}
export default Screen3;