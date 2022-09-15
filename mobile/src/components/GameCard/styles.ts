import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginRight: 24,
    overflow: "hidden",
  },
  cover: {
    width: 240,
    height: 320,
    justifyContent: "flex-end",
  },
  footer: {
    width: "100%",
    height: 120,
    padding: 16,
    justifyContent: "flex-end",
  },
  name: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    marginBottom: 4,
  },
  ads: {
    color: THEME.COLORS.CAPTION_300,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
  },
});
