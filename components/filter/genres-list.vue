<template>
    <div class="select">
        <select @change="onChange">
            <option v-for="g in genres" :key="g.id" :value="g.id">{{ g.name }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'genres-list',
    props: ['genres', 'onChange']
}
</script>