import { extendTheme } from "@chakra-ui/react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {},
      body: {
        bg: "linear-gradient(339deg, rgb(7, 25, 19) 0%, rgb(55, 77, 86) 35%, rgb(10, 27, 9) 100%)",
        color: "white",
        fontFamily: "inter",
      },
    },
  },

  fonts: {
    inter: inter.style.fontFamily,
  },

  colors: {
    "perma-green": "#1FCE7B",
  },
});
