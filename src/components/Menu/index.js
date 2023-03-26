import { faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import Popper from "../Popper";
import styled from "./Menu.module.scss";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styled);

const MENU = [
	{
		title: "Chỉnh sửa",
		icon: faGear,
	},
	{
		title: "Đăng xuất",
		icon: faRightFromBracket,
	},
];

function Menu() {
	return (
		<div className={cx("wrapper")}>
			{MENU.map((item) => (
				<MenuItem data={item} />
			))}
		</div>
	);
}

export default Menu;
