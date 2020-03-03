<p align="center">
    <a href="https://vcalendar.io/" target="_blank">
      <img width="200" src="https://res.cloudinary.com/dqgcfqzpk/image/upload/v1557324348/v-calendar/hero.png">
    </a>
    <br>
    An elegant calendar and datepicker plugin for Vuejs.
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/v-calendar-custom"><img src="https://img.shields.io/npm/dt/v-calendar.svg" alt="Total Downloads"></a>
    <a href="https://github.com/miqbalhamdani/v-calendar-custom"><img src="https://img.shields.io/npm/v/v-calendar.svg" alt="Latest Release"></a>
    <a href="https://github.com/miqbalhamdani/v-calendar-custom"><img src="https://img.shields.io/npm/v/v-calendar/next.svg" alt="Next Release"></a>
    <a href="https://github.com/nathanreyes/v-calendar/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/v-calendar.svg" alt="License"></a>
</p>

------

```bash
npm i --save v-calendar-custom
```

## Documentation

For full documentation, visit [vcalendar.io](https://vcalendar.io/).



## Public Holiday [Custom from v-caledar]

```bash
<v-calendar
  :columns="2"
  :step="1"
  :masks="{ holiday: 'DD MMM' }"
  :holiday="holiday"
  locale="id"
/>
```

### Holiday Data

```bash
<v-calendar
holiday: [
  {
    id: 24,
    date: '2020-03-22',
    name: "Isra Mi'raj",
    description: '',
    status: 'published',
    is_public: 1,
    created_by: 6633,
    updated_by: null,
  },
  {
    id: 25,
    date: '2020-03-25',
    name: 'Hari Raya Nyepi',
    description: '',
    status: 'published',
    is_public: 1,
    created_by: 6633,
    updated_by: null,
  },
  {
    id: 26,
    date: '2020-04-10',
    name: 'Hari Raya Paskah',
    description: '',
    status: 'published',
    is_public: 1,
    created_by: 6633,
    updated_by: null,
  },
],
/>
```

### Example

<img width="400" src="https://github.com/miqbalhamdani/v-calendar-custom/docs/public-holiday.png">

### Attributes

| Highlights | Dots |
| :---: | :---: |
| <img width="200" src="https://res.cloudinary.com/dqgcfqzpk/image/upload/v1557326557/v-calendar/highlights.png"> | <img width="200" src="https://res.cloudinary.com/dqgcfqzpk/image/upload/v1557326557/v-calendar/dots.png"> |

| Bars | Popovers |
| :---: | :---: |
| <img width="200" src="https://res.cloudinary.com/dqgcfqzpk/image/upload/v1557326557/v-calendar/bars.png"> | <img width="200" src="https://res.cloudinary.com/dqgcfqzpk/image/upload/v1557326557/v-calendar/popovers.png"> |

### Multi-Paned Calendars

<img width="400" src="https://res.cloudinary.com/dqgcfqzpk/image/upload/v1557326946/v-calendar/multi-paned.png">

### Theme Colors & Dark-Mode

| | |
| :---: | :---: |
| <img width="200" src="https://res.cloudinary.com/dqgcfqzpk/image/upload/v1557327273/v-calendar/dark-blue.png"> | <img width="200" src="https://res.cloudinary.com/dqgcfqzpk/image/upload/v1557327429/v-calendar/dark-red.png"> |
| <img width="200" src="https://res.cloudinary.com/dqgcfqzpk/image/upload/v1557327429/v-calendar/dark-teal.png"> | <img width="200" src="https://res.cloudinary.com/dqgcfqzpk/image/upload/v1557327429/v-calendar/dark-purple.png"> |

### Date Pickers

| **Single Date** | **Multiple Date** | **Date Range** |
| :---: | :---: | :---: |
| <img width="200" src="https://res.cloudinary.com/dqgcfqzpk/image/upload/v1557327864/v-calendar/single-picker.png"> | <img width="200" src="https://res.cloudinary.com/dqgcfqzpk/image/upload/v1557327864/v-calendar/multi-picker.png"> | <img width="200" src="https://res.cloudinary.com/dqgcfqzpk/image/upload/v1557327864/v-calendar/range-picker.png"> |

### Custom Calendars w/ Scoped Slots

<img width="400" src="https://res.cloudinary.com/dqgcfqzpk/image/upload/v1557328504/v-calendar/custom-calendars.png">
