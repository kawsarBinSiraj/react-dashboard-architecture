import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiSeedlingFill } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';
import _ from 'lodash';
import { CardTitle } from '../../AppConduct/Index';
const colorConvert = require('color-convert');
const axios = require('axios');

const ThemeSettings = () => {
	const { selectedThemeColor, selectedFontColor, isNavCollapsed, isThemeDarkMode } = useSelector((store) => store?.globalSettingsReducer);
	const [themeColor] = useState(selectedThemeColor ? `#${colorConvert.hsl.hex(selectedThemeColor)}` : '#5a1ac1');
	const [themeFontColor] = useState(selectedFontColor ? selectedFontColor : '#ffffff');
	const dispatch = useDispatch();
	const [googleFonts, setGoogleFonts] = useState();
	const [isGutterOnlyBody, setIsGutterOnlyBody] = useState(false);
	const clrRef = useRef();
	const fontRef = useRef();
	const navRef = useRef();
	const gutterRef = useRef();
	const radiusRef = useRef();
	const fontSizeRef = useRef();
	const fontColorRef = useRef();
	const headerPositionRef = useRef();

	const getAllGoogleFonts = async () => {
		try {
			const response = await axios.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDwNuK_P2gdj0K3T_8GWhkN6i1fzmbKO2A');
			setGoogleFonts(response?.data?.items);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getAllGoogleFonts();
	}, []);

	return (
		<>
			<div className="theme-card theme-shadow bg-white rounded p-4">
				<CardTitle className="mb-3" title="Theme Settings">
					<RiSeedlingFill className="flex-shrink-0" />
				</CardTitle>
				<div className="form-group mb-4">
					<label className="form-label mb-1">Theme Color</label>
					<div className="row gx-3">
						<div className="col-md-9">
							<div className="form-control p-1 rounded overflow-hidden">
								<input ref={clrRef} type="color" defaultValue={themeColor} className="form-control border-0 p-0" />
							</div>
							<div className="d-flex ps-1 mt-2 gap-0">
								<span style={{ width: '27px', height: '27px' }} className="p-1 d-inline-block bg-theme-color"></span>
								<span style={{ width: '27px', height: '27px' }} className="d-inline-flex align-items-center justify-content-center">
									<BsArrowRight />
								</span>
								<span style={{ width: '27px', height: '27px' }} className="d-inline-block bg-theme-palate-3"></span>
								<span style={{ width: '27px', height: '27px' }} className="d-inline-block bg-theme-palate-1"></span>
								<span style={{ width: '27px', height: '27px' }} className="d-inline-block bg-theme-palate-2"></span>
								<span style={{ width: '27px', height: '27px' }} className="d-inline-flex align-items-center justify-content-center">
									<BsArrowRight />
								</span>
								<span style={{ width: '27px', height: '27px' }} className="d-inline-block bg-theme-gradient"></span>
								<span style={{ width: '27px', height: '27px' }} className="d-inline-block bg-theme-gradient-alfa"></span>
							</div>
						</div>
						<div className="col-md-3">
							<button
								type="button"
								onClick={() => {
									if (isThemeDarkMode) return alert('theme customize allowed only for light mode');
									let hsl = colorConvert.hex.hsl(clrRef.current.value);
									dispatch({
										type: 'SET_THEME_COLOR',
										payload: {
											color: hsl,
										},
									});
								}}
								className="btn btn-erp rounded bg-gradient btn-dark"
							>
								Set Color
							</button>
						</div>
					</div>
				</div>

				<div className="form-group mb-3">
					<label className="form-label mb-1">Theme Font Color</label>
					<div className="row align-items-center gx-3">
						<div className="col-md-9">
							<div className="form-control p-1 rounded overflow-hidden">
								<input ref={fontColorRef} type="color" defaultValue={themeFontColor} className="form-control border-0 p-0 rounded" />
							</div>
						</div>
						<div className="col-md-3">
							<button
								type="button"
								className="btn btn-erp btn-dark bg-gradient rounded"
								onClick={() => {
									dispatch({
										type: 'SET_THEME_FONT_COLOR',
										payload: fontColorRef.current.value,
									});
								}}
							>
								Set Color
							</button>
						</div>
					</div>
				</div>
				{Array.isArray(googleFonts) && _.size(googleFonts) > 0 && (
					<div className="form-group mb-3">
						<label className="form-label mb-1">Theme Font</label>
						<div className="row align-items-center  gx-3">
							<div className="col-md-9">
								<select className="form-select rounded" aria-label="Default select example" ref={fontRef}>
									{googleFonts.map((font, index) => {
										return (
											<option key={index} value={font?.family}>
												{font?.family}
											</option>
										);
									})}
								</select>
							</div>
							<div className="col-md-3">
								<button
									type="button"
									onClick={() => {
										dispatch({
											type: 'SET_THEME_FONT',
											payload: {
												font: fontRef.current.value,
											},
										});
									}}
									className="btn btn-erp btn-dark bg-gradient rounded"
								>
									Set Font
								</button>
							</div>
						</div>
					</div>
				)}
				<div className="form-group mb-3">
					<label className="form-label mb-1">Navigation/Sidebar Width</label>
					<div className="row align-items-center gx-3">
						<div className="col-md-9">
							<input type="number" ref={navRef} placeholder="Navigation/Sidebar Width" className="form-control rounded" />
						</div>
						<div className="col-md-3">
							<button
								type="button"
								className="btn btn-erp btn-dark rounded bg-gradient"
								onClick={() => {
									let nv = navRef.current.value;
									if (_.isEmpty(nv) || _.isNil(nv)) return alert('Input value cant not be blank');
									if (nv < 225) return alert('Input value cant not be set less then 225px');
									if (nv > 400) return alert('Input value cant not be set above 400px');
									if (isNavCollapsed) return alert('You can"t set custom width under the nav collapsed circumstances !!');
									dispatch({
										type: 'SET_THEME_NAV_WIDTH',
										payload: {
											navWidth: navRef.current.value,
										},
									});
								}}
							>
								Set Width
							</button>
						</div>
					</div>
				</div>
				<div className="form-group mb-3">
					<label className="form-label mb-1">Theme Gutter</label>
					<div className="row gx-3">
						<div className="col-md-9">
							<input type="number" ref={gutterRef} placeholder="Theme Gutter" className="form-control rounded" />
							<div className="form-check mt-1">
								<input className="form-check-input" checked={isGutterOnlyBody} onChange={(e) => setIsGutterOnlyBody(e.target.checked)} type="checkbox" id="gutterApplicableRef" />
								<label className="form-check-label lh-0" htmlFor="gutterApplicableRef">
									<small>Gutter applicable inside the dashboard body only</small>
								</label>
							</div>
						</div>
						<div className="col-md-3">
							<button
								type="button"
								className="btn btn-erp rounded btn-dark bg-gradient"
								onClick={() => {
									let gv = gutterRef.current.value;
									if (_.isEmpty(gv) || _.isNil(gv) || gv < 0) return alert('Input value cant not be blank or less then 0');
									dispatch({
										type: 'SET_THEME_GUTTER',
										payload: {
											isGutterOnlyBody,
											gutter: gutterRef.current.value,
										},
									});
								}}
							>
								Set Gutter
							</button>
						</div>
					</div>
				</div>
				<div className="form-group mb-3">
					<label className="form-label mb-1">Theme Radius</label>
					<div className="row align-items-center gx-3">
						<div className="col-md-9">
							<input type="number" ref={radiusRef} placeholder="Theme Gutter" className="form-control rounded" />
						</div>
						<div className="col-md-3">
							<button
								type="button"
								className="btn btn-erp rounded btn-dark bg-gradient"
								onClick={() => {
									let rv = radiusRef.current.value;
									if (_.isEmpty(rv) || _.isNil(rv) || rv < 0) return alert('Input value cant not be blank or less then 0');
									dispatch({
										type: 'SET_THEME_RADIUS',
										payload: {
											radius: radiusRef.current.value,
										},
									});
								}}
							>
								Set Radius
							</button>
						</div>
					</div>
				</div>
				<div className="form-group mb-3">
					<label className="form-label mb-1">Font Size (PX)</label>
					<div className="row align-items-center gx-3">
						<div className="col-md-9">
							<input type="number" ref={fontSizeRef} min={'12'} max={'26'} placeholder="Ex: 14" className="form-control rounded" />
						</div>
						<div className="col-md-3">
							<button
								type="button"
								className="btn btn-erp rounded btn-dark bg-gradient"
								onClick={() => {
									let fv = fontSizeRef.current.value;
									if (_.isEmpty(fv) || _.isNil(fv)) return alert('Input value cant not be blank');
									if (fv < 12) return alert('Below 12px is not allowed !');
									if (fv > 26) return alert('Above 26px is not allowed !');
									dispatch({
										type: 'SET_THEME_FONT_SIZE',
										payload: {
											fontSize: fontSizeRef.current.value,
										},
									});
								}}
							>
								Set Size
							</button>
						</div>
					</div>
				</div>
				<div className="form-group mb-3">
					<label className="form-label mb-1">Header Position</label>
					<div className="row align-items-center gx-3">
						<div className="col-md-9">
							<div className="form-group d-flex align-items-center gap-3">
								<select className="form-select rounded" aria-label="Default select example" ref={headerPositionRef}>
									<option value={'fixed'}>Fixed</option>
									<option value={'absolute'}>Absolute</option>
								</select>
							</div>
						</div>
						<div className="col-md-3">
							<button
								type="button"
								className="btn btn-erp rounded btn-dark bg-gradient"
								onClick={() => {
									dispatch({
										type: 'SET_HEADER_POSITION',
										payload: {
											position: headerPositionRef.current.value,
										},
									});
								}}
							>
								Set Position
							</button>
						</div>
					</div>
				</div>
				<div className="form-group mb-3">
					<button
						type="button"
						className="btn btn-danger rounded"
						onClick={() => {
							if (window.confirm('Are you sure') === true) dispatch({ type: 'GLOBAL_SETTING_REDUCER_RESET' });
						}}
					>
						Reset Theme Settings
					</button>
				</div>
				{/* <div className="form-group mb-3">
					<label className="form-label mb-1">Form field format</label>
					<div className="row align-items-center gx-3">
						<div className="col-md-9">
							<div className="form-group d-flex align-items-center gap-3">
								<div class="form-check">
									<input class="form-check-input" type="radio" name="formFieldFormat" id="horizontal" />
									<label class="form-check-label" for="horizontal">
										Horizontal
									</label>
								</div>
								<div class="form-check">
									<input class="form-check-input" type="radio" defaultChecked name="formFieldFormat" id="vertical" />
									<label class="form-check-label" for="vertical">
										Vertical
									</label>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<button type="button" className="btn btn-erp rounded btn-dark bg-gradient">
								Set Format
							</button>
						</div>
					</div>
				</div> */}
			</div>
		</>
	);
};

export { ThemeSettings };
