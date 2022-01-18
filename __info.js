export const name = "3D";

/** @type {import("../..").Gatekeep} */
export const gatekeep = async () => {
	return { able: true };
};

/** @typedef {{}} Options */

/** @type {import("../..").AdderOptions<Options>} */
export const options = {};

/** @type {import("../..").Heuristic[]} */
export const heuristics = [
	{
		description: "`three` is installed",
		async detector({ folderInfo }) {
			return "three" in folderInfo.allDependencies;
		},
	},
	{
		description: "`svelte-cubed` is installed",
		async detector({ folderInfo }) {
			return "svelte-cubed" in folderInfo.allDependencies;
		},
	},
];
