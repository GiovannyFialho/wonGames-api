import React from 'react';

import Wrapper from './Wrapper';

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <p>
          Powered By
          <a key="website" href="https://landingpage-giovanny.netlify.app/" target="_blank" rel="noopener noreferrer">
            Giovanny Fialho
          </a>
        </p>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
