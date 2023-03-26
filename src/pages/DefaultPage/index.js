import classNames from "classnames/bind";
import styled from "./DefaultPage.module.scss";
import Popper from "~/components/Popper";
import Button from "~/components/Button";
import { AddIcon, SearchIcon } from "~/components/Icons";

const cx = classNames.bind(styled);

function DefaultPage({ children, title, to }) {
	return (
		<Popper className={cx("wrapper")}>
			<Button icon={AddIcon} to={to} className={cx("add")}>
				Thêm mới
			</Button>
			<h1 className={cx("title")}>Danh sách {title}</h1>
			<div className={cx("search")}>
				<input className={cx("input")} type="text" />
				<Button icon={SearchIcon}>Tìm kiếm</Button>
			</div>
			{children}
		</Popper>
	);
}

export default DefaultPage;
