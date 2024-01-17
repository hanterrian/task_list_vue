<script setup>
const login = async (fields, node) => {
  const { pending, posts } = useLazyFetch('/api/login', {
    method: "POST",
    body: fields
  })
}
</script>

<template>
  <div>
    <FormKit type="form" @submit="login">
      <FormKit
          type="text"
          name="email"
          label="Email"
          validation="required|email"
      />
      <FormKit
          type="password"
          name="password"
          label="Password"
          validation="required"
      />
    </FormKit>
  </div>
</template>
