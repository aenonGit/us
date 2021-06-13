import React from 'react';

import { Typography, TypographyProps, useTheme } from '@material-ui/core';


const HeaderTypography = (props: Props): JSX.Element => {
  const { padding = true, text, ...rest } = props;
  const theme = useTheme();
  return (
    <Typography
      style={{
        fontFamily: 'Home Winter',
        letterSpacing: '2px',
        color: theme.palette.primary.main,
        paddingBottom: padding ? theme.spacing(2) : 0
      }}
      { ...rest }
    >
      {text}
    </Typography>
  );
};


type Props = {
  padding?: boolean;
  text: string;
} & TypographyProps;


export { HeaderTypography };
