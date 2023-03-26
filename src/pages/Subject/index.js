import Table from "~/components/Table";
import config from "~/config";
import { useStore } from "~/store";
import DefaultPage from "../DefaultPage";

const titles = ["Mã môn học", "Tên môn học", "Số tín chỉ"];

function Subject() {
	const [state, dispath] = useStore();
	const subject = state[3];
	return (
		<DefaultPage title="Môn Học" to={config.routes.subjectEdit}>
			<Table item={subject} titles={titles} />
		</DefaultPage>
	);
}

export default Subject;
