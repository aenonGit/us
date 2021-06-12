import React from 'react';

import { Typography, TypographyProps, useTheme } from '@material-ui/core';


const HeaderTypography = (props: Props): JSX.Element => {
  const { text, ...rest } = props;
  const theme = useTheme();
  return (
    <Typography
      style={{ fontFamily: 'Home Winter', letterSpacing: '2px', color: theme.palette.primary.main }}
      { ...rest }
    >
      {text}
    </Typography>
  );
};


type Props = {
  text: string;
} & TypographyProps;


export { HeaderTypography };
