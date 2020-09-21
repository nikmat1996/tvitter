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
                <img src="https://pbs.twimg.com/profile_images/1280462211702558722/QE4ouvVW_400x400.jpg" alt="profile" />
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
                    <button className={styles.tweet_button}> Tweet</button>
                </div>
            </div>
        </div>
      </>
  );
};

export default NewTweet;