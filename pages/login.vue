<script setup lang="ts">
import {themeConfig} from '@themeConfig'
import logo from 'assets/images/logo.svg'
import background from 'assets/images/auth/login-back.jpg'

definePageMeta({
  layout: 'blank',

})

const form = ref({
  email: '',
  password: '',
  remember: false,
})

const isLoading = ref(false);
const isPasswordVisible = ref(false)

const submitLogin = (data) => {
  try {
    console.log("Sad");
  } catch (e) {
    console.log(e);
  } finally {
    isLoading.value = true;
  }
}
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4"
       :style="`background-image: url(${background});background-size: cover;`">
    <div class="position-relative my-sm-16">

      <!-- 👉 Auth Card -->
      <VCard
        class="auth-card pa-4"

      >
        <VCardItem class="justify-center">
          <div class="d-flex justify-center">
            <h1>
              <VImg
                :src="logo"
                height="100%"
                width="150px"
              />
            </h1>
          </div>

          <VCardTitle class="font-weight-bold text-capitalize text-center mt-6">
            {{ themeConfig.app.fullTitle }}
          </VCardTitle>
        </VCardItem>

        <VCardText>
          <VForm @submit.prevent="submitLogin">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.email"
                  autofocus
                  label="نام کاربری"
                  type="text"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.password"
                  label="کلمه عبور"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  class="mt-2 mb-10"
                />

                <!-- login button -->
                <VBtn
                  block
                  class="mt-2"
                  type="submit"
                  :loading="isLoading"
                >
                  ورود
                </VBtn>
              </VCol>

            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </div>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
