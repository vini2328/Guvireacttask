import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

function Cardesh({ pricing }) {
  return (
    <div>
      {pricing && pricing.map(({ title, price, features }) => (
        <div className="pricing" key={title}>
          <div className="hero">
            <div className="carde">
              <h2 className="card-title">{title}</h2>
              <h3 className="card-title">{price}</h3>
              <hr className="vini" />

              <ul className="Features">
                {features.map((feature, i) => (
                  <span key={i}>
                    {feature.available ? <CheckIcon /> : <ClearIcon />}
                    {feature.text}
                  </span>
                ))}
              </ul>
              <div>
                <button className="rg">BUTTON</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cardesh;