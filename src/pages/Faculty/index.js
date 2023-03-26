import DefaultPage from "../DefaultPage";
import { useStore } from "~/store";
import Table from "~/components/Table";
import config from "~/config";

const titles = ["Mã khoa", "Tên khoa"];

const Faculty = () => {
	const [state, dispath] = useStore();
	const faculties = state[0];
	return (
		<DefaultPage title="Khoa" to={config.routes.facultyEdit}>
			<Table item={faculties} titles={titles} />
		</DefaultPage>
	);
};

export default Faculty;
