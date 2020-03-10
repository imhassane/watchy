<template>
    <div>
        <h3 class="title has-text-centered">Join WATCHY</h3>
        <hr />
        <div style="width: 50%; margin: auto">
            <div class="columns">
                <div class="column is-one-third">
                    <button class="button">Join via Facebook</button>
                </div>
                <div class="column is-one-third">
                    <button class="button">Join via Google</button>
                </div>
            </div>
            <form>
                <text-input
                    label="Enter an email address" placeholder="Ex: john.doe@abc.com" icon="fa-envelope"
                    :isEmail="true" type="email"
                />
                <text-input
                    label="Enter a password" placeholder="Ex: ********" icon="fa-envelope"
                    type="password"
                />
                <text-input
                    label="Enter the password again" placeholder="Ex: ********" icon="fa-envelope"
                    type="password"
                />
                <button class="button is-primary">Create an account</button>            
            </form>
            <p style="margin: 10px 0">
                <nuxt-link to="/accounts/login" class="has-text-primary">Sign in</nuxt-link>
            </p>
        </div>
    </div>
</template>

<script>
import TextInput from "~/components/forms/text-input";
export default {
    head: () => ({ title: "Join Watchy & watch incredible movies" }),
    components: { TextInput }
}
</script>