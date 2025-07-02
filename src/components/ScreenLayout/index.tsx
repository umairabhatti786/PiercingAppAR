import React from "react";
import {
  ImageBackground,
  StyleSheet,
  ViewStyle,
  ImageSourcePropType,
  SafeAreaView,
  View,
} from "react-native";
import { theme } from "../../utils/Themes";
import sizeHelper from "../../utils/Helpers";

interface BackgroundContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  backgroundColor?: any;
}

const ScreenLayout: React.FC<BackgroundContainerProps> = ({
  children,
  style,
  backgroundColor,
}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: backgroundColor || theme.colors.black,
        paddingTop: sizeHelper.calHp(40),
      }}
    >
      <View style={[{...styles.container,

paddingHorizontal: sizeHelper.calWp(30),

      }, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
});

export default ScreenLayout;
