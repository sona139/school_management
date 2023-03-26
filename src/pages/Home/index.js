import classNames from "classnames/bind";
import styled from "./Home.module.scss";

import { useStore } from "~/store";
import Item from "./Item";
import Popper from "~/components/Popper";

const cx = classNames.bind(styled);

function Home() {
	const [state, dispath] = useStore();
	return (
		<Popper className={cx("wrapper")}>
			{state.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</Popper>
	);
}

export default Home;
