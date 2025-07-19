import styles from './title.module.scss';

const getLetterSpacing = (fontSize) => {
    const size = parseFloat(fontSize);
    if (isNaN(size)) return undefined;
    return `${size * -0.04}px`;
};

const SectionTitle = ({ title, subtitle, classes, titleStyles, subtitleStyles, id }) => (
    <div className={classes} id={id}>
        <h2
            style={{
                ...titleStyles,
                letterSpacing: getLetterSpacing(titleStyles?.fontSize)
            }}
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
            style={{ ...subtitleStyles }}
            className={styles.subtitle}
            dangerouslySetInnerHTML={{ __html: subtitle }}
        />
    </div>
);

export default SectionTitle;