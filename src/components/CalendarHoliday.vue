<template>
  <ul class="holiday-list" v-if="holiday">
    <li v-for="(day, index) in holiday" :key="`holiday-${index}`">
      <strong :class="{
        'is-public': day.is_public,
        'is-mass': !day.is_public
      }">
        {{ format(day.date, masks.holiday) }}
      </strong> {{ day.name }}
    </li>
  </ul>
</template>

<script>
import { childMixin } from '@/utils/mixins';

export default {
  mixins: [childMixin],

  props: {
    holiday: Array,
  },
};
</script>

<style lang="postcss" scoped>
.holiday-list {
  max-width: 250px;
  margin-top: 5px;
  padding-left: 15px;
  list-style: none;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 500;
}

li {
  margin-bottom: 5px;
}

strong {
  display: inline-block;
  min-width: 2.5rem;
  font-weight: 600;
}

.is-public {
  color: #dd2c00;
}

.is-mass {
  color: #303f9f;
}
</style>
