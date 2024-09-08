<script lang="ts">
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    export let data;

    onMount(async () => {
        console.log(data);
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("expireTimestamp", (Date.now() + data.expires_in * 1000).toString());
        
        goto("/playlists");
    });
</script>

<p>you should be redirected to /playlists in a bit</p>
