import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { theme } from "../../../utils/Themes";
import sizeHelper from "../../../utils/Helpers";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomHeader from "../../../components/Header/inde";
import icons from "../../../utils/Constants/icons";
import CustomInput from "../../../components/Input";
import { appStyles } from "../../../utils/GlobalStyles";

const AddPhotoScreen = ({ navigation }: any) => {
  return (
    <>
      <ScreenLayout>
        <View
          style={{
            flex: 1,
            backgroundColor: theme.colors.black,
          }}
        >
          <View
            style={{
              gap: sizeHelper.calHp(30),
              flex: 1,
            }}
          >
            <CustomHeader disableNext />
            <View style={{ gap: sizeHelper.calHp(10) }}>
              <CustomText
                text={"About You"}
                color={theme.colors.white}
                size={22}
              />
              <CustomText
                text={"Add your photo to\nyour profile"}
                color={theme.colors.white}
                size={30}
              />
            </View>
            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
              <TouchableOpacity style={{ ...styles.circle }}>
                <Image
                  style={{
                    width: sizeHelper.calWp(30),
                    height: sizeHelper.calWp(30),
                    resizeMode: "contain",
                  }}
                  source={icons.plus}
                />
              </TouchableOpacity>
              <View>
                <CustomText
                  text={"John Michael"}
                  color={theme.colors.white}
                  size={35}
                />
                <CustomText
                  text={"@johnmichael1123"}
                  color={theme.colors.white + "40"}
                  // size={}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              paddingBottom: sizeHelper.calHp(80),
              gap: sizeHelper.calHp(30),
              alignItems: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
            onPress={()=>navigation
            .navigate("YouDOBScreen")}
              style={{
                ...styles.circle,
                width: sizeHelper.calWp(100),
                height: sizeHelper.calWp(100),
                borderRadius: sizeHelper.calWp(100),
                alignSelf: "flex-end",
                backgroundColor: theme.colors.white,
              }}
            >
              <Image
                style={{
                  width: sizeHelper.calWp(20),
                  height: sizeHelper.calWp(20),
                  resizeMode: "contain",
                  tintColor: theme.colors.black,
                }}
                source={icons.next_arrow}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScreenLayout>
    </>
  );
};
export default AddPhotoScreen;

const styles = StyleSheet.create({
  button_icon: {
    width: sizeHelper.calWp(20),
    height: sizeHelper.calWp(20),
    resizeMode: "contain",
  },
  circle: {
    width: sizeHelper.calWp(330),
    height: sizeHelper.calWp(330),
    borderRadius: sizeHelper.calWp(330),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});
