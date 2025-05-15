<template>
    <div class="main-container container d-flex flex-column justify-content-center align-items-center gap-3">
        <img src="/images/back-arrow.svg" alt="loading" width="100px" height="100px">
        <div class="loading container d-flex flex-inline justify-content-center align-items-center gap-3">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Загрузка...</span>
            </div>
            <p class="loading_label">
                Производится переход на страницу...
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "RedirectView",
    data() {
        return {
            argsCreate: '',
            backLink: '',
            requestAcquiring: '',
            requestPaid: ''
        }
    },
    methods: {
        createPaymentLink() {
        },
    },
    mounted() {
    },
}
</script>

<style>
.main-container {
    display: flex;
    align-items: center;
    height: 100%
}

.loading_label {
    margin: 0
}

@import url('/public/bootstrap/css/bootstrap.min.css');
</style>