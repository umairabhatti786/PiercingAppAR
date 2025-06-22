import { Image, ImageBackground, StyleSheet, View } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import ScreenLayout from "../../../components/ScreenLayout";
import images from "../../../utils/Constants/images";

const HomeScreen = ({ navigation }: any) => {
  return (
    <>
     <ImageBackground
        style={styles.layout_img}
        source={images.main_background}
        resizeMode="cover"
      >

      </ImageBackground>
    
    </>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
    layout_img: {
        width: "100%",
        height: "100%",
    
      },
});
