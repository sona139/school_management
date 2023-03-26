import classNames from "classnames/bind";
import styled from "./DefaultPageEdit.module.scss";
import Popper from "~/components/Popper";
import { CancelIcon, ObligatoryIcon, SaveIcon } from "~/components/Icons";
import Input from "~/components/Input";
import Button from "~/components/Button";
import config from "~/config";

const cx = classNames.bind(styled);

function DefaultPageEdit({ titles = [], name }) {
	const pathName = window.location.pathname;
	return (
		<Popper>
			<div className={cx("wrapper")}>
				<h2 className={cx("title")}>Thêm mới thông tin {name}</h2>
				{titles.map((title, index) => (
					<div key={index}>
						<h4>
							{title}
							<ObligatoryIcon />:
						</h4>
						<Input placeholder={title} />
					</div>
				))}
				<footer className={cx("footer")}>
					<Button
						to={config.routes.home}
						icon={SaveIcon}
						className={cx("button")}
					>
						Lưu
					</Button>
					<Button
						to={pathName.slice(0, pathName.length - 5)}
						icon={CancelIcon}
						error
						className={cx("button")}
					>
						Cancle
					</Button>
				</footer>
			</div>
		</Popper>
	);
}

export default DefaultPageEdit;
