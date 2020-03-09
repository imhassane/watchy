<template>
    <div class="select">
        <select @change="onChange">
            <option :value="year" v-for="year in years" :key="year">{{ year }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'years-list',
    data: () => {
        let years = [];
        for(var y = 2020; y >= 2010; y--)
            years.push(y);
        return { years };
    },
    props: ['onChange']
}
</script>