<template>
  <CollapsiblePanel :header="data?.title">
    <template>
      <EducationIcon class="me-2 h-8 w-8" />
    </template>
    <div v-for="(skills, category) in data?.list" :key="category" class="mb-4">
      <h3 class="source-sans text-xl font-semibold tracking-wide text-gray-800">{{ category }}</h3>
      <ul class="mt-1 flex flex-wrap gap-2">
        <li
          v-for="(skill, index) in skills"
          :key="index"
          class="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800"
        >
          {{ skill }}
        </li>
      </ul>
    </div>
  </CollapsiblePanel>
</template>

<script lang="ts" setup>
import CollapsiblePanel from '@/components/CollapsiblePanel.vue'
import EducationIcon from '@/components/icons/EducationIcon.vue'
import type { HardSkill } from '@/types'
import { useLocalizedData } from '@/composables/LocalizedData'
const { data} = useLocalizedData<HardSkill>('about.hardSkill')
</script>
