<template>
  <q-drawer v-model="showDrawer" show-if-above :width="200" :breakpoint="500" bordered
    :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
    <q-scroll-area class="fit">
      <q-list>

        <template v-for="(menuItem, index) in links" :key="index">
          <q-item clickable :to="menuItem.link" v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
        </template>

        <q-separator />

        <template v-for="(menuItem, index) in userLinks" :key="index">
          <q-item clickable :to="menuItem.link" v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
        </template>

      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import useNavLinks from 'src/composables/useNavLinks'

const props = defineProps({
  modelValue: Boolean
})

const emits = defineEmits(['update:modelValue'])

const showDrawer = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  }
})

const { links, userLinks } = useNavLinks()

const menuList = [{
  icon: 'home',
  label: 'Home',
  separator: true,
  link: '/'
}]

</script>

<style lang="scss" scoped>
// a {
//   text-decoration: none;

//   &:visited {
//     color: black;
//   }
// }
</style>
