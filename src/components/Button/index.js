import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styled from "./Button.module.scss";

const cx = classNames.bind(styled);

function Button({ children, icon, error, className, to, passProps = {} }) {
	const Icon = icon;
	const classes = cx("wrapper", { [className]: true, error });
	const props = {
		...passProps,
	};
	let Component = "button";
	if (to) {
		Component = Link;
		props.to = to;
	}
	return (
		<Component {...props} className={classes}>
			<span className={cx("content")}>{children}</span>
			{icon && <Icon />}
		</Component>
	);
}

export default Button;
