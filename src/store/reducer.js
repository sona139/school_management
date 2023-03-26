import {
	GroupIcon,
	FacultyIcon,
	StudentIcon,
	SubjectIcon,
	TeacherIcon,
} from "~/components/Icons";
import config from "~/config";

export const initState = [
	{
		id: "faculty",
		title: "Khoa",
		icon: FacultyIcon,
		link: config.routes.faculty,
		data: [
			{ id: "CN", name: "Công nghệ thông tin" },
			{ id: "KT", name: "Kế toán" },
		],
	},
	{
		id: "group",
		title: "Lớp",
		icon: GroupIcon,
		link: config.routes.group,
		data: [
			{
				id: "GR01",
				name: "D20CQCN08-B",
				faculty: "Công nghệ thông tin",
			},
		],
	},
	{
		id: "student",
		title: "Sinh viên",
		icon: StudentIcon,
		link: config.routes.student,
		data: [
			{
				id: "SV01",
				name: "Bùi Hồng Sơn",
				group: "D20CQCN08-B",
				date: "13/09/2002",
				sex: "Nam",
				faculty: "Công nghệ thông tin",
				phone: "12345678",
				homeTown: "Hà Tĩnh",
				gpa: "3.61",
			},
			{
				id: "SV02",
				name: "Nguyễn Thị Nam",
				group: "D20CQCN08-B",
				date: "21/12/2002",
				sex: "Nữ",
				faculty: "Công nghệ thông tin",
				phone: "14217278",
				homeTown: "Hà Nội",
				gpa: "2.32",
			},
		],
	},
	{
		id: "subject",
		title: "Môn học",
		icon: SubjectIcon,
		link: config.routes.subject,
		data: [
			{
				id: "SB01",
				name: "Giải tích 1",
				credits: 2,
			},
			{
				id: "SB02",
				name: "Giải tích 2",
				credits: 3,
			},
			{
				id: "SB03",
				name: "Toán cao cấp",
				credits: 3,
			},
			{
				id: "SB04",
				name: "Xác suất thống kê",
				credits: 3,
			},
			{
				id: "SB05",
				name: "Vật lý",
				credits: 4,
			},
		],
	},
	{
		id: "teacher",
		title: "Giảng viên",
		icon: TeacherIcon,
		link: config.routes.teacher,
		data: [
			{
				id: "TC01",
				name: "Nguyễn Thị Hoa",
				date: "1/11/1987",
				sex: "Nữ",
				salary: 20000000,
				phone: "1200127278",
				faculty: "Công nghệ thông tin",
			},
			{
				id: "TC02",
				name: "Nguyễn Xuân Hoàng",
				date: "21/2/1991",
				sex: "Nam",
				salary: 15000000,
				phone: "821317278",
				faculty: "Kế toán",
			},
		],
	},
];

function reducer(state, action) {
	switch (action.type) {
	}
}

export default reducer;
