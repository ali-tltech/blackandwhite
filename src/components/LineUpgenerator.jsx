import React from 'react';

function LineUpgenerator() {
  return (
    <div className="macbook">
      <div className="screen">
        <iframe 
          src="https://homecrowd.io/formations/editor#/pitch" 
          frameBorder="0" 
          className="iframe p-5 rounded-t-xl" 
          title="Formation Editor"
        ></iframe>
      </div>
      <div className="base"></div>
      <div className="notch"></div>
    </div>
  );
}

export default LineUpgenerator;
