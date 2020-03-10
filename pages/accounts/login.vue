<template>
    <div>
        <h3 class="title has-text-centered">Access to your account</h3>
        <hr />
        <div style="width: 50%; margin: auto">
            <div class="columns">
                <div class="column is-one-third">
                    <button class="button">Log in via Facebook</button>
                </div>
                <div class="column is-one-third">
                    <button class="button">Log in via Google</button>
                </div>
            </div>
            <form>
                <text-input
                    label="Email address" placeholder="Ex: john.doe@abc.com" icon="fa-envelope"
                    :isEmail="true"
                />
                <button class="button is-primary">Log in</button>            
            </form>
            <p style="margin: 10px 0">
                <nuxt-link to="/accounts/register" class="has-text-primary">Create an account</nuxt-link>
            </p>
        </div>
    </div>
</template>

<script>
import TextInput from "~/components/forms/text-input";
export default {
    head: () => ({ title: "Log in to access your account" }),
    components: { TextInput }
}
</script>