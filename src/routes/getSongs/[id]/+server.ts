import { json } from "@sveltejs/kit";

export async function GET({ params, request }) {
    const accessToken = request.headers.get("Access-Token");
    const fields = "items(track(album.images.url,uri)),next";

    let songs = [];
    let next = `https://api.spotify.com/v1/playlists/${params.id}/tracks?fields=${fields}`;

    do {
        console.log("doing", next)
        const fres = await fetch(next, {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            },
        });
        const json = await fres.json();
        next = json.next;
        songs.push(...json.items.map(({ track }: any) => {
            return { uri: track.uri, image: track.album.images[2].url }
        }));
    } while (next != null);

    return json(songs);
}
