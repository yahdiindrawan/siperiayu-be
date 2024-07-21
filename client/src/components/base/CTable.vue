<template>
  <table class="min-w-full border border-gray-200 rounded-xl">
    <thead>
      <tr class="bg-gray-100 text-gray-500">
        <th
          v-if="numbering"
          scope="col"
          class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6 lg:table-cell"
        >
          No
        </th>
        <th
          v-for="(column, index) in columns"
          :key="index"
          scope="col"
          class="p-4 text-left text-sm font-semibold"
          :class="!column.mobile ? 'hidden lg:table-cell' : null"
        >
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody v-if="data.length > 0" class="divide-y divide-gray-200 bg-white">
      <tr v-for="(row, index) in data" :key="index">
        <td
          v-if="numbering"
          class="py-4 pl-4 pr-3 sm:pl-6 text-sm font-medium text-gray-900 w-auto"
        >
          {{ index + 1 }}
        </td>
        <td
          v-for="(column, index) in columns.filter((el) => el.mobile !== true)"
          :key="index"
          class="p-4 text-sm text-gray-800"
          :class="!column.mobile ? 'hidden lg:table-cell' : null"
        >
          {{ row[column.name] }}
        </td>
        <td
          v-for="(column, index) in columns.filter(
            (el) => el.template === true
          )"
          :key="index"
          class="p-4 text-sm text-gray-800"
          :class="!column.mobile ? 'hidden lg:table-cell' : null"
        >
          <slot :name="column.name" :data="row" :column="column" />
        </td>
      </tr>
    </tbody>
    <tbody v-else class="divide-y divide-gray-200 bg-white">
      <tr>
        <td
          :colspan="numbering ? columns.length + 1 : columns.length"
          class="text-center px-4"
        >
          <slot name="empty" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    columns: {
      type: Array,
      default: [],
    },
    data: {
      type: Array,
      default: [],
    },
    numbering: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
