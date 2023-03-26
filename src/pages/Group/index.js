import Table from "~/components/Table";
import config from "~/config";
import { useStore } from "~/store";
import DefaultPage from "../DefaultPage";

const titles = ["Mã lớp", "Tên lớp", "Khoa"];

function Group() {
	const [state, dispath] = useStore();
	const groups = state[1];
	return (
		<DefaultPage title="Lớp" to={config.routes.groupEdit}>
			<Table item={groups} titles={titles} />
		</DefaultPage>
	);
}

export default Group;
