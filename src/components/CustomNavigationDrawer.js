import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer, withTheme} from 'react-native-paper';

function CustomNavigationDrawer({theme, ...navProps}) {
  const {state, navigation} = navProps;

  return (
    <DrawerContentScrollView style={scrollViewStyle} {...navProps}>
      {state.routes.map((route, index) => (
        <Drawer.Item
          key={route.key}
          label={route.name}
          accessibilityLabel={route.name}
          active={isActive(index)}
          onPress={() => navigation.navigate(route.name)}
        />
      ))}
    </DrawerContentScrollView>
  );
}