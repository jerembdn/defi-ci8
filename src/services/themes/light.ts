import { createColor } from "@/utils/createColor";
import { Theme } from "@/types/themes";

const light: Theme = {
  id: 0,
  colors: {
    primary: createColor(245, 6, 123),
    background: {
      primary: createColor(255, 255, 255),
      secondary: createColor(246, 6, 123, 0.2),
    },
    text: {
      primary: createColor(0, 0, 0),
      secondary: createColor(148, 148, 148),
    },
    border: {
      button: createColor(228, 228, 228),
    },
  },
};

export default light;
