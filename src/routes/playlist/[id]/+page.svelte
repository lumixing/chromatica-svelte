<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import Vibrant from "node-vibrant";

    export let data;
    let colors = {
        red: [],
        orange: [],
        yellow: [],
        green: [],
        blue: [],
        purple: [],
        grayscale: [],
    };
    let done = false;
    let accessToken;

    onMount(async () => {
        accessToken = localStorage.getItem("accessToken");
        const res = await fetch(`/getSongs/${data.id}`, {
            headers: {
                "Access-Token": accessToken,
            },
        });

        let json = await res.json();
        console.log(json);

        json.forEach((s) => {
            Vibrant.from(s.image)
                .getPalette()
                .then((palette) => {
                    let color = Object.values(palette).sort(
                        (a, b) => b.population - a.population,
                    )[0];
                    let cat = hueToColor(color.getHsl());
                    // colors[cat].push(s.uri);
                    colors[cat] = [...colors[cat], s.uri];
                });
        });

        console.log(colors);
        done = true;
    });

    function hueToColor([h, s, _]) {
        if (s < 0.15) {
            return "grayscale";
        }

        if (h < 1 / 12 || h >= 11 / 12) return "red";
        if (h < 1 / 6) return "orange";
        if (h < 1 / 3) return "yellow";
        if (h < 1 / 2) return "green";
        if (h < 2 / 3) return "blue";
        return "purple";
    }

    async function createPlaylist(color) {
        console.log(color);
        const res = await fetch(`/createPlaylist/${color}`, {
            headers: {
                "Songs": colors[color].join(";"),
                "Access-Token": accessToken,
            },
        })
    }
</script>

<p>playlist {data.id}</p>
{#if done}
    <button on:click={() => createPlaylist("red")}>create red playlist</button>
    <p>reds {colors.red.length}</p>
    {#each colors.red as red}
        <p>{red}</p>
    {/each}
{/if}
