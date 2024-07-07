// Import Popper.js
import { createPopper } from 'https://unpkg.com/@popperjs/core@2.11.6/dist/umd/popper.min.js';

// Import Tippy.js
import tippy from 'https://unpkg.com/tippy.js@6.3.7/dist/tippy-bundle.umd.min.js';


  function initializeTippy() {
    tippy('[data-tippy-content]', {
      animation: 'scale-subtle',
      duration: 200,
      arrow: false,
      delay: [0, 50],
      theme: 'light',
      maxWidth: 220,
    });
  }

  initializeTippy();


  

