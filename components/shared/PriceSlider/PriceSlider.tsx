import { styled } from 'styled-components';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { PriceRangeContext } from '@/helpers/PriceRangeContext';
import { useState, useContext } from 'react';
function valuetext(value) {
  return `${value}°C`;
}
const PriceSlider = () => {
  const { rangeValues, setRangeValues } = useContext<any>(PriceRangeContext);
  const handleChange = (event, newValue) => {
    setRangeValues(newValue);
  };
  //   const [value, setValue] = useState([0, 0]);

  return (
    <StyledSlider>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => 'Price range'}
          value={rangeValues}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
      <div className="range">
        <div className="startingPrice">
          ${((rangeValues[0] / 100) * 100).toFixed(0)}
        </div>
        <div className="endPrice">
          ${((rangeValues[1] / 100) * 100).toFixed(0)}
        </div>
      </div>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  border-top: 1px solid rgba(217, 217, 217, 0.5);
  margin-top: 25px;
  padding-top: 25px;
  .range {
    display: flex;
    justify-content: space-between;
    ${({ theme }) => theme.mixins.secondarySidebar}
  }
`;
export default PriceSlider;
