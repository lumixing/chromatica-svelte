<script lang="ts">
    import { goto } from "$app/navigation";
    import Header from "../components/Header.svelte";
    import Album from "../components/Album.svelte";
    import Heading from "../components/Heading.svelte";

    async function auth() {
        const accessToken = localStorage.getItem("accessToken");
        const expireTimestamp = localStorage.getItem("expireTimestamp");

        if (accessToken != null && expireTimestamp != null) {
            const expireDate = new Date(parseInt(expireTimestamp));

            if (new Date() < expireDate) {
                goto("/playlists");
            } else {
                console.log("token expire!", Date.now(), expireDate);
                fetchAndRedirect();
            }
        } else {
            console.log("no token!");
            fetchAndRedirect();
        }
    }

    async function fetchAndRedirect() {
        const res = await fetch("/auth");
        const url = await res.json();
        window.location.href = url;
    }
</script>

<Header />
<main>
    <div class="top">
        <Album />
        <div class="side">
            <Heading />
            <h2>chromatica sorts playlists based on color</h2>
        </div>
    </div>
    <div class="bottom">
        <span>sort your playlist into colors</span>
        <button>authenticate with spotify</button>
    </div>
</main>

<style>
    main {
        margin-top: 2rem;
    }

    main .top {
        display: flex;
        gap: 2rem;
        align-items: center;
    }

    main .bottom {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    main .bottom span {
        font-size: 20px;
    }

    main .bottom button {
        font-size: 20px;
        background-color: #1ed760;
        border: 0;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        cursor: pointer;
        transition: box-shadow 0.2s;
    }

    main .bottom button:hover {
        box-shadow: 0 0 24px -8px #1ed760;
    }

    @media only screen and (max-width: 700px) {
        main > .top {
            flex-direction: column;
            gap: 1rem;
        }

        main .side {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        main .side h2 {
            text-align: center;
        }

        main .bottom {
            margin-top: 0.5rem;
        }
    }
</style>
