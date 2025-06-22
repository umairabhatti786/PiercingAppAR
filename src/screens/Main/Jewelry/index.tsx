import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
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
import JewelryCard from "../../../components/Jewelry/JewelryCard";
import { theme } from "../../../utils/Themes";
import LinearGradient from "react-native-linear-gradient";
import { appStyles } from "../../../utils/GlobalStyles";
import icons from "../../../utils/Constants/icons";

const JewelryScreen = ({ navigation }: any) => {
  const JewelryData = [
    { img: images.Jewelry_img1, name: "STRAIGHT BARBELL" },
    { img: images.Jewelry_img2, name: "LABRET" },
    { img: images.Jewelry_img3, name: "CURVED BARBELL" },
    { img: images.Jewelry_img4, name: "CAPTIVE BEAD RING" },
    { img: images.Jewelry_img5, name: "CIRCULAR BARBELL" },
    { img: images.Jewelry_img6, name: "SEAM RING" },
  ];
  return (
    <>
      <TabLayout>
        <TabHeader title={"Jewelry"} />
        <View >

        <FlatList
          data={JewelryData}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{
            gap: sizeHelper.calHp(20),
            // paddingBottom: sizeHelper.calHp(100),
          
          }}
         
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  width: "49%",
                  height: sizeHelper.calHp(240),
                  borderRadius: sizeHelper.calWp(10),
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    backgroundColor: theme.colors.black,
                    opacity: 0.4,
                    zIndex: 1,
                  }}
                  // resizeMode="contain"
                />
                <View
                  style={{
                    height: "100%",
                    width: "100%",
                    padding: sizeHelper.calWp(15),
                    justifyContent: "space-between",
                    zIndex: 1,
                  }}
                >
                  <CustomText
                    text={item?.name}
                    style={{ marginRight: sizeHelper.calWp(50) }}
                    color={theme.colors.white}
                    size={27}
                  />
                  <TouchableOpacity
                    style={{
                      width: sizeHelper.calWp(70),
                      height: sizeHelper.calWp(70),
                      alignSelf: "flex-end",
                      backgroundColor: "#DEEAF550",
                      borderWidth: 1,
                      borderColor: theme.colors.white + "30",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: sizeHelper.calWp(80),
                    }}
                  >
                    <View
                      style={{
                        width: "80%",
                        height: "80%",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: theme.colors.white,
                        borderRadius: 999,
                      }}
                    >
                       <Image
                  style={{
                    height: "80%",
                    width: "80%",
                  }}
                  source={images.Jewelry_action}
                  // resizeMode="contain"
                />

                    </View>
                  </TouchableOpacity>
                </View>

                <Image
                  style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                  }}
                  source={item?.img}
                  // resizeMode="contain"
                />
              </View>
            );
          }}
        />


       
        </View>
        <View style={{flexDirection:"row",alignSelf:"center"}}>
        <LinearGradient
                  colors={["#0054E0", "#FF1D61",]} // Adjust colors to your needs
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{...appStyles.row,
                    // width: "80%",

                    borderRadius: sizeHelper.calWp(80),
                    height: sizeHelper.calHp(75),
                    paddingHorizontal:sizeHelper.calWp(50),
                    justifyContent: "center",
                  }}
                >
                  {/* <Image
                    style={{
                      width: sizeHelper.calWp(30),
                      height: sizeHelper.calWp(30),
                      resizeMode: "contain",
                    }}
                    source={icons.plus}
                  /> */}
                  <CustomText
                    text={"+  Add Jewelry"}
                    // textTransform={"ca"}
                    fontWeight="600"
                    color={theme.colors.white}
                    size={21}
                  />
                </LinearGradient>

        </View>
       
      
      </TabLayout>
    </>
  );
};
export default JewelryScreen;

const styles = StyleSheet.create({
  button_icon: {
    width: sizeHelper.calWp(20),
    height: sizeHelper.calWp(20),
    resizeMode: "contain",
  },
});
