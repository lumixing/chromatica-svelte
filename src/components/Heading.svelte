<h1>
    wanna listen to
    <div class="color">
        <span class="top">red?</span>
        <span class="bottom">blue?</span>
    </div>
</h1>

<style>
    h1 {
        margin: 0;
        font-size: 86px;
    }

    .color {
        position: relative;
        display: inline-block;
        height: 104px;
        overflow: hidden;
        vertical-align: bottom;
    }

    .color span {
        display: block;
        translate: 0 -100%;
    }

    .color .bottom {
        animation: text-fall-out 0.7s 2.85s forwards ease-in-out;
    }

    .color .top {
        opacity: 0;
        animation: text-fall-in 0.7s 2.85s forwards ease-in-out;
    }

    @keyframes text-fall-out {
        to {
            opacity: 0;
            translate: 0 0;
        }
    }

    @keyframes text-fall-in {
        to {
            opacity: 1;
            translate: 0 0;
        }
    }

    @media only screen and (max-width: 700px) {
        h1 {
            text-align: center;
            font-size: 72px;
        }

        .color {
            height: 87px;
            text-align: left;
        }
    }
</style>
