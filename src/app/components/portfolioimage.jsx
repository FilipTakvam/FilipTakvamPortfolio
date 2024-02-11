import React from 'react'
import Image from 'next/image';

function PortfolioImage({ src, alt }) {
  return (
  <Image
    src={src}
    width={0}
    height={0}
    sizes="100vw"
    style={{ width: '100%', height: 'auto' }} // optional
  />
  );
}

export default PortfolioImage;