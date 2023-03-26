import config from "~/config";
import { Faculty, Group, Home, Student, Subject, Teacher } from "~/pages";
import FacultyEdit from "~/pages/FacultyEdit";
import GroupEdit from "~/pages/GroupEdit";
import StudentEdit from "~/pages/StudentEdit";
import SubjectEdit from "~/pages/SubjectEdit";
import TeacherEdit from "~/pages/TeacherEdit";

const publicRoutes = [
	{
		path: config.routes.home,
		component: Home,
	},
	{
		path: config.routes.faculty,
		component: Faculty,
	},
	{
		path: config.routes.facultyEdit,
		component: FacultyEdit,
	},
	{
		path: config.routes.group,
		component: Group,
	},
	{
		path: config.routes.groupEdit,
		component: GroupEdit,
	},
	{
		path: config.routes.student,
		component: Student,
	},
	{
		path: config.routes.studentEdit,
		component: StudentEdit,
	},
	{
		path: config.routes.teacher,
		component: Teacher,
	},
	{
		path: config.routes.teacherEdit,
		component: TeacherEdit,
	},
	{
		path: config.routes.subject,
		component: Subject,
	},
	{
		path: config.routes.subjectEdit,
		component: SubjectEdit,
	},
];

export { publicRoutes };
