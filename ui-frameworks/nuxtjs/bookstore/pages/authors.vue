<template>
     <div class="content">
        <div class="authors page">

          <AuthorList title="Authors" description="Our store features books by several reputable authors:" :authors="authors" />

        </div>
    </div>
</template>

<script>
import AuthorList from "../components/AuthorList.vue";

export default {
    components: {
        AuthorList
    },

    async asyncData({ $branch }) {

        let authors = (await $branch.queryNodes({ _type: "store:author" }, { limit: 1000 })).rows;

        return {
            authors: authors
        };
    }
}
</script>
