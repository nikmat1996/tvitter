import React from "react";
import styles from './newTweet.module.css'
import {
  FaRegImage,
  FaRegListAlt,
  FaRegSmile,
  FaCalendarCheck,
} from "react-icons/fa";

const NewTweet = () => {
  return (
      <>
        <div className={styles.container}>
            <h3 className={styles.heading}>Home</h3>
        </div>
        <div className={styles.container}>
            <div className={styles.img_wrapper}>
                <img src="" alt="profile" />
            </div>
            <div className={styles.right_section}>
                <div className={styles.input_layer}>
                    <input placeholder="What's happening?" />
                </div>
                <div className={styles.bottom_layer}>
                    <div className={""}>
                        <FaRegImage className={styles.icons} />
                        <FaRegListAlt className={styles.icons} />
                        <FaRegSmile className={styles.icons} />
                        <FaCalendarCheck className={styles.icons} />
                    </div>
                    <button> button</button>
                </div>
            </div>
        </div>
      </>
  );
};

export default NewTweet;


{/* <div className={styles.first}>
    <div className={styles.img}>
        <img src="/images/profile.jfif" alt="profile img" />
    </div>
    <div className={styles.input}>
        <input
        type="text"
        className={styles.control}
        placeholder="What's happing?"
        />
    </div>
    </div>
    <div className={styles.second}>
    <div className={styles.icons_wrapper}>
        <FaRegImage className={styles.icons} />
        <FaRegListAlt className={styles.icons} />
        <FaRegSmile className={styles.icons} />
        <FaCalendarCheck className={styles.icons} />
    </div>
    <div className={styles.btn}>
        <a href="">Tweet</a>
    </div>
</div> */}