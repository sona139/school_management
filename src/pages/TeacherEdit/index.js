import DefaultPageEdit from "../DefaultPageEdit";

const titles = [
	"Mã giảng viên",
	"Tên giảng viên",
	"Giới tính",
	"Ngày sinh",
	"Số điện thoại",
	"Lương",
	"Khoa",
];

function TeacherEdit() {
	return <DefaultPageEdit titles={titles} name="Giảng viên" />;
}

export default TeacherEdit;
