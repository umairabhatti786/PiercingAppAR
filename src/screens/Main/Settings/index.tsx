import { Image, StyleSheet, View } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import ScreenLayout from "../../../components/ScreenLayout";

const SettingsScreen = ({ navigation }: any) => {
  return (
    <>
      <ScreenLayout>
        
      </ScreenLayout>
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
