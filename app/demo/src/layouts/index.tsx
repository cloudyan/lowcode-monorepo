import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.layout_top}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lowcode">lowcode</Link>
          </li>
          <li>
            <Link to="/preview">preview</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
