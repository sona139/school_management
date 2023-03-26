import { useState } from "react";
import classNames from "classnames/bind";
import { UserIcon } from "~/components/Icons";
import Menu from "~/components/Menu";
import styled from "./DefaultLayout.module.scss";

const cx = classNames.bind(styled);

function Header() {
	const [open, setOpen] = useState();

	const handleClick = () => {
		setOpen((prev) => !prev);
	};

	return (
		<div className={cx("wrapper")}>
			<header className={cx("header")}>
				<div className={cx("item")} onClick={handleClick}>
					<UserIcon fontSize="2rem" color="var(--primary-color)" />
					{open && <Menu />}
				</div>
			</header>
		</div>
	);
}

export default Header;
