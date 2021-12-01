import style from './section.module.css';

export default function Section({ children }) {
  return <section className={style.section}>{children}</section>;
}
