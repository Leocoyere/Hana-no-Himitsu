<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="views/css/reset.css">
        <link rel="stylesheet" href="views/css/templates.css">
        <link rel="stylesheet" href="views/css/<?= $title ?>.css">
        <title>花の秘密 | <?= strtoupper($title) ?></title>
    </head>
    <body>

        <header>
            <a href="homepage" class="logo">花の秘密</a>
            <a href="basket" id="bag"><h6></h6><img src="views/img/icons/bag_white.png" alt=""></a>
            <div id="burger"></div>
        </header>

        <div class="menu">        
            <a href="blog" id="blog">blog - <em>ブログ</em></a>
            <a href="products" id="products">products - <em>製品</em></a>
            <a href="about" id="about">about us - <em>私たちに関しては</em></a>
            <a href="contact" id="contact">contact - <em>連絡</em></a>
        </div>

        <figure id="hero"><img src="views/img/icons/hero.jpg" alt=""><h1>製品</h1></figure>
        <main>
            <section>
                <h2>Bouquets</h2>
                <div class="filet"></div>
                <h3>ブーケ</h3>
                <div class="container"></div>
            </section>

            <section>
                <h2>Dried flowers</h2>
                <div class="filet"></div>
                <h3>ドライフラワー</h3>
                <div class="container"></div>
            </section>

            <section>
                <h2>Wedding</h2>
                <div class="filet"></div>
                <h3>結婚式</h3>
                <div class="container"></div>
            </section>
        </main>

        <footer>
            <section class="contact">
                <article id="newsletter">
                    <h5>NEWSLETTER</h5>
                    <form method="POST">
                        <input type="text" name="name" placeholder="name - 名前" required>
                        <input type="email" name="mail" placeholder="email - メール" required>
                        <button type="submit" class="button">sign up</button>
                    </form>
                </article>
                <div class="filet"></div>
                <article id="icons">
                    <a href="https://instagram.com"><img src="views/img/icons/instagram.svg" alt=""></a>
                    <a href="https://twitter.com"><img src="views/img/icons/twitter.svg" alt=""></a>
                    <a href="https://linkedin.com"><img src="views/img/icons/linkedin.svg" alt=""></a>
                    <a href="https://facebook.com"><img src="views/img/icons/facebook.svg" alt=""></a>
                </article>
            </section>
            <div class="filet"></div>
            <section class="location">
                <article id="map"><img src="views/img/icons/map.png" alt=""></article>
                <article>
                    <a href="#">3 Chome-1-24 Nakanagaocho, Kita Ward, Sakai, Osaka 591-8044, Japon</a>
                    <a href="#">〒591-8044 大阪府堺市北区中長尾町３丁１−24</a>
                </article>
            </section>
            <div class="filet"></div>
            <div id="rights">
                <a href="https://fr.wikipedia.org/wiki/Mentions_l%C3%A9gales">legal mentions</a>
                <h6>&copy; 2021 all rights reserved</h6>
            </div>
        </footer>

        <script src="views/js/templates.js"></script>
        <script src="views/js/products.js"></script>

    </body>
</html>