import React from "react";
import { BsUpload } from "react-icons/bs";
import { AiOutlineRetweet, AiFillCheckCircle } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { BiMessageRounded } from "react-icons/bi";
import styles from './Tweets.module.css'

const Tweets = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.img_wrapper}>
                <img src="https://pbs.twimg.com/profile_images/1280462211702558722/QE4ouvVW_400x400.jpg" alt="profile" />
            </div>
            <div className={styles.right_section}>
                <div className={styles.credentials}>
                    <strong>Lando Norris</strong> <AiFillCheckCircle className={styles.verify} />
                    <div className={styles.username}>@landoNorris <span>6m</span></div>
                </div>
                <p className={styles.text}>Its friday then, saturday sunday whaaaat?</p>
                <div className={styles.reactions}>
                    <span><BiMessageRounded className={styles.icons} /> 45</span>
                    <span><AiOutlineRetweet className={styles.icons} /> 4</span>
                    <span><FiHeart className={styles.icons} /> 345</span>
                    <span><BsUpload className={styles.icons} /> 234</span>
                </div>
            </div>
        </div>
    </>
  );
};

export default Tweets;