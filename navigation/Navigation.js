import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {colors} from "../config/constants";
import {faCalendarAlt, faHome, faUsers} from "@fortawesome/free-solid-svg-icons";
/** IMPORT VIEWS HERE */
import Appointment from "../components/Appointment";
import Client from "../components/Client";
import Estate from '../components/Estate'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

/**
 * =====================
 * =====================
 *  STACK NAVIGATORS
 * =====================
 * =====================
 */
const screenOptions = {
    headerRight: () => (
        <TouchableOpacity >
            {/*TODO: REPLACE WITH LOGOUT COMPONENT*/}
            <Text style={{marginRight: 10}}>Logout</Text>
        </TouchableOpacity>
    )
}
/** ===================
 * APPOINTMENT STACK */
const AppointmentStack = () => (
    <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
            name = 'Mes RDV'
            component = {Appointment}/>
        {/* ADD MORE STACK SCREENS HERE*/}
    </Stack.Navigator>
)

/** ================
 * CUSTOMER STACK */
const CustomerStack = () => (
    <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
            name = 'Rechercher un client'
            component = {Client}/>
        {/* ADD MORE STACK SCREENS HERE*/}
    </Stack.Navigator>
)

/** ==============
 * ESTATE STACK */
const EstateStack = () => (
    <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
            name = 'Rechercher un bien'
            component = {Estate}/>
        {/* ADD MORE STACK SCREENS HERE*/}
    </Stack.Navigator>
)

/**
 * ==========================
 * ==========================
 *      MAIN NAVIGATION
 * ( BOTTOM TAB NAVIGATION )
 * ==========================
 * ==========================
 */
const tabBarOptions = {
    showLabel: false,
    activeTintColor: colors.primary
}
export default function BottomTabNavigator () {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions = {tabBarOptions}>
                <Tab.Screen
                    name='Appointments'
                    component={AppointmentStack}
                    options={{tabBarIcon: ({color}) => (<FontAwesomeIcon icon={faCalendarAlt} size={25} color={color} />)}}
                />
                <Tab.Screen
                    name="Estates"
                    component={EstateStack}
                    options={{tabBarIcon: ({color}) => (<FontAwesomeIcon icon={faHome} size={25} color={color} />)}}
                />
                <Tab.Screen
                    name="Customers"
                    component={CustomerStack}
                    options={{tabBarIcon: ({color}) => (<FontAwesomeIcon icon={faUsers} size={25} color={color}/>)}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}