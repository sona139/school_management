import classNames from "classnames/bind";
import ButtonAction from "../ButtonAction";
import { DeleteIcon, EditIcon } from "../Icons";
import styled from "./Table.module.scss";

const cx = classNames.bind(styled);

function Table({ item, titles, to }) {
	return (
		<table className={cx("table")}>
			<thead style={{ fontWeight: "bold" }}>
				<tr>
					{titles.map((title, index) => (
						<td key={index}>{title}</td>
					))}
				</tr>
			</thead>
			<tbody>
				{item.data.map((item, index) => (
					<tr key={index}>
						<td>{item.id}</td>
						<td>{item.name}</td>
						{item.group && <td>{item.group}</td>}
						{item.sex && <td>{item.sex}</td>}
						{item.date && <td>{item.date}</td>}
						{item.phone && <td>{item.phone}</td>}
						{item.salary && <td>{item.salary}</td>}
						{item.faculty && <td>{item.faculty}</td>}
						{item.credits && <td>{item.credits}</td>}
						<ButtonAction to={to} icon={EditIcon} />
						<ButtonAction icon={DeleteIcon} />
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Table;
