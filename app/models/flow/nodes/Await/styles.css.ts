import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const awaitNodeContainer = style({
  display: "flex",
  flexDirection: "column",
  backgroundColor: vars.colors.bg[100],
  gap: vars.space[6],

  borderRadius: vars.radii.sm,
  padding: vars.space[4],
});

export const imageStyle = style({
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: vars.radii.sm,
});

export const messageZone = style({
  width: "300px",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",

  background: vars.colors.bg[500],
  borderRadius: vars.radii.sm,
  padding: vars.space[6],
});

export const messageStyle = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[2],
  position: "relative",
  borderRadius: vars.radii.sm,
  padding: vars.space[2],
  background: vars.colors.yellow[200],
  color: vars.colors.text[900],
  fontWeight: vars.fontWeights.medium,
  fontSize: vars.fontSizes.sm,

  ":after": {
    content: "",
    position: "absolute",
    fontSize: 0,
    lineHeight: 0,
    width: 0,
    height: 0,
    zIndex: 1000,
    top: 0,
    right: 0,
    transform: "translateX(50%)",
    border: "solid transparent",
    borderWidth: "6px",
    borderTopColor: vars.colors.yellow[200],
    borderBottomWidth: 0,
  },
});
