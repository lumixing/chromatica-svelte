<script>
    export let id;
    export let name;
    export let songs;
    export let src;
</script>

<a href="/playlist/{id}">
    <div class="playlist">
        <img {src} alt={name} />
        <div class="info">
            <span class="name">{name}</span>
            <span class="songs">{songs} songs</span>
        </div>
    </div>
</a>

<style>
    a {
        all: unset;
        min-width: 0;
    }

    .playlist {
        background-color: rgb(30, 30, 30);
        display: flex;
        padding: 0.8rem;
        border-radius: 1rem;
        gap: 0.8rem;
        align-items: center;
        transition: background-color 0.2s;
        cursor: pointer;
    }

    .playlist:hover {
        background-color: rgb(40, 40, 40);
        transition: background-color 0s;
    }

    img {
        width: 48px;
        height: 48px;
    }

    .playlist span {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        flex: 1;
    }

    .playlist img {
        border-radius: 8px;
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .name {
        font-size: 18px;
    }

    .songs {
        color: darkgray;
    }
</style>
