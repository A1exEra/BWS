import { Range, getTrackBackground } from 'react-range';
import { useState, useContext } from 'react';
import { PriceRangeContext } from '../../../../helpers/PriceRangeContext';

const PriceRange = () => {
  const { rangeValues, setRangeValues } = useContext<any>(PriceRangeContext);
  return (
    <Range
      step={1}
      min={0}
      max={100}
      values={rangeValues}
      onChange={(values) => setRangeValues(values)}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: '36px',
            display: 'flex',
            width: '100%',
          }}>
          <div
            ref={props.ref}
            style={{
              height: '5px',
              width: '100%',
              borderRadius: '4px',
              background: getTrackBackground({
                values: rangeValues,
                colors: [
                  'rgba(147, 147, 147, 0.3)',
                  '#536758',
                  'rgba(147, 147, 147, 0.3)',
                ],
                min: 0,
                max: 100,
              }),
              alignSelf: 'center',
            }}>
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: '13px',
            width: '13px',
            borderRadius: '50%',
            backgroundColor: '#fff',
            border: '2px solid #536758',
          }}
        />
      )}
    />
  );
};

export default PriceRange;
