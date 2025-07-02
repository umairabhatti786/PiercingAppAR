import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import CustomText from "../../components/Text";
import { theme } from "../../utils/Themes";
import sizeHelper from "../../utils/Helpers";
import { fonts } from "../../utils/Themes/fonts";
import { useSelector } from "react-redux";
import { getToken } from "../../redux/reducers/authReducer";
import icons from "../../utils/Constants/icons";
import HomeScreen from "../../screens/Main/Home";
import LibraryScreen from "../../screens/Main/Library";
import ScanScreen from "../../screens/Main/Scan";
import JewelryStack from "../JewelryStack";
import SettingStack from "../SettingStack";

const BottomTab = ({ navigation }: any) => {
  const Bottom = createBottomTabNavigator();
  const token = useSelector(getToken);

  const TabItem = ({ focused, title, img }: any) => {
    return (
      <View style={[style.itemStyle]}>
        <Image
          resizeMode="contain"
          source={img}
          style={{
            ...style.img,
            tintColor: focused ? theme.colors.white : theme.colors.white + "50",
          }}
        />
      </View>
    );
  };

  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        animationEnabled: false,
        gestureEnabled: true,
        keyboardHidesTabBar: true,

        cardStyleInterpolator: ({ current, next, layouts }: any) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
        tabBarStyle: {
          backgroundColor: theme.colors.black,
          justifyContent: "center",
          alignItems: "center",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 1,
          shadowColor: theme.colors.black,
          shadowRadius: 4,
          elevation: 10,
          height: sizeHelper.calHp(130),
          borderTopWidth: 0.2,
          borderTopColor: theme.colors.red + "7",
          paddingTop: sizeHelper.calHp(Platform.OS == "ios" ? 20 : 20),
        },

        headerShown: false,
      })}
    >
      {/* Home Tab */}
      <Bottom.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabItem
                colors={theme.colors}
                img={icons.home}
                focused={focused}
              />
            );
          },
        }}
      />

      <Bottom.Screen
        name="JewelryStack"
        component={JewelryStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabItem
                colors={theme.colors}
                img={focused ? icons?.jewelry_filled : icons.jewelry}
                focused={focused}
              />
            );
          },
        }}
      />

      <Bottom.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TouchableOpacity
              onPress={()=>navigation.navigate("ScanScreen")}
               style={{ alignItems: "center",
                    width: sizeHelper.calWp(140),
                    gap:sizeHelper.calHp(5)


               }}>
                <TabItem
                  colors={theme.colors}
                  img={icons.add}
                  focused={focused}
                />
                <CustomText
                  text={"Scan"}
                  color={theme.colors.white + "50"}
                />
              </TouchableOpacity>
            );
          },
        }}
      />

      <Bottom.Screen
        name="Libray"
        component={LibraryScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabItem
                colors={theme.colors}
                img={focused ? icons?.library_filled : icons.library}
                focused={focused}
              />
            );
          },
        }}
      />

      <Bottom.Screen
        name="SettingStack"
        component={SettingStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabItem
                colors={theme.colors}
                img={focused ? icons?.setting_filled : icons.setting}
                focused={focused}
              />
            );
          },
        }}
      />
     
    </Bottom.Navigator>
  );
};
export default BottomTab;

const style = StyleSheet.create({
  itemStyle: {
    width: sizeHelper.calWp(140),
    backgroundColor: "transparent", // Semi-transparent background
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    
    gap: sizeHelper.calHp(7),
  },
  img: {
    height: sizeHelper.calHp(33),
    width: sizeHelper.calHp(33),
  },
  tabBarStyle: {},
});
