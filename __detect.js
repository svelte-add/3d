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
