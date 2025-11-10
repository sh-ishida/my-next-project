import styles from "./index.module.css";

type Props = {
    href: string;
    children: React.ReactNode;
}

/* ほかのファイルで使用できるようexport */
export default function ButtonLink({ href, children } : Props) {
    return (
        <a href={href} className={styles.button}>
            {children}
        </a>
    );
}