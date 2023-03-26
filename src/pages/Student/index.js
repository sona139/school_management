import Table from "~/components/Table";
import config from "~/config";
import { useStore } from "~/store";
import DefaultPage from "../DefaultPage";

const titles = [
	"Mã sinh viên",
	"Tên sinh viên",
	"Lớp",
	"Giới tính",
	"Ngày sinh",
	"Số điện thoại",
	"Khoa",
];

function Student() {
	const [state, dispath] = useStore();
	const students = state[2];
	return (
		<DefaultPage title="Sinh Viên" to={config.routes.studentEdit}>
			<Table item={students} titles={titles} />
		</DefaultPage>
	);
}

export default Student;
