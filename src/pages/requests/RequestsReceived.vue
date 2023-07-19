<template>
  <h2 class="headline mb-8 mt-12">Hello {{ coaches.getLoggedUserName }},</h2>
  <ul class="list-grid">
    <li v-for="req in requests.getLoggedUserRequests">
      <app-card>
        <p class="mb-4 font-semibold">e-mail: {{ req.email }}</p>
        <app-message-part
          :message="req.message"
          text-above-message="Question to you:"
        ></app-message-part>
        <app-message-part
          v-if="isAnswearGiven(req.answear)"
          :message="req.answear"
          text-above-message="Your Ansewar:"
        ></app-message-part>
        <div v-else class="grid gap-4 mt-8">
          <label :for="req.id">Please Answear</label>
          <textarea
            :name="req.id"
            :id="req.id"
            class="form-input resize-none"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </app-card>
    </li>
  </ul>
</template>

<script setup>
import { useCoachesStore } from "../../store/coaches";
import { useRequestsStore } from "../../store/requests/index.js";

const coaches = useCoachesStore();
const requests = useRequestsStore();

const isAnswearGiven = (answear) => !!answear;
</script>
