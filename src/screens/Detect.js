import React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Detect = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Detect</Text>
            <Button
                title="Learn About Melanoma"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Upload Image"
                onPress={() => navigation.navigate('ImageUpload')}
            />
        </View>
    );
};

export default Detect;
