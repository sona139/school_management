import styled from "./Input.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styled);

function Input({ placeholder }) {
	return <input placeholder={placeholder} className={cx("wrapper")} />;
}

export default Input;
