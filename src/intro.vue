<template>
  <div>
      <jobs></jobs>
      <who></who>
      <contact></contact>
  </div>
</template>
<script>
import jobs from '@/components/jobs.vue'
import who from '@/components/who we are.vue'
import contact from '@/components/contact.vue'
export default {
  components: {
    jobs,
    who,
    contact
  }
}
</script>
<style scoped>
</style>
