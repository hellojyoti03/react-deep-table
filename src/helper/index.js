// @ts-nocheck
"use strict";

/**
 *
 *
 * @param {Object}  - The email details.
 */
export function ensureUniqueIds(data) {
	const existingIds = new Set();

	function processNodes(nodes) {
		nodes.forEach((node) => {
			if (!node.react_deep_id) {
				let uniqueId;
				do {
					uniqueId = `react_deep_${Math.floor(Math.random() * 2 ** 32)}`;
				} while (existingIds.has(uniqueId));
				node.react_deep_id = uniqueId;
			}

			existingIds.add(node.id);

			if (node.children) {
				processNodes(node.children);
			}
		});
	}

	processNodes(data);
	return data;
}
