import React from "react";
import { Link } from 'react-router-dom';
import styles from './sidebar.module.css'
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaClipboardList,
  FaUserAlt,
  FaMehBlank,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <Link to="">
            <FaTwitter className={styles.logo} />
          </Link>
        </li>
        <li>
          <Link to="">
            <FaHome className={styles.logo} />
            Home
          </Link>
        </li>
        <li>
          <Link to="">
            <FaHashtag className={styles.icons} /> Explore
          </Link>
        </li>
        <li>
          <Link to="">
            <FaRegBell className={styles.icons} /> Notifications
          </Link>
        </li>
        <li>
          <Link to="">
            <FaRegEnvelope className={styles.icons} /> Messages
          </Link>
        </li>
        <li>
          <Link to="">
            <FaRegBookmark className={styles.icons} /> Bookmarks
          </Link>
        </li>
        <li>
          <Link to="">
            <FaClipboardList className={styles.icons} /> Lists
          </Link>
        </li>
        <li>
          <Link to="">
            <FaUserAlt className={styles.icons} /> Profile
          </Link>
        </li>
        <li>
          <Link to="">
            <FaMehBlank className={styles.icons} /> More
          </Link>
        </li>
        <div className="sidebar__Btn">
          <Link to="">Profile</Link>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
