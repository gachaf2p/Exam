import (createDrawerNavigator) from '@react-navigation/drawer';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import CustomNavigationDrawer from './components/CustomNavigationDrawer';


function Don Bosco Information Technology() {
    return (
    <>
    <Text>Don Bosco Information Technology is a
    guide whether you want to be a Teacher, a business or a corporate</Text>
    <Button mode="contained">Next Page</Button>
    </>
  );
}

function About us() {
    return <Text> We are College that focusing on Java and C++ and mainly using for database. </Text>
}
const Drawer = createDrawerNavigator();

function NavigationContents() {
   return (
    <Drawer.Navigator
     screen Options={{
     headerShown: true,>
     }}
     drawerContent={props => <CustomNavigationDrawer {...props} />}
     >
     <Drawer.Screen name="Don Bosco Information Technology" component={Don Bosco Information Technology} />
     <Drawer.Screen name="About us" component={About us} />
    </Drawer.Navigator>
)

}

export default function Navigation() {
  return (
    <NavigationContainer linking ={linking}>
       <NavigationContents />
    </ NavigationContents>
  );
}