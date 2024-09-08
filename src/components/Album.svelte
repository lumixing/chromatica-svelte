<div class="album">
    <div class="top">
        <img
            src="https://i.scdn.co/image/ab67616d00001e02f07ef193e0bb6a238ea37f0a"
        />
        <img
            src="https://i.scdn.co/image/ab67616d00001e0225475181eb4622ed295f9485"
        />
        <img
            src="https://i.scdn.co/image/ab67616d00001e028b52c6b9bc4e43d873869699"
        />
        <img
            src="https://i.scdn.co/image/ab67616d00001e02d9194aa18fa4c9362b47464f"
        />
    </div>
    <div class="bottom">
        <img
            src="https://i.scdn.co/image/ab67616d00001e02c8b444df094279e70d0ed856"
        />
        <img
            src="https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645"
        />
        <img
            src="https://i.scdn.co/image/ab67616d00001e02ebbff7725d3ce0739be01787"
        />
        <img
            src="https://i.scdn.co/image/ab67616d00001e020a7d45a345534966a4ad2c39"
        />
    </div>
</div>

<style>
    .album {
        width: 320px;
        height: 320px;
        clip-path: inset(0 round 20px);
    }

    .album .top,
    .album .bottom {
        translate: 0 -100%;
        display: grid;
        grid-template-columns: repeat(2, 160px);
    }

    .album .bottom img:nth-child(3) {
        animation: fall-out 0.7s 2.5s forwards ease-in-out;
    }

    .album .bottom img:nth-child(4) {
        animation: fall-out 0.7s 2.55s forwards ease-in-out;
    }

    .album .bottom img:nth-child(1) {
        animation: fall-out 0.7s 2.6s forwards ease-in-out;
    }

    .album .bottom img:nth-child(2) {
        animation: fall-out 0.7s 2.65s forwards ease-in-out;
    }

    .album .top img:nth-child(3) {
        animation: fall-in 0.7s 2.7s forwards ease-in-out;
    }

    .album .top img:nth-child(4) {
        animation: fall-in 0.7s 2.75s forwards ease-in-out;
    }

    .album .top img:nth-child(1) {
        animation: fall-in 0.7s 2.8s forwards ease-in-out;
    }

    .album .top img:nth-child(2) {
        animation: fall-in 0.7s 2.85s forwards ease-in-out;
    }

    .album .top img {
        opacity: 0;
    }

    .album img {
        width: 160px;
        object-fit: cover;
    }

    @keyframes fall-out {
        to {
            opacity: 0;
            translate: 0 200%;
        }
    }

    @keyframes fall-in {
        to {
            opacity: 1;
            translate: 0 200%;
        }
    }
</style>
