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
            <p class="notification is-danger" v-if="errors.authenticationFailed">
              {{ errors.authenticationFailed }}
            </p>
            <p class="notification is-primary" v-if="errors.success">
                {{ errors.success }}
            </p>
            <form>
                <text-input
                    label="Email address" placeholder="Ex: john.doe@abc.com" icon="fa-envelope"
                    type="email" :onChange="handleEmailChange" :error="errors.email"
                />
                <text-input
                    label="Password" placeholder="Ex: ********" icon="fa-envelope"
                    type="password" :onChange="handlePasswordChange" :error="errors.password"
                />
                <button
                    class="button is-primary" @click.prevent="handleSubmit"
                    :disabled="!(errors.email === null && errors.password === null)"
                >Log in</button>            
            </form>
            <p style="margin: 10px 0">
                <nuxt-link to="/accounts/register" class="has-text-primary">Create an account</nuxt-link>
            </p>
        </div>
    </div>
</template>

<script>
import gql from "graphql-tag";
import TextInput from "~/components/forms/text-input";

const AUTHENTICATE = gql`
    query ($email: String!, $password: String!) {
        authenticate(email: $email, password: $password)
    }
`;

export default {
    head: () => ({ title: "Log in to access your account" }),
    data: () => ({
        login: { email: null, password: null},
        errors: { email: null, password: null, authenticationFailed: null, success: null}
    }),
    components: { TextInput },
    methods: {
        handleEmailChange: function({ target: {value} }) {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(regex.test(value)) {
                this.errors.email = null;
                this.login.email = value;
            } else {
                this.login.email = null;
                this.errors.email = "The email address is not correct";
            }
        },
        handlePasswordChange: function({ target: {value} }) {
            if(value.length >= 8) {
                this.errors.password = null;
                this.login.password = value;
            } else {
                this.login.password = null;
                this.errors.password = "The password should at least have 8 characters";
            }
        },
        handleSubmit: async function() {
            this.handleEmailChange({ target: {value:this.login.email}});
            this.handlePasswordChange({target: {value: this.login.password}});
            if(this.errors.email === null && this.errors.password === null) {
                try {
                    const { data: {authenticate}, errors } = await this.$apollo.query({
                        query: AUTHENTICATE, variables: this.login
                    });
                    localStorage.setItem(process.env.AUTH_TOKEN, authenticate);
                    this.errors.authenticationFailed = null;
                    this.errors.success = "You've been logged succesfully";
                    setTimeout(() => this.$router.push('/discover'), 1000);
                } catch(ex) {
                    this.errors.authenticationFailed = ex.graphQLErrors[0].message;
                }
            }
        }
    },
    beforeMount: function() {
        if(process.client) {
            const isAuth = this.$store.state.authenticated;
            if(isAuth)
                this.$router.push('/discover');
        }
    }
}
</script>