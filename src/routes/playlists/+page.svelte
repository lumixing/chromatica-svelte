<script lang="ts">
    import { onMount } from 'svelte';

    let json: { items: any; };

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

<p>playlists</p>
{#if json}
    {#each json.items as playlist}
        <a href="/playlist/{playlist.id}">{playlist.name}</a>
        <br>
    {/each} 
{/if}
