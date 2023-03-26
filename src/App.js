import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { publicRoutes } from "./routes";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					{publicRoutes.map((route, index) => {
						const Component = route.component;
						const Layout = route.layout || DefaultLayout;

						return (
							<Route
								key={index}
								path={route.path}
								element={
									<Layout>
										<Component />
									</Layout>
								}
							/>
						);
					})}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
