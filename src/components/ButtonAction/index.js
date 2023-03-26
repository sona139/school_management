import { Link } from "react-router-dom";

function ButtonAction({ icon, to }) {
	const Icon = icon;
	return (
		<Link to={to}>
			<Icon />
		</Link>
	);
}

export default ButtonAction;
