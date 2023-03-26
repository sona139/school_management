import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styled from "./Menu.module.scss";

const cx = classNames.bind(styled);

function MenuItem({ data }) {
	return (
		<div className={cx("item")}>
			<FontAwesomeIcon icon={data.icon} />
			<p className={cx("title")}>{data.title}</p>
		</div>
	);
}

export default MenuItem;
