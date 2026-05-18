import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { router } from 'expo-router';
import { useContext } from 'react';
import AuthContext from '@/state-management/AuthContext';

const Login = () => {
    // Note: React components must start with a capital letter
    const { user, setUser } = useContext(AuthContext);

    return (
        <View style={{ padding: 20, gap: 10 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Login</Text>
            
            <TextInput 
                placeholder='username' 
                value={user?.email || ''}
                onChangeText={(text) => setUser({ ...user, email: text })}
            />
            
            <TextInput 
                placeholder='password' 
                secureTextEntry={true}
                value={user?.password || ''}
                onChangeText={(text) => setUser({ ...user, password: text })}
            />
            
            <TouchableOpacity 
                style={{ backgroundColor: "lightgray", padding: 10, borderRadius: 5, alignItems: 'center' }} 
                onPress={() => router.push("/home")}
            >
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;
