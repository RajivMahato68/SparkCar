import React from 'react';

function MapComponents() {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-24 pb-10">
      <div className="relative w-full h-0" style={{ paddingTop: '56.25%' }}> 
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7065.417342938545!2d85.3365256!3d27.695397699999983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a77520a339%3A0x4df14616bdef4f1c!2sSoftech%20Foundation%20Pvt.Ltd.!5e0!3m2!1sen!2snp!4v1727161269441!5m2!1sen!2snp"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}

export default MapComponents;
