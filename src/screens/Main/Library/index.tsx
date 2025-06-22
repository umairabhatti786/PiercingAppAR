import { FlatList, Image, StyleSheet, View } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import ScreenLayout from "../../../components/ScreenLayout";
import TabLayout from "../../../components/TabLayout";
import TabHeader from "../../../components/TabHeader";
import images from "../../../utils/Constants/images";

const LibraryScreen = ({ navigation }: any) => {
  return (
    <>
      <TabLayout>
        <TabHeader title={"Library"} />
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{
            gap: sizeHelper.calHp(20),
            paddingBottom: sizeHelper.calHp(100),
          }}
          style={{
            flex: 1,
            // backgroundColor: theme.colors.background,
          }}
          renderItem={() => {
            return (
              <View
                style={{
                  width: "48%",
                  height: sizeHelper.calHp(210),
                  borderRadius: sizeHelper.calWp(10),
                  overflow:'hidden'
                }}
              >
                <Image
                  style={{ height: "100%", width: "100%" }}
                  source={images.library_user}
                  // resizeMode="contain"
                />
              </View>
            );
          }}
        />
      </TabLayout>
    </>
  );
};
export default LibraryScreen;

const styles = StyleSheet.create({
  button_icon: {
    width: sizeHelper.calWp(20),
    height: sizeHelper.calWp(20),
    resizeMode: "contain",
  },
});
