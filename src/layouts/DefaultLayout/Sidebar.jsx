import classNames from "classnames/bind";

import styled from "./DefaultLayout.module.scss";
import config from "~/config";
import {
	GroupIcon,
	FacultyIcon,
	HomeIcon,
	StudentIcon,
	SubjectIcon,
	TeacherIcon,
} from "~/components/Icons";
import { Link } from "react-router-dom";
import { SidebarMenu, SidebarMenuItem } from "./components/SidebarMenu";

const cx = classNames.bind(styled);

const menuSidebar = [
	{
		title: "Trang chủ",
		to: config.routes.home,
		Icon: <HomeIcon color="currentColor" />,
	},
	{
		title: "Khoa",
		to: config.routes.faculty,
		Icon: <FacultyIcon color="currentColor" />,
	},
	{
		title: "Lớp",
		to: config.routes.group,
		Icon: <GroupIcon color="currentColor" />,
	},
	{
		title: "Sinh viên",
		to: config.routes.student,
		Icon: <StudentIcon color="currentColor" />,
	},
	{
		title: "Môn học",
		to: config.routes.subject,
		Icon: <SubjectIcon color="currentColor" />,
	},
	{
		title: "Giáo viên",
		to: config.routes.teacher,
		Icon: <TeacherIcon color="currentColor" />,
	},
];

function Sidebar() {
	return (
		<SidebarMenu style={{ zIndex: 9999 }}>
			<Link to={config.routes.home} className={cx("logo")}>
				QLSV
			</Link>
			{menuSidebar.map((item, index) => (
				<SidebarMenuItem
					key={index}
					title={item.title}
					to={item.to}
					Icon={item.Icon}
				/>
			))}
		</SidebarMenu>
	);
}

export default Sidebar;
