import React from "react";

export default ({ href }) => (
  <head
    dangerouslySetInnerHTML={{
      __html: `
            <!-- [1] -->
            <link 
              rel="preconnect" 
              href="https://fonts.gstatic.com" 
              crossorigin 
            />

            <!-- [2] -->
            <link 
              rel="preload"
              as="style"
              href=${href} 
            />

            <!-- [3] -->
            <link 
              rel="stylesheet"
              href=${href}
              media="print" 
              onload="this.media='all'" 
            />
        `,
    }}
  />
);
