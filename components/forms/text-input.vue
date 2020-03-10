<template>
    <div class="field">
        <label class="label">{{ label }}</label>
        <div class="control has-icons-left has-icons-right">
            <input class="input" :type="type" :placeholder="placeholder" />
            <span class="icon is-small is-left">
            <i :class="`fas ${icon}`"></i>
            </span>
        </div>
        <p v-if="success" class="help is-success">'{ successMessage }}</p>
        <p v-if="error" class="help is-danger"></p>
    </div>
</template>

<script>
export default {
    name: 'text-input',
    props: ['label', 'type', 'placeholder', 'icon', 'min', 'max', 'minError', 'maxError', 'successMessage', 'isEmail'],
    data: () => ({ success: null, error: null })
}
</script>