import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import CustomText from "../../../components/Text";
import TabLayout from "../../../components/TabLayout";
import TabHeader from "../../../components/TabHeader";
import images from "../../../utils/Constants/images";
import { theme } from "../../../utils/Themes";
import GradientButton from "../../../components/GradientButton";
import { JewelryData } from "../../../utils/Data";

const JewelryScreen = ({ navigation }: any) => {

  return (
    <>
      <TabLayout>
        <TabHeader title={"Jewelry"} />
        <View>
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
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <GradientButton
            width={"45%"}
            onPress={() => navigation.navigate("AddJewelryScreen")}
            text={"+  Add Jewelry"}
          />
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
