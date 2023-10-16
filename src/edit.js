/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import {useEffect, useState} from "@wordpress/element";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const {attributes, setAttributes} = props;
	const [apiData, setApiData] = useState(null);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => {
				setApiData(data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	return (
		<div {...useBlockProps()}>
			{apiData && (
				<div className="my-block-users-data" id="my-block-users-data">
					<h2>My Block Users Data</h2>
					<table className="user-table">
						<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Website</th>
						</tr>
						</thead>
						<tbody>
						{apiData.map((user, index) => (
							<tr key={index}>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.website}</td>
							</tr>
						))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}
