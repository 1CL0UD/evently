import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="wrapper flex flex-col flex-center flex-between gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="Evently Logo"
            width={128}
            height={38}
          />
        </Link>
        <p>2023 Evently All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
