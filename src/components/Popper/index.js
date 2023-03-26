import classNames from "classnames/bind";
import styled from "./Popper.module.scss";

const cx = classNames.bind(styled);

function Popper({ children, className }) {
	return (
		<div className={cx("wrapper")}>
			<div className={cx("container", className)}>{children}</div>
		</div>
	);
}

export default Popper;
