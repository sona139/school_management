import DefaultPageEdit from "../DefaultPageEdit";

const titles = ["Mã môn học", "Tên môn học", "Số tín chỉ"];

function SubjectEdit() {
	return <DefaultPageEdit titles={titles} name="Môn học" />;
}

export default SubjectEdit;
