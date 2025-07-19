import React from "react";
import styles from "./dream.module.scss";

const AchievementCard = ({ count, label, src, className = "" }) => {
  const hasCount = !!count;
  const hasImage = !!src;

  if (hasCount) {
    return (
      <div id="card" className={`${styles.card} ${className} d-flex align-items-end justify-content-between`}>
        <div>
          <span className={styles.count}>{count}</span>
          <p className={styles.count_label}>{label}</p>
        </div>
        {hasImage && <img className={styles.count_image} src={src} alt="image" />}
      </div>
    );
  }

  if (hasImage && !label) {
    return <img id="card" src={src} className={`h-100 ${styles.image}`} alt="image" />;
  }

  return (
    <div id="card" className={`${styles.card}`}>
      {label && (
        <p className="text-center" dangerouslySetInnerHTML={{ __html: label }} />
      )}
    </div>
  );
};

export default AchievementCard;
