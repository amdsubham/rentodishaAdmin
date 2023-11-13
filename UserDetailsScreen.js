import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, RefreshControl, Button } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserDetailsScreen() {

    const [users, setUsers] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [activeSections, setActiveSections] = useState([]);
    const [coinFilter, setCoinFilter] = useState(-1);


    const applyCoinFilter = (coinValue) => {
        setCoinFilter(coinValue);
    };
    const toggleExpand = (index) => {
        setActiveSections(activeSections.includes(index)
            ? activeSections.filter(i => i !== index)
            : [...activeSections, index]);
    };
    const fetchUsers = async () => {
        setRefreshing(true);
        try {
            const response = await fetch('https://odicult.fruitnasta.com/api/user/getAllUsers');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error(error);
        } finally {
            setRefreshing(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('userCredentials');
            navigation.navigate('Login'); // Assuming 'Login' is the name of your login screen
        } catch (error) {
            console.error('Error clearing user credentials', error);
        }
    };

    const renderUserDetails = () => {
        return users
            .filter(user => {
                if (coinFilter === -1) return true; // Show all users
                if (coinFilter === 4) return user.coins > 3; // More than 3 coins
                return user.coins === coinFilter;
            })
            .map((user, index) => (
                <View key={index} style={styles.userCard}>
                    <Text onPress={() => toggleExpand(index)} style={styles.cardTitle}>
                        {user.name || 'User'} {/* Fallback to 'User' if name is not available */}
                    </Text>
                    <Collapsible collapsed={!activeSections.includes(index)}>
                        {Object.keys(user).map((key, idx) => {
                            if (key !== 'name') { // Exclude the name from the details
                                return (
                                    <Text key={idx} style={styles.userDetail}>
                                        {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${user[key]}`}
                                    </Text>
                                );
                            }
                        })}
                    </Collapsible>
                </View>
            ));
    };


    return (
        <View style={styles.container}>
            <Button title="Logout" onPress={handleLogout} style={styles.logoutButton} />

            <Text style={styles.userCount}>User Count: {users.length}</Text>
            <View style={styles.sliderContainer}>
                <Slider
                    style={styles.slider}
                    minimumValue={-1}
                    maximumValue={4}
                    step={1}
                    value={coinFilter}
                    onValueChange={applyCoinFilter}
                />
                <Text style={styles.sliderValue}>
                    Filter by Coins: {coinFilter === -1 ? 'All' : (coinFilter === 4 ? 'More than 3' : coinFilter)}
                </Text>
            </View>

            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollViewContent}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={fetchUsers}
                    />
                }
            >
                {renderUserDetails()}
            </ScrollView>
        </View>
    );


}


const styles = {
    userCard: {
        margin: 10,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        width: '90%', // Adjust width as needed
        alignSelf: 'center',
    },
    userDetail: {
        fontSize: 16,
        marginVertical: 4,
        color: '#333', // Subtle text color for better readability
        // Add more styling as needed
    },
    userCount: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
        color: '#444',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start', // Align content to the top
        paddingTop: 20, // Add padding at the top of the screen
    },
    scrollView: {
        width: '100%',
    },
    scrollViewContent: {
        alignItems: 'center',
        paddingBottom: 20, // Add padding at the bottom for better scroll experience
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#007bff', // Example color for interactivity
        // Add more styling as needed
    },
    logoutButton: {
        marginTop: 20,
        backgroundColor: '#ff4444', // Example: red color for logout
        color: 'white',
        padding: 10,
        borderRadius: 10,
        width: '80%',
        alignSelf: 'center',
        // More styling as needed
    },
    sliderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20,
    },
    slider: {
        width: '80%',
        height: 40,
    },
    sliderValue: {
        fontSize: 16,
        marginTop: 10,
        color: '#000',
        // Add more styling if needed
    },
};

