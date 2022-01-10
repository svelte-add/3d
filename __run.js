/** @type {import("../..").AdderRun<import("./__info.js").Options>} */
export const run = async ({ install }) => {
	await install({ package: "three" });
	await install({ package: "svelte-cubed" });
};
