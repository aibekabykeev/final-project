import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const Separator = styled('div')(
  ({ theme }) => `
  height: ${theme.spacing(2)};
`,
);

const marks = [
  
  {
    value: 70,
  },
  
];

function valuetext(value) {
  return {value};
}

export default function Status2() {
  return (
    <Box sx={{ height: 250, marginTop: '50px'}}>
    
      <Slider
        orientation="vertical"
        track={false}
        aria-labelledby="track-false-range-slider"
        getAriaValueText={valuetext}
        defaultValue={[70, 35, 0]}
        marks={marks}
        
      />
    </Box>
  );
}