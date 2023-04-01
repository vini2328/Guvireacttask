import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

function Cardesh({ pricing }) {
    function Disable(feature){
        console.log(feature)

        if(feature.available===false){
            return 'disabled'
        }
    }
  return (
    <div className='main'>
    <div className='saa'>
      {pricing && pricing.map(({ name, price, features }) => (
        <div className="pricing" key={name}>
            <div className="carde">
              <h2 className="card-title">{name}</h2>
             <b><h2 className="card-title">{price}</h2></b>
              <hr className="vini" />

              <ul >
                {features.map((feature, i) => (
                  <span  key={i}>
                    {feature.available ? <CheckIcon /> : <ClearIcon className='disabled'/>}
                    <span className={Disable(feature)}>{feature.text}</span><br/>
                  </span>
                ))}
              </ul>

                  

              <div>
                <button className="rg">BUTTON</button>
              </div>
            </div>
          </div>
      ))}
    </div>
    </div>
  );
}

export default Cardesh;