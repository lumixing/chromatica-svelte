import { json } from "@sveltejs/kit";

export async function GET({ request }) {
    const accessToken = request.headers.get("Access-Token");
    const fres = await fetch("https://api.spotify.com/v1/me/playlists", {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        },
    });

    return json(await fres.json());
}
