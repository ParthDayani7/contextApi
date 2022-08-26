import React, { useContext } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Context1 } from '../../App';
function Screen4({ navigation }) {
const context = useContext(Context1)
const {
    firstName,
    middleName,
    lastName,
} = context
return (
<View>
<Text>Last country</Text>
<Text>{lastName}</Text>
<Text>Middle country</Text>
<Text>{middleName}</Text>
<Text>First Name</Text>
<Text>{firstName
}</Text>

<Button title={'Go To Home'} onPress={() => {
alert("Go to Home Screen")
navigation.popToTop()
}} />

</View>
);
}
export default Screen4;


