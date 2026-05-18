import { View, Text, TouchableOpacity } from 'react-native'
import { useContext } from 'react';
import AuthContext from '../../state-management/AuthContext';

export default function Profile() {
    const { user, setUser } = useContext(AuthContext);
    return(
        <View>
            <Text>Profile</Text>

            {user ? (
                <View>
                    <Text>Email: {user.email}</Text>
                    <Text>Password: {user.password}</Text>
                </View>
            ) : (
                <Text>No user data available.</Text>
            )}
            <TouchableOpacity onPress={() => setUser({
                email: "",
                password: ""
            })}>
                <Text>logout</Text>
            </TouchableOpacity>
        </View>
    );
}