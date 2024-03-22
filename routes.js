import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons/'
import { Home } from './pages/index'
import { PaginaSenhas } from './pages/paginaSenhas'

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="home" component={Home} options={{
                    tabBarShowLabel: false, headerShown: false, tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#0000FF"} name="home" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="home-outline" />)
                    }
                }}/>
            <Tab.Screen
                name="paginaSenhas" component={PaginaSenhas} options={{
                    tabBarShowLabel: false, headerShown: false, tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#0000FF"} name="lock-closed" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="lock-closed-outline" />)
                    }
                }}
            />
        </Tab.Navigator>
    )
}
