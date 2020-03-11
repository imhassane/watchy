<template>
    <form>
        <div class="field">
            <text-input
                placeholder="Enter the current password"
            />
        </div>
        <div class="columns is-1">
            <div class="column is-half field">
                <text-input
                    placeholder="Enter the new password"
                />
            </div>
            <div class="column is-half field">
                <text-input
                    placeholder="Enter the new password"
                />
            </div>
        </div>
        <div>
            <button class="button is-primary">Update the password</button>
        </div>
    </form>
</template>

<script>
import TextInput from "~/components/forms/text-input";

export default {
    name: 'change-password',
    components: { TextInput }
}
</script>