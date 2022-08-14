import React, { useState } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import { RiNotification3Line } from 'react-icons/ri';
import { BsChatDots } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Divide as Hamburger } from 'hamburger-react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import { SiGooglefonts } from 'react-icons/si';
import { RiFontSize } from 'react-icons/ri';
import './AppHeader.scss';

const AppHeader = () => {
	const [isNavigationCollapsed, setIsNavigationCollapsed] = useState(false);
	const [isDarkMode, setDarkMode] = useState(false);
	const dispatch = useDispatch();
	const { isThemeDarkMode, selectedFontSize, isGutterOnlyBody, selectedHeaderPosition } = useSelector((store) => store?.globalSettingsReducer);

	/**
	 * description :- increaseFontSize
	 * created_at:- 08/08/2022 15:45:14
	 */
	const increaseFontSize = () => {
		if (selectedFontSize > 26) return alert('Above 26px is not allowed');
		dispatch({ type: 'INCREASE_FONT_SIZE' });
	};

	/**
	 * description :- decreaseFontSize
	 * created_at:- 08/08/2022 15:45:14
	 */
	const decreaseFontSize = () => {
		if (selectedFontSize < 12) return alert('Below 12px is not allowed');
		dispatch({ type: 'DECREASE_FONT_SIZE' });
	};

	/**
	 * description :- resetFontSize
	 * created_at:- 08/08/2022 15:45:14
	 */
	const resetFontSize = () => {
		dispatch({ type: 'RESET_FONT_SIZE' });
	};

	return (
		<>
			<header
				id="app-header"
				className={` ${isGutterOnlyBody && 'isGutterOnlyBody'} position-${
					selectedHeaderPosition ? selectedHeaderPosition : 'fixed'
				} px-3 header-height top-0 end-0 bg-theme-color-alfa-10 rounded theme-shadow  ${isThemeDarkMode === true ? 'dark-mode border-dark' : 'border-theme-color-alfa-50'}`}
			>
				<div className="row header-height align-items-center">
					<div className="col-4">
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
					<div className="col-8">
						<div className="header-right d-flex align-items-center gap-3 justify-content-end">
							<button type="button" className="mt-1 btn border-0 fs-5 p-0 position-relative">
								<nav className="hamburgerMenu">
									<input type="checkbox" className="menu-open d-none" name="menu-open" id="menu-open" />
									<label className="menu-open-button" htmlFor="menu-open">
										<SiGooglefonts />
									</label>
									<span className="btn btn-dark p-0 menu-item increase" onClick={increaseFontSize}>
										<RiFontSize size={'1.2rem'} />
									</span>
									<span className="btn btn-dark p-0 menu-item decrease" onClick={decreaseFontSize}>
										<RiFontSize size={'1rem'} />
									</span>
									<span className="btn btn-dark p-0 menu-item reset" onClick={resetFontSize}>
										<BsArrowCounterclockwise />
									</span>
								</nav>
							</button>
							<button type="button" className="btn border-0 fs-5 p-0">
								<DarkModeSwitch
									checked={isDarkMode}
									onChange={(checked) => {
										setDarkMode(checked);
										dispatch({ type: 'SET_THEME_MODE', payload: checked });
									}}
									size={20}
								/>
							</button>
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
