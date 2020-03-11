<template>
    <form>
        <text-input
            label="Create a list" placeholder="Ex: Watch Later"
            :onChange="handleChange"
        />
        <p v-if="error" class="has-text-danger" style="margin: 7px 0;">{{ error }}</p>
        <button class="button is-primary" @click.prevent="createList">Add list</button>
    </form>
</template>

<script>
import gql from "graphql-tag";

import TextInput from "~/components/forms/text-input";

export default {
    name: 'list-form',
    components: { TextInput },
    data: () => ({ name: "", error: "" }),
    methods: {
        handleChange: function({ target: { value }}) {
            this.name = value;
        },
        createList: async function() {
            if(this.name.trim().length === 0) {
                this.error = "Enter the list's name";
            } else {
                try {
                    const {data:{createList}} = await this.$apollo.mutate({
                        mutation: gql`mutation ($name: String!) {
                            createList(name: $name) { id, name }
                        }`,
                        variables: { name: this.name }
                    });
                    this.error = null;

                    const lists = this.$store.state.lists.lists;
                    this.$store.commit('lists/setLists', [ createList, ...lists ]);
                } catch(ex) {
                    this.error = ex.graphQLErrors[0].message;
                }
            }
        }
    }
}
</script>