import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Separator = styled('div')(
  ({ theme }) => `
  height: ${theme.spacing(2)};
`,
);

const marks = [
  
  {
    value: 100,
  },
  
];

function valuetext(value) {
  return {value};
}

export default function Status() {
  return (
    <Box sx={{opacity:'0.58', height: 160, marginTop: '60px' }}>
    
      <Slider
        orientation="vertical"
        track={false}
        aria-labelledby="track-false-range-slider"
        getAriaValueText={valuetext}
        defaultValue={[100, 50]}
        marks={marks}
      />
    </Box>
  );
}