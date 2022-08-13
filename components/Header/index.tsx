import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import openseaLogo from '@/assets/opensea.png';
import {AiOutlineSearch} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {MdOutlineAccountBalanceWallet} from 'react-icons/md';

import {styles} from './styles';

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <Image src={openseaLogo} height={40} width={40} />
          <div className={styles.logoText}>Opensea</div>
        </div>
      </Link>
      <div className={styles.searchBar}>
        <div className={styles.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input
          className={styles.searchInput}
          placeholder="Search items, collections and accounts"
        />
      </div>
      <div className={styles.headerItems}>
        <Link href="/collections/0x2E041EF3D7bEba9d8f9cf4E066831f2F5d0a3016">
          <div className={styles.headerItem}>Collections</div>
        </Link>
        <div className={styles.headerItem}>Stats</div>
        <div className={styles.headerItem}>Resources</div>
        <div className={styles.headerItem}>Create</div>
        <div className={styles.headerIcon}>
          <CgProfile />
        </div>
        <div className={styles.headerIcon}>
          <MdOutlineAccountBalanceWallet />
        </div>
      </div>
    </div>
  );
};
