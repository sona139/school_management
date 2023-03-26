import Header from "./Header";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
	return (
		<div style={{ display: "flex", minHeight: "100vh", width: "100%" }}>
			<Sidebar />
			<div style={{ flex: 1 }}>
				<Header />
				{children}
			</div>
		</div>
	);
}

export default DefaultLayout;
