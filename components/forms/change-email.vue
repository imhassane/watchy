<template>
    <form>
        <div class="field">
            <text-input
                placeholder="Enter the new email address"
            />
        </div>
        <div>
            <button class="button is-primary">Update the email address</button>
        </div>
    </form>
</template>

<script>
import TextInput from "~/components/forms/text-input";

export default {
    name: 'change-email',
    components: { TextInput }
}
</script>