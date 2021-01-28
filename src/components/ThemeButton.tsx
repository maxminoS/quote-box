import React from "react";
import { Grid, Tooltip, IconButton } from '@material-ui/core';
import { Brightness3, WbSunny } from "@material-ui/icons";

type Props = {
  darkMode: boolean,
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const ThemeButton = (props: Props) => (
  <Grid item
        style={{
          position: "absolute",
          bottom: 8,
          right: 8
        }}
  >
    <Tooltip title={ props.darkMode ? "Dark Mode" : "Light Mode"} placement="left" arrow>
      <IconButton onClick={() => props.setDarkMode(!props.darkMode)}>
        { props.darkMode ? <Brightness3 /> : <WbSunny /> }
      </IconButton>
    </Tooltip>
  </Grid>
);
