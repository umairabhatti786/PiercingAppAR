import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import CustomText from "../../../components/Text";
import TabLayout from "../../../components/TabLayout";
import images from "../../../utils/Constants/images";
import { theme } from "../../../utils/Themes";
import icons from "../../../utils/Constants/icons";
import { fonts } from "../../../utils/Themes/fonts";
import CustomChat from "../../../components/CustomChat";
import MessageSender from "../../../components/MessageSender";

const ChatScreen = ({ navigation }: any) => {
  const messageData = [
    {
      message: "How may I help you with?👀",
      from: false,
    },
    {
      message: "Yeah, need some suggestions!",
      from: true,
    },

    {
      message: "What you wanna know?",
      from: true,
    },

    {
      message: "You can explain please",
      from: false,
    },

    {
      message: "Sounds good! I can do in 5 min",
      from: true,
    },

    {
      message: "Bit busy til then...😅",
      from: true,
    },

    {
      message: "Sounds good! I’m here",
      from: false,
    },

    {
      message: "Message...",
      from: true,
    },
  ];

  const TopHeader = () => {
    return (
      <View
        style={{
          height: sizeHelper.calHp(200),
          paddingTop: sizeHelper.calHp(Platform.OS == "android" ? 40 : 70),
          flexDirection: "row",
          backgroundColor: "#243942",
          paddingHorizontal: sizeHelper.calWp(30),
          gap: sizeHelper.calWp(40),
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{
              width: sizeHelper.calWp(40),
              height: sizeHelper.calWp(40),
            }}
            source={icons.back_arrow}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Image
          style={{
            width: sizeHelper.calWp(80),
            height: sizeHelper.calWp(80),
          }}
          source={images.three}
          resizeMode="contain"
        />

        <CustomText
          text={"Ember AI"}
          fontFam={fonts.Inter_Bold}
          fontWeight="700"
          color={theme.colors.white}
          size={30}
        />
      </View>
    );
  };
  return (
    <>
      <TabLayout
        lauoutSource={images.sms_background}
        paddingTop={1}
        style={{ paddingHorizontal: 0, gap: sizeHelper.calHp(30) }}
      >
        <View
          style={{
            gap: sizeHelper.calHp(30),
          }}
        >
          <TopHeader />
        </View>

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : null}
          keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 0} // Adjust as per your header height
        >
          <View style={{ flex: 1 }}>
            <FlatList
              data={messageData}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                gap: sizeHelper.calHp(20),
                paddingHorizontal: sizeHelper.calWp(30),
                paddingBottom: sizeHelper.calHp(20),
              }}
              renderItem={({ item, index }) => {
                return <CustomChat item={item} />;
              }}
            />
            <MessageSender />
          </View>
        </KeyboardAvoidingView>
      </TabLayout>
    </>
  );
};
export default ChatScreen;

const styles = StyleSheet.create({});
