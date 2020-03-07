import React from 'react';
import classes from './worlds.module.css'

const world =(props) => {

	

	return (
		<div className={classes.World}>
			<div onClick={props.choose} className={classes.Image}  style={{backgroundImage: `url(${props.planet})`}}></div>
			<table className={classes.Table}>
				<tbody>
					<tr>
						<td><strong>BioType</strong></td>
						<td>{props.bioType}</td>
					</tr>
					<tr>
						<td><strong>Inhabited</strong></td>
						<td>{props.inhabited}</td>
					</tr>
					<tr>
						<td><strong>Danger level</strong></td>
						<td className={classes.DangerIcon}></td>
					</tr>
					<tr>
						<td><strong>Average temp</strong></td>
						<td>{props.temperature}</td>
					</tr>
					<tr>
						<td><strong>Last visited</strong></td>
						<td>never.</td>
					</tr>
				</tbody>
			</table>
		</div>
		)
}

export default world;