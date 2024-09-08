<script lang="ts">
    import { onMount } from "svelte";
    import Header from "../../components/Header.svelte";
    import Playlist from "../../components/Playlist.svelte";

    let json: { items: any };

    onMount(async () => {
        const accessToken = localStorage.getItem("accessToken");
        const res = await fetch("/getPlaylists", {
            headers: {
                "Access-Token": accessToken!,
            },
        });

        json = await res.json();
        console.log(json);
    });
</script>

<Header />
<main>
    <h2>pick a playlist to sort</h2>
    <div class="playlists">
        {#if json}
            {#each json.items as playlist}
                <Playlist
                    id={playlist.id}
                    src={playlist.images[0].url}
                    name={playlist.name}
                    songs={playlist.tracks.total}
                />
            {/each}
        {/if}
    </div>
</main>

<style>
    main {
        margin-top: 2rem;
    }

    h2 {
        text-align: center;
    }

    .playlists {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
    }

    @media only screen and (max-width: 800px) {
        .playlists {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media only screen and (max-width: 600px) {
        .playlists {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>
