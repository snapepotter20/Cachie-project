import React from "react"
import Header from "../Header";
import { Route,Switch } from "react-router-dom";
import Sidebar from "../Siderbar";
import "./dashboard.css";
import Users from "../Users";
import FunCounter from"../FunCounter";
import FunCities from "../FunCities";
import Products from "../Products";

import UserForm from "../UserForm";
import DashboardPanel from "../DashboardPanel";
import ProductForm from "../ProductForm";
import Transactions from "../Transactions";
import Categories from "../Categories";

function Dashboard(props) {
	return (
		<div class="m-dashboard">
			<div className="content-wrap">
				<div className="d-sidebar">
					<Sidebar />
				</div>
				<div className="d-main">
					<div className="d-top-nav">
						<Header />
					</div>
					<Switch>
						<Route
							path={`${props.match.path}/users/new`}
							component={UserForm}
						/>
						<Route
							path={`${props.match.path}/users/update/:id`}
							component={UserForm}
						/>
						<Route path={`${props.match.path}/users`} component={Users} />
						<Route
							path={`${props.match.path}/products/new`}
							component={ProductForm}
						/>
						<Route
							path={`${props.match.path}/products/update/:id`}
							component={ProductForm}
						/>
						<Route path={`${props.match.path}/products`} component={Products} />
						<Route
							path={`${props.match.path}/transactions`}
							component={Transactions}
						/>
						<Route
							path={`${props.match.path}/categories`}
							component={Categories}
						/>
						{/* <Route path={`${props.match.path}/about`} component={About} /> */}
						<Route
							path={`${props.match.path}/main`}
							component={DashboardPanel}
						/>
					</Switch>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;