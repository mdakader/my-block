<?php
/**
 * Plugin Name:       My Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       my-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

function create_block_my_block_init() {
	register_block_type( __DIR__ . '/build', array(
		'render_callback' => 'my_block_frontend'
	));
}
add_action( 'init', 'create_block_my_block_init' );

function my_block_frontend() {
	ob_start(); ?>
	<div class="my-block-users-data" id="my-block-users-data">
		<h2>My Block Users Data</h2>
		<div class="users-data-table" id="user-data-container"></div>
	</div>
	<?php return ob_get_clean();
}
