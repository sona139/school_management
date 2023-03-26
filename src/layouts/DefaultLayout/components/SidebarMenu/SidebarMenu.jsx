import classNames from "classnames/bind";
import styled from "./SidebarMenu.module.scss";

const cx = classNames.bind(styled);

function Menu({ children, ...props }) {
	return (
		<div className={cx("wrapper")} {...props}>
			{children}
		</div>
	);
}

export default Menu;
