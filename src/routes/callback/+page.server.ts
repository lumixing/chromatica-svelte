import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REDIRECT_URI } from '$env/static/private';

export async function load({ url }) {
    const code = url.searchParams.get("code");
    const fres = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        body: new URLSearchParams({
            "grant_type": "authorization_code",
            "code": code!,
            "redirect_uri": SPOTIFY_REDIRECT_URI,
        }),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Basic ${btoa(SPOTIFY_CLIENT_ID + ":" + SPOTIFY_CLIENT_SECRET)}`,
        },
    });
    const json = await fres.json();

    return json;
}
