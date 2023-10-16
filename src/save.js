/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps} from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

export default function save(props) {
	const {attributes, setAttributes} = props;
	let apiData = attributes.data;
	return (
		<div {...useBlockProps.save()}>
			{apiData && (

				<div className="my-block-users-data" id="my-block-users-data">
					<h2>My Block Users Data</h2>
					<table className='user-table'>
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
				</div>)}
		</div>
	);
}
