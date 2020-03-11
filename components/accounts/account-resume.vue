<template>
    <div class="">
        <div class="">
            <div>
                <img src="" alt="" />
            </div>
            <hr>
            <h3 class="title is-5">imhassane</h3>
            <p><small>imthassane@gmail.com</small></p>
            <div class="columns has-text-centered" style="margin: 10px 0">
                <div class="column is-one-third">
                    <p class="tag is-light">10</p>
                    <p><strong>Liked</strong></p>
                </div>
                <div class="column is-one-third">
                    <p class="tag is-light">{{ lists }}</p>
                    <p><strong>Lists</strong></p>
                </div>
                <div class="column is-one-third">
                    <p class="tag is-light">10</p>
                    <p><strong>Later</strong></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'account-resume',
    computed: {
        lists() { return this.$store.state.lists.lists.length; }
    }
}
</script>