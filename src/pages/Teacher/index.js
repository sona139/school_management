import Table from "~/components/Table";
import config from "~/config";
import { useStore } from "~/store";
import DefaultPage from "../DefaultPage";

const titles = [
	"Mã giảng viên",
	"Tên giảng viên",
	"Giới tính",
	"Ngày sinh",
	"Số điện thoại",
	"Lương",
	"Khoa",
];

function Teacher() {
	const [state, dispath] = useStore();
	const teachers = state[4];
	return (
		<DefaultPage title="Giảng viên" to={config.routes.teacherEdit}>
			<Table item={teachers} titles={titles} />
		</DefaultPage>
	);
}

export default Teacher;
