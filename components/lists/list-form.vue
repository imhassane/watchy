<template>
    <form>
        <text-input
            label="Create a list" placeholder="Ex: Watch Later"
        />
        <button class="button is-primary">Add list</button>
    </form>
</template>

<script>
import TextInput from "~/components/forms/text-input";

export default {
    name: 'list-form',
    components: { TextInput }
}
</script>