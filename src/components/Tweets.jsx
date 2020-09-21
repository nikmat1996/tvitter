import React from "react";
import {
  FaRegCheckCircle,
  FaComment,
  FaRegChartBar,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";
import styles from './Tweets.module.css'
const Tweets = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.img_wrapper}>
                <img src="https://pbs.twimg.com/profile_images/1280462211702558722/QE4ouvVW_400x400.jpg" alt="profile" />
            </div>
            <div className={styles.right_section}>
                <div className={styles.posts__first__name}>
                    <strong>Lando Norris</strong> <FaRegCheckCircle className={styles.verify} />
                </div>
                <div className={styles.posts__first__username}>@landoNorris <span>6m</span></div>
                <p className={styles.text}></p>
                <div className={styles.reactions}>
                    <span><FaComment className={styles.icons} /> 45</span>
                    <span><FaRegChartBar className={styles.icons} /> 4</span>
                    <span><FaHeart className={styles.icons} /> 345</span>
                    <span><FaLeaf className={styles.icons} /> 234</span>
                </div>
            </div>
        </div>
    </>


  );
};

export default Tweets;



