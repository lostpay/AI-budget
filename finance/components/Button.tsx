import {
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { Children } from "react";
  import { CustomButtonProps } from "@/types";
  import Loading from "./Loading";
  import Typo from "./Typo";
  import { colors, radius } from "@/constants/theme";
  import { verticalScale } from "@/utils/styling";
  //button
  const Button = ({
    style,
    onPress,
    loading = false,

    children,
  }: CustomButtonProps) => {
    if (loading) {
      return (
        <View style={[styles.button, style, { backgroundColor: "transparent" }]}>
          <Loading />
        </View>
      );
    }
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
        {children}
      </TouchableOpacity>
    );
  };
  
  export default Button;
  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.primary,
      borderRadius: radius._17,
      borderCurve: "continuous",
      height: verticalScale(52),
      justifyContent: "center",
      alignItems: "center",
    },
  });
  