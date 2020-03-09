<template>
    <div class="select">
        <select @change="onChange">
            <option value="popularity.desc">Default</option>
            <optgroup label="By popularity">
                <option value="popularity.desc">Descending</option>
                <option value="popularity.asc">Ascending</option>
            </optgroup>
            <optgroup label="By rating">
                <option value="vote_average.desc">Descending</option>
                <option value="vote_average.asc">Ascending</option>
            </optgroup>
        </select>
    </div>
</template>

<script>
export default {
    name: 'sort-by-list',
    props: ['onChange']
}
</script>