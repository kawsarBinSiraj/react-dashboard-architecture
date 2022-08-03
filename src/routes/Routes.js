import React from 'react';
import { Routes as PathWays, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';

/* {finance module pages} */
import LoanManagement from '../pages/Finance/BankManagement';
import BankManagement from '../pages/Finance/BankManagement';

/* {hrm module pages} */
import DocsManagement from '../pages/Hrm/DocsManagement';

/* {GlobalSettings pages} */
import ThemeSettings from '../pages/GlobalSettings/ThemeSettings';

const Routes = () => {
	return (
		<>
			<PathWays>
				<Route path="/" element={<ProtectedRoute isAuth={true} redirectTo="/login" />}>
					<Route path="" element={<Dashboard />} />
				</Route>

				{/* finance module routes */}
				<Route path="/finance" element={<ProtectedRoute isAuth={true} redirectTo="/login" />}>
					<Route path="loan-management" element={<LoanManagement />} />
					<Route path="bank-management" element={<BankManagement />} />
				</Route>

				{/* hrm module routes */}
				<Route path="/hrm" element={<ProtectedRoute isAuth={true} redirectTo="/login" />}>
					<Route path="docs-management" element={<DocsManagement />} />
				</Route>


				{/* global settings routes */}
				<Route path="/global-settings" element={<ProtectedRoute isAuth={true} redirectTo="/login" />}>
					<Route path="theme-settings" element={<ThemeSettings />} />
				</Route>

				<Route path="*" element={<NotFound />} />
			</PathWays>
		</>
	);
};
export default Routes;
