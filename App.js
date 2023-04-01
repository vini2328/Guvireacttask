import React from 'react';
import Cardesh from './Cardesh';
import './App.css';

function App() {
  const pricing = {
    plan: [
      {
        name: 'Free',
        price: '$0/month',
        features: [
          { text: 'Single User', available: true },
          { text: '5GB Storage', available: true },
          { text: 'Unlimited Public Projects', available: true },
          { text: 'Community Access', available: true },
          { text: 'Unlimited Private Projects', available: false },
          { text: 'No Dedicated Phone Support', available: false },
          { text: 'No Free Subdomain', available: false },
          { text: 'No Monthly Status Reports', available: false },

        ],
        button_text: 'Button',
      },
      {
        name: 'Plus',
        price: '$9/month',
        features: [
          { text: '5 Users', available: true },
          { text: '50GB Storage', available: true },
          { text: 'Unlimited Public Projects', available: true },
          { text: 'Community Access', available: true },
          { text: 'Unlimited Private Projects', available: true },
          { text: 'Dedicated Phone Support', available: true },
          { text: 'Free Subdomain', available: true },
          { text: 'No Monthly Status Reports', available:false   },

        ],
        
        button_text: 'Button',
      },
      {
        name: 'Pro',
        price: '$49/month',
        features: [
          { text: 'Unlimited Users', available: true },
          { text: '150GB Storage', available: true },
          { text: 'Unlimited Public Projects', available: true },
          { text: 'Community Access', available: true },
          { text: 'Unlimited Private Projects', available: true },
          { text: 'Dedicated Phone Support', available: true },
          { text: 'Unlimited Free Subdomains', available: true },
          { text: 'Monthly Status Reports', available: true },
        ],
        button_text: 'Button',
      },
    ],
  };

  return (
  <Cardesh pricing={pricing.plan} />

  )
}


export default App;