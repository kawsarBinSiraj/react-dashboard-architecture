import React from 'react';
import './AppNavigation.scss';
import { Nav, NavDropdown } from 'react-bootstrap';
import { DropdownSubmenu, NavDropdownMenu } from 'react-bootstrap-submenu';
import { Link, NavLink } from 'react-router-dom';
import { RiSeedlingLine, RiBubbleChartLine } from 'react-icons/ri';
import { AiOutlineLineChart, AiOutlinePieChart } from 'react-icons/ai';
import { GoHome, GoPrimitiveDot } from 'react-icons/go';

const AppNavigation = () => {
	return (
		<>
			<div id="app-navigation" className="position-fixed overflow-hidden start-0 top-0 p-3 bg-theme-color">
				<Link to={'/'} className="logo mb-2 text-light text-decoration-none d-inline-flex align-items-center display-5 mb-0" style={{ height: 'calc(var(--header-height) + 0px)' }}>
					<span className='text-nowrap'>ERP</span>
				</Link>
				<Nav className="flex-column ps-1 align-items-start">
					<Nav.Link as={NavLink} to={'/'}>
						<GoHome className="flex-shrink-0" /> Dashboard
					</Nav.Link>

					<NavDropdownMenu
						title={
							<>
								<AiOutlineLineChart className="flex-shrink-0" /> Finance
							</>
						}
					>
						<NavDropdown.Item as={Link} to="/">
							<GoPrimitiveDot size={'.6rem'} className="flex-shrink-0" /> Finance 1
						</NavDropdown.Item>
						<DropdownSubmenu
							href="#"
							title={
								<>
									<GoPrimitiveDot size={'.6rem'} className="flex-shrink-0" /> Finance 2
								</>
							}
						>
							<NavDropdown.Item as={Link} to="/">
								<GoPrimitiveDot size={'.6rem'} className="flex-shrink-0" /> Submenu 1
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/">
								<GoPrimitiveDot size={'.6rem'} className="flex-shrink-0" /> Submenu 2
							</NavDropdown.Item>
						</DropdownSubmenu>
					</NavDropdownMenu>

					<NavDropdown
						title={
							<>
								<AiOutlinePieChart className="flex-shrink-0" /> Hrm
							</>
						}
					>
						<NavDropdown.Item as={Link} to="/">
							<GoPrimitiveDot size={'.6rem'} className="flex-shrink-0" /> Hrm Management
						</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown
						title={
							<>
								<RiBubbleChartLine className="flex-shrink-0" /> Service
							</>
						}
					>
						<NavDropdown.Item as={Link} to="/">
							<GoPrimitiveDot size={'.6rem'} /> Service Management
						</NavDropdown.Item>
					</NavDropdown>
					<NavDropdownMenu
						title={
							<>
								<RiSeedlingLine className="flex-shrink-0" /> Global Settings
							</>
						}
					>
						<NavDropdown.Item as={Link} to="/">
							<GoPrimitiveDot size={'.6rem'} className="flex-shrink-0" /> Multi Currency Management
						</NavDropdown.Item>
						<NavDropdown.Item as={Link} to="/">
							<GoPrimitiveDot size={'.6rem'} className="flex-shrink-0" /> System Settings
						</NavDropdown.Item>
						<NavDropdown.Item as={Link} to="/">
							<GoPrimitiveDot size={'.6rem'} className="flex-shrink-0" /> Tax Settings
						</NavDropdown.Item>
						<NavDropdown.Item as={Link} to="/global-settings/theme-settings">
							<GoPrimitiveDot size={'.6rem'} className="flex-shrink-0" /> Theme Settings
						</NavDropdown.Item>
					</NavDropdownMenu>
				</Nav>
			</div>
		</>
	);
};

export default AppNavigation;
