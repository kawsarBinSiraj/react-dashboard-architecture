import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiSeedlingFill } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';
import _ from 'lodash';
import { CardTitle } from '../../AppConduct/Index';
const colorConvert = require('color-convert');
const axios = require('axios');

const ThemeSettings = () => {
	const { selectedThemeColor, isNavCollapsed } = useSelector((store) => store?.globalSettingsReducer);
	const [themeColor] = useState(selectedThemeColor ? `#${colorConvert.hsl.hex(selectedThemeColor)}` : '#5a1ac1');
	const dispatch = useDispatch();
	const [googleFonts, setGoogleFonts] = useState();
	const clrRef = useRef();
	const fontRef = useRef();
	const navRef = useRef();
	const gutterRef = useRef();
	const radiusRef = useRef();
	const fontSizeRef = useRef();

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
			<div className="theme-shadow bg-white rounded p-4">
				<CardTitle className="mb-3" title="Theme Settings">
					<RiSeedlingFill className="flex-shrink-0" />
				</CardTitle>
				<div className="form-group mb-4">
					<label className="form-label mb-1">Theme Color</label>
					<div className="row gx-3">
						<div className="col-lg-8">
							<input ref={clrRef} type="color" style={{ height: '32px' }} defaultValue={themeColor} className="form-control p-1 border-1" />
							<div className="d-flex ps-1 mt-2 gap-0">
								<span style={{ width: '27px', height: '27px' }} className="d-inline-block bg-theme-color"></span>
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
						<div className="col-lg-4">
							<button
								type="button"
								onClick={() => {
									let hsl = colorConvert.hex.hsl(clrRef.current.value);
									dispatch({
										type: 'SET_THEME_COLOR',
										payload: {
											color: hsl,
										},
									});
								}}
								className="btn btn-erp btn-sm btn-dark"
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
							<div className="col-lg-8">
								<select className="form-select form-select-sm" aria-label="Default select example" ref={fontRef}>
									{googleFonts.map((font, index) => {
										return (
											<option key={index} value={font?.family}>
												{font?.family}
											</option>
										);
									})}
								</select>
							</div>
							<div className="col-lg-4">
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
									className="btn btn-erp btn-dark btn-sm"
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
						<div className="col-lg-8">
							<input type="number" ref={navRef} placeholder="Navigation/Sidebar Width" className="form-control form-control-sm" />
						</div>
						<div className="col-lg-4">
							<button
								type="button"
								className="btn btn-erp btn-dark btn-sm"
								onClick={() => {
									if (isNavCollapsed) return alert('You can"t set custom width under the nav collapsed circumstances !!')
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
					<div className="row align-items-center gx-3">
						<div className="col-lg-8">
							<input type="number" ref={gutterRef} placeholder="Theme Gutter" className="form-control form-control-sm" />
						</div>
						<div className="col-lg-4">
							<button
								type="button"
								className="btn btn-erp btn-sm btn-dark"
								onClick={() => {
									dispatch({
										type: 'SET_THEME_GUTTER',
										payload: {
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
						<div className="col-lg-8">
							<input type="number" ref={radiusRef} placeholder="Theme Gutter" className="form-control form-control-sm" />
						</div>
						<div className="col-lg-4">
							<button
								type="button"
								className="btn btn-erp btn-sm btn-dark"
								onClick={() => {
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
				<div className="form-group">
					<label className="form-label mb-1">Font Size (PX)</label>
					<div className="row align-items-center gx-3">
						<div className="col-lg-8">
							<input type="number" ref={fontSizeRef} min={'12'} max={'42'} placeholder="Ex: 14" className="form-control form-control-sm" />
						</div>
						<div className="col-lg-4">
							<button
								type="button"
								className="btn btn-erp btn-sm btn-dark"
								onClick={() => {
									if (fontSizeRef.current.value < 12) return alert('Below 12px is not allowed !')
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
			</div>
		</>
	);
};

export { ThemeSettings };
