import React, { useState } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import { RiNotification3Line } from 'react-icons/ri';
import { BsChatDots } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Divide as Hamburger } from 'hamburger-react';

const AppHeader = () => {
	const [isNavigationCollapsed, setIsNavigationCollapsed] = useState(false);
	const dispatch = useDispatch();

	return (
		<>
			<header id="app-header" className="px-3 position-fixed header-height top-0 end-0 bg-theme-color-alfa-10 border border-theme-color-alfa-25 rounded">
				<div className="row header-height align-items-center">
					<div className="col-xl-6">
						<button type="button" className="btn border-0 fs-3 p-0">
							<Hamburger
								size={25}
								toggled={isNavigationCollapsed}
								toggle={setIsNavigationCollapsed}
								onToggle={(toggled) => {
									dispatch({ type: 'NAVIGATION_COLLAPSED', payload: toggled });
								}}
							/>
						</button>
					</div>
					<div className="col-xl-6">
						<div className="header-right d-flex align-items-center gap-3 justify-content-end">
							<button type="button" className="btn border-0 fs-5 p-0">
								<BsChatDots />
							</button>
							<button type="button" className="btn border-0 fs-5 p-0">
								<RiNotification3Line />
							</button>
							<Dropdown className="position-relative ms-3">
								<Dropdown.Toggle className="btn bg-transparent text-dark border-0 p-0">
									<img
										src={'https://kawsarbinsiraj.github.io/assets/img/myself.jpg'}
										alt="img"
										className="img-fluid rounded-circle border me-2"
										style={{ width: '28px', height: '28px', objectFit: 'cover', objectPosition: 'center' }}
									/>
									Kawsar Bin Siraj
								</Dropdown.Toggle>
								<Dropdown.Menu className="rounded">
									<Dropdown.Item as={Button}>Logout</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default AppHeader;
