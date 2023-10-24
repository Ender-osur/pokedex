import { SafeAreaView, Text } from 'react-native'
import React from 'react'

export default function Account() {
    return (
        <SafeAreaView
            style={
                {
                    flex: 1, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    backgroundColor: '#6AA5CD',
                    
                }
            }
        >
            <Text>Account</Text>
        </SafeAreaView>
    )
}