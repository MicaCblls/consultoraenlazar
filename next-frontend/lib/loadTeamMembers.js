import { getClient } from "./sanity.server";

export async function loadTeam() {
	const team = await getClient().fetch(`*[_type == 'team']`);
	return team
}
