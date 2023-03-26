import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styled from "./Item.module.scss";

const cx = classNames.bind(styled);

function Item({ item }) {
	const Icon = item.icon;
	return (
		<Link to={item.link} className={cx("wrapper")}>
			<div className={cx("icon", item.id)}>
				<Icon fontSize="3rem" />
			</div>
			<p className={cx("title")}>{item.title}</p>
			<h1 className={cx("counter")}>{item.data.length}</h1>
			<div className={cx("show-more")}>
				<span className={cx("description")}>Xem thêm</span>
				<FontAwesomeIcon icon={faAngleRight} />
			</div>
		</Link>
	);
}

export default Item;
