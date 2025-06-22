import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  Linking,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import ScreenLayout from "../../../components/ScreenLayout";
import TabLayout from "../../../components/TabLayout";
import TabHeader from "../../../components/TabHeader";
import images from "../../../utils/Constants/images";
import { theme } from "../../../utils/Themes";
import LinearGradient from "react-native-linear-gradient";
import { appStyles } from "../../../utils/GlobalStyles";
import icons from "../../../utils/Constants/icons";
import GradientButton from "../../../components/GradientButton";
import CustomInput from "../../../components/Input";
import { fonts } from "../../../utils/Themes/fonts";
import { useState } from "react";
import { usePermissions } from "../../../utils/Permissions";
import ImagePicker from "react-native-image-crop-picker";
import { openSettings } from "react-native-permissions";
import InfoDetail from "../../../components/InfoDetail";

const SettingsScreen = ({ navigation }: any) => {
  const [jewelryTitle, setJewelryTitle] = useState("");
  const { hasGalleryPermission, requestGalleryPermission } = usePermissions();
  const [jewelryMedia, setJewelryMedia] = useState<any>();

  const onAddMedia = async () => {
    let gallerypermission = await requestGalleryPermission();
    console.log("gallerypermission", gallerypermission);
    if (gallerypermission == "granted" || gallerypermission == "limited") {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        mediaType: "photo",
        forceJpg: true,
      }).then(async (result) => {
        if (result) {
          const fileName = result?.path?.split("/").pop();
          let data = {
            ...result,
            fileName: fileName,
            name: fileName,
            size: result?.size,
            height: result?.height,
            type: result?.mime,
            uri: result?.path,
            width: result?.width,
          };
          setJewelryMedia(data);
        }
      });
    } else {
      if (gallerypermission == "blocked") {
        Alert.alert(
          "Photo Access Needed",
          "To upload photos, please allow access in Settings.",
          [
            { text: "Cancel", style: "cancel" },
            {
              text: "Open Settings",
              onPress: () => {
                if (Platform.OS == "ios") {
                  openSettings();
                } else {
                  Linking.openSettings();
                }
              },
            },
          ]
        );
      }
    }
  };
  return (
    <>
      <TabLayout>
        <TabHeader title={"Add New Jewelry"} />
        <View style={{ flex: 1, gap: sizeHelper.calHp(50) }}>
          <InfoDetail isNextDisable title={"Settings"} />
          <InfoDetail 
          onPress={()=>navigation.navigate("AccountInfoScreen")}
          title={"Account Info"} />
          <InfoDetail title={"Notifications"} />

          <TouchableOpacity
            style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}
          >
            <CustomText
              text={"Help & Support"}
              color={theme.colors.white}
              size={27}
            />
            <Image
              style={{
                width: sizeHelper.calWp(30),
                height: sizeHelper.calWp(20),
              }}
              source={icons.next_arrow}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}
          >
            <CustomText
              text={"Report a bug"}
              color={theme.colors.white}
              size={27}
            />
            <Image
              style={{
                width: sizeHelper.calWp(30),
                height: sizeHelper.calWp(20),
              }}
              source={icons.next_arrow}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}
          >
            <CustomText
              text={"Privacy Policy"}
              color={theme.colors.white}
              size={27}
            />
            <Image
              style={{
                width: sizeHelper.calWp(30),
                height: sizeHelper.calWp(20),
              }}
              source={icons.next_arrow}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("WelcomeScreen")}
          style={{
            ...appStyles.row,
            gap: sizeHelper.calWp(10),
            paddingBottom: sizeHelper.calHp(50),
          }}
        >
          <Image
            style={{
              width: sizeHelper.calWp(50),
              height: sizeHelper.calWp(50),
            }}
            source={icons.logout}
            resizeMode="contain"
          />
          <CustomText text={"Logout"} color={theme.colors.red} size={27} />
        </TouchableOpacity>
      </TabLayout>
    </>
  );
};
export default SettingsScreen;

const styles = StyleSheet.create({
  button_icon: {
    width: sizeHelper.calWp(20),
    height: sizeHelper.calWp(20),
    resizeMode: "contain",
  },
});
