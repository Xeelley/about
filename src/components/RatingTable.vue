<template>
  <div class="rating-table-wrapper" v-bind:class="{
    'float-right': float == 'right',
    'float-left':  float == 'left',
  }">
    <p class="title">{{title}}</p>
    <table>
      <tr class="header">
        <th class="th-name">Name</th>
        <th class="th-stars"></th>
        <th class="th-last-usage">{{ no_last_usage_header ? '' : 'Last Usage' }}</th>
      </tr>
      <tr v-for="row in rows" v-bind:key="row.name">
        <td>{{ row.name }}</td>
        <td class="rating-td">
          <v-rating
            readonly
            half-increments
            color="none"
            length="5"
            size="24"
            :value="row.skill"
          ></v-rating>
        </td>
        <td>{{ row.lastUsage }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Timeline',
    props: [ 'rows', 'title', 'float', 'no_last_usage_header'],
    data: () => ({

    }),
  }
</script>

<style lang="scss" scoped>

@import '../assets/palette.scss';

.rating-table-wrapper {
  padding: 20px 0;

  table {
    th {
      border-bottom: 1px dashed $b-white;
      font-size: 12px;
      text-align: left;

      &.th-name {
        width: 200px;
      }
      &.th-stars {
        width: 140px;
      }
      &.th-last-usage {
        width: 90px;
      }
    }
    td {
      &.rating-td {
        padding: 0 20px;
      }
    }
  }

  &.float-left {
    .header {
      text-align: left;
    }
    table {
      float: left;
    }
  }
  &.float-right {
    .header {
      text-align: right;
    }
    table {
      float: right;
    }
  }

}


</style>


<style lang="scss">

@import '../assets/palette.scss';

.v-rating {
  button {
    color: $b-pink !important;
    padding: 8px 2px !important;

    &.mdi-star-outline {
      color: $b-white !important;
      caret-color: $b-white !important;

      &:before {
        font-weight: 100;
      }
    }
  }
}


</style>