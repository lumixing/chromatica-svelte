import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } from '$env/static/private';
import { json } from "@sveltejs/kit";

export function GET() {
	const url = new URL("https://accounts.spotify.com/authorize");
    url.searchParams.append("response_type", "code");
    url.searchParams.append("client_id", SPOTIFY_CLIENT_ID);
    url.searchParams.append("redirect_uri", SPOTIFY_REDIRECT_URI);
    url.searchParams.append("scope", [
        "user-top-read",
        "playlist-read-private",
        "user-library-read",
        "playlist-modify-public",
        "playlist-modify-private",
    ].join(" "));

    return json(url.toString());
}
