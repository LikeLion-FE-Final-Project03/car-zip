Navigation.Item = function ({ item, currentPage, ...restProps }) {
  return (
    <li className={styles.item} {...restProps}>
      <NavLink
        to={item.href}
        className={({ isActive }) => {
          return !isActive ? styles.link : classNames(styles.link)(styles.active);
        }}
      >
        {item.text}
      </NavLink>
    </li>
  );
};
