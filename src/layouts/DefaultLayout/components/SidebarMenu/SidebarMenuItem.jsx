import { useState } from "react";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";

import styles from "./SidebarMenu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ Icon, title, to, onClick }) {
	const [active, setActive] = useState();
	const classes = cx("menu-item", { active });

	return (
		<NavLink
			to={to}
			className={({ isActive }) => {
				setActive(isActive);
			}}
		>
			<div className={classes} onClick={onClick}>
				<div className={cx("icon")}>{Icon}</div>
				<h4 className={cx("title")}>{title}</h4>
			</div>
		</NavLink>
	);
}

export default MenuItem;
