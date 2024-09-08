<script>
    // @ts-nocheck
    import { onMount } from "svelte";
    import Vibrant from "node-vibrant";
    import Header from "../../../components/Header.svelte";

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
    let res;
    let url = {};
    let total = 0;
    let sorted = 0;

    onMount(async () => {
        accessToken = localStorage.getItem("accessToken");
        res = fetch(`/getSongs/${data.id}`, {
            headers: {
                "Access-Token": accessToken,
            },
        });

        let json = await (await res).json();
        console.log(json);
        total = json.length;

        for (let s of json) {
            const palette = await Vibrant.from(s.image).getPalette();
            if (Object.values(palette)[0] == null) {
                continue;
            }
            let color = Object.values(palette).sort(
                (a, b) => b.population - a.population,
            )[0];
            let cat = hueToColor(color.getHsl());
            colors[cat] = [...colors[cat], s.uri];
            sorted += 1;
        }

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

    async function createPlaylist(id, color) {
        console.log(id, color);
        const res = await fetch(`/createPlaylist/${id}/${color}`, {
            headers: {
                Songs: colors[color].join(";"),
                "Access-Token": accessToken,
            },
        });
        url[color] = await res.json();
    }
</script>

<Header />
<main>
    {#if done}
        {#each Object.keys(colors) as color}
            {#if colors[color].length != 0}
                {#if url[color]}
                    <a target="_blank" class="{color}" href="{url[color]}">view {color} playlist</a>
                {:else}
                    <button class="{color}" on:click={() => createPlaylist(data.id, color)}
                        >create {color} playlist ({colors[color].length} songs)</button
                    >
                {/if}
            {/if}
        {/each}
    {:else}
        {#await res}
            getting songs...
        {:then _}
            sorting songs... ({sorted}/{total})
        {/await}
    {/if}
</main>

<style>
    main {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    button {
        width: 100%;
        font-size: 20px;
        background-color: #1ed760;
        border: 0;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        cursor: pointer;
    }

    button.red {
        background-color: #d71e1e;
    }

    button.orange {
        background-color: #d7771e;
    }

    button.yellow {
        background-color: #cbd71e;
    }

    button.green {
        background-color: #43d71e;
    }

    button.blue {
        background-color: #1e5fd7;
    }

    button.purple {
        background-color: #c11ed7;
    }

    button.grayscale {
        background-color: #ffffff;
    }

    a {
        text-align: center;
        text-decoration: none;
        color: inherit;
        font-size: 20px;
        border: 0;
        outline: 2px solid #1ed760;
        padding: 0.5rem 1rem;
        border-radius: 20px;
    }

    a.red {
        outline: 2px solid #d71e1e;
    }

    a.orange {
        outline: 2px solid #d7771e;
    }

    a.yellow {
        outline: 2px solid #cbd71e;
    }

    a.green {
        outline: 2px solid #43d71e;
    }

    a.blue {
        outline: 2px solid #1e5fd7;
    }

    a.purple {
        outline: 2px solid #c11ed7;
    }

    a.grayscale {
        outline: 2px solid #ffffff;
    }
</style>
