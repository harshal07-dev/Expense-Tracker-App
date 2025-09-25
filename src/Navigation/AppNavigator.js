// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Home from "../screens/Home"
// import Create from "../screens/Create";
// import Insights from "../screens/Insights";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Profile from "../screens/Profile";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home";
import Create from "../screens/Create";
import Insights from "../screens/Insights";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
function BottomTabs () {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Create" component={Create}/>
            <Tab.Screen name="Insights" component={Insights}/>
        </Tab.Navigator>
    )
}

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BottomTabs" component={BottomTabs}/>
            <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
    )
}