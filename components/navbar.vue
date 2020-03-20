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
                <div class="buttons" v-if="!isAuth">
                    <nuxt-link to="/accounts/register" class="button is-primary">
                        <strong>Sign up</strong>
                    </nuxt-link>
                    <nuxt-link to="/accounts/login" class="button is-light">
                        Log in
                    </nuxt-link>
                </div>
                <div class="buttons" v-else>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                        Lists
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                Favourites
                            </a>
                            <a class="navbar-item">
                                Watch later
                            </a>
                        </div>
                    </div>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                        Account
                        </a>

                        <div class="navbar-dropdown">
                            <nuxt-link to="/accounts/me" class="navbar-item">
                                My profile
                            </nuxt-link>
                            <nuxt-link to="/accounts/settings" class="navbar-item">
                                settings
                            </nuxt-link>
                            <hr class="navbar-divider">
                            <nuxt-link to="/accounts/sign-out" class="navbar-item">
                                Sign out
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </nav>
</template>

<script>
export default {
    name: 'navbar',
    computed: {
        isAuth() { return this.$store.state.authenticated; }
    }
}
</script>