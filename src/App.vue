<template>
  <div id="app">
    <DatePicker
      :value="{
        start: '2021-03-10',
        end: '2021-03-15',
      }"
      mode="range"
      title-position="left"
      :locale="{ id: 'id', firstDayOfWeek: 1, masks: { weekdays: 'WWW', holiday: 'DD MMMM' } }"
      :rows="13"
      color="red"
      :holiday="holiday"
      :attributes="attrs"
      is-expanded
      is-inline
    />
  </div>
</template>

<script>
import DatePicker from './components/DatePicker';

export default {
  name: 'App',
  components: {
    DatePicker,
  },

  data() {
    return {
      holiday: [
        {
          id: 24,
          date: '2021-03-22',
          name: "Isra Mi'raj",
          description: '',
          status: 'published',
          is_public: 1,
          created_by: 6633,
          updated_by: null,
        },
        {
          id: 25,
          date: '2021-03-25',
          name: 'Hari Raya Nyepi',
          description: '',
          status: 'published',
          is_public: 1,
          created_by: 6633,
          updated_by: null,
        },
        {
          id: 26,
          date: '2021-04-10',
          name: 'Hari Raya Paskah',
          description: '',
          status: 'published',
          is_public: 1,
          created_by: 6633,
          updated_by: null,
        },
      ],

      attrs: [
        {
          key: 'today',
          highlight: {
            fillMode: 'none',
            class: 'highlight-red',
          },
          dates: {
            weekdays: [1, 7],
          },
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.highlight-red {
  border: white;
}

.vc-text-red-900 {
  color: #dd2c00;
}

.vc-text-gray-400 {
  color: #cbd5e0 !important;
}
</style>
