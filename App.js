import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>HELLO</Text>
            <Text style={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit, ipsum ut
                euismod finibus, felis magna dapibus mauris, vitae ornare nibh ante vel mauris.
                Suspendisse maximus quis massa at fermentum. Donec convallis augue at gravida
                condimentum. Suspendisse vitae elit velit. Maecenas rhoncus vestibulum enim, non
                aliquet augue. Etiam euismod quam vel vestibulum lacinia. Vivamus feugiat nulla ut
                enim convallis, quis porta risus pellentesque. Integer volutpat ipsum ut velit
                eleifend aliquam. Etiam ante odio, euismod sit amet pellentesque sit amet,
                ullamcorper ac augue. Nullam ligula odio, pellentesque vel aliquet id, imperdiet non
                neque. Sed faucibus dictum lacinia. Sed dignissim risus leo, quis pharetra augue
                sodales ornare. Mauris blandit iaculis ex vitae tristique. Mauris eu lorem rhoncus,
                blandit magna eget, lobortis elit. Nullam justo massa, luctus in semper in, blandit
                non eros.
            </Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
    },
    desc: {
        margin: 20,
    },
});
