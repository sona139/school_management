import {
	faAdd,
	faBookOpen,
	faFloppyDisk,
	faHouse,
	faLightbulb,
	faPalette,
	faPenToSquare,
	faShieldHalved,
	faTrash,
	faUser,
	faUserTie,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MoreIcon = ({
	width = "3.2rem",
	height = "3.2rem",
	className,
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
		>
			<path
				d="M5 6H12H19M5 12H19M5 18H19"
				stroke="#fff"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export const UserIcon = ({
	color = "#fff",
	fontSize = "1.6rem",
	className,
}) => (
	<FontAwesomeIcon
		color={color}
		fontSize={fontSize}
		className={className}
		icon={faUser}
	/>
);

export const SearchIcon = ({ width = "2rem", height = "2rem", className }) => (
	<svg
		width={width}
		data-e2e=""
		height={height}
		className={className}
		viewBox="0 0 48 48"
		fill="#fff"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
		></path>
	</svg>
);

export const HomeIcon = ({
	color = "#fff",
	fontSize = "1.6rem",
	className,
}) => (
	<FontAwesomeIcon
		color={color}
		fontSize={fontSize}
		icon={faHouse}
		className={className}
	/>
);

export const FacultyIcon = ({
	color = "#fff",
	fontSize = "1.6rem",
	className,
}) => (
	<FontAwesomeIcon
		color={color}
		fontSize={fontSize}
		icon={faShieldHalved}
		className={className}
	/>
);

export const GroupIcon = ({
	color = "#fff",
	fontSize = "1.6rem",
	className,
}) => (
	<FontAwesomeIcon
		color={color}
		fontSize={fontSize}
		icon={faPalette}
		className={className}
	/>
);

export const StudentIcon = ({
	color = "#fff",
	fontSize = "1.6rem",
	className,
}) => (
	<FontAwesomeIcon
		color={color}
		fontSize={fontSize}
		icon={faUserTie}
		className={className}
	/>
);

export const SubjectIcon = ({
	color = "#fff",
	fontSize = "1.6rem",
	className,
}) => (
	<FontAwesomeIcon
		color={color}
		fontSize={fontSize}
		icon={faBookOpen}
		className={className}
	/>
);

export const TeacherIcon = ({
	color = "#fff",
	fontSize = "1.6rem",
	className,
}) => (
	<FontAwesomeIcon
		color={color}
		fontSize={fontSize}
		icon={faLightbulb}
		className={className}
	/>
);

export const EditIcon = ({ fontSize = "1.6rem", color = "#045e7a" }) => (
	<FontAwesomeIcon
		style={{ marginRight: "8px" }}
		fontSize={fontSize}
		color={color}
		icon={faPenToSquare}
	/>
);

export const DeleteIcon = ({ fontSize = "1.6rem", color = "#045e7a" }) => (
	<FontAwesomeIcon fontSize={fontSize} color={color} icon={faTrash} />
);

export const AddIcon = ({ fontSize = "1.6rem", color = "#fff" }) => (
	<FontAwesomeIcon fontSize={fontSize} color={color} icon={faAdd} />
);

export const ObligatoryIcon = ({ fontSize = "1.6rem", color = "#d93025" }) => (
	<span
		style={{
			fontSize: fontSize,
			color: color,
			paddingLeft: "0.25rem",
			lineHeight: "2.4rem",
			fontWeight: "400",
		}}
	>
		*
	</span>
);

export const SaveIcon = ({ fontSize = "1.6rem", color = "#fff" }) => (
	<FontAwesomeIcon fontSize={fontSize} color={color} icon={faFloppyDisk} />
);

export const CancelIcon = ({ fontSize = "1.6rem", color = "#fff" }) => (
	<FontAwesomeIcon fontSize={fontSize} color={color} icon={faXmark} />
);
