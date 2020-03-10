<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <strong>WATCHY</strong>
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item">
                    Home
                </a>

                <nuxt-link to="/discover" class="navbar-item">
                    Discover
                </nuxt-link>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                    More
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            Trendings
                        </a>
                        <a class="navbar-item">
                            Most rated
                        </a>
                        <a class="navbar-item">
                            Kid's favorites
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            Dramas
                        </a>
                    </div>
                </div>
            </div>

            <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                <nuxt-link to="/accounts/register" class="button is-primary">
                    <strong>Sign up</strong>
                </nuxt-link>
                <nuxt-link to="/accounts/login" class="button is-light">
                    Log in
                </nuxt-link>
                </div>
            </div>
            </div>
        </div>
        </nav>
</template>

<script>
export default {
    name: 'navbar'
}
</script>