<script>
import { defineComponent } from "vue";
import { BButton, BButtonGroup, BFormInput, BSpinner } from "bootstrap-vue-next";
import { authClient, isLoggedIn } from "../auth-client.ts";
import { notify } from "@kyvg/vue3-notification";
import Logo from "../components/Logo.vue";

export default defineComponent({
    components: {
        BButton,
        BButtonGroup,
        BFormInput,
        BSpinner,
        Logo,
    },
    data() {
        return {
            isLoggedIn: false,
            ready: false,
            fixedNavbar: false,
        };
    },
    async mounted() {
        this.isLoggedIn = await isLoggedIn();
        this.ready = true;
    },
    watch: {
        $route() {
            this.fixedNavbar = false;
        },
    },
    methods: {
        async signOut() {
            const res = await authClient.signOut();
            this.$router.push("/login");
        },
        onSetFixedHeader(val) {
            this.fixedNavbar = val;
        },
    },
});
</script>

<template>
    <div
        :class='{
            "fixed-navbar": fixedNavbar,
        }'
    >
        <div class="my-navbar">
            <Logo />

            <div class="toolbar" v-if="!fixedNavbar">
                <div class="left" v-show="ready">
                    <router-link to="/" v-if="isLoggedIn">
                        <font-awesome-icon :icon='["fas", "folder"]' />
                        Tabs
                    </router-link>

                    <router-link to="/new-tab" v-if="isLoggedIn">
                        <font-awesome-icon :icon='["fas", "plus"]' />
                        New Tab
                    </router-link>

                    <router-link to="/settings">
                        <font-awesome-icon :icon='["fas", "gear"]' />
                        Settings
                    </router-link>
                </div>

                <div class="right" v-show="ready">
                    <a href="#" @click.prevent="signOut()" v-if="isLoggedIn">
                        <font-awesome-icon :icon='["fas", "arrow-right-from-bracket"]' />
                        Log out
                    </a>

                    <router-link to="/login" v-else>
                        <font-awesome-icon :icon='["fas", "arrow-right-to-bracket"]' />
                        Log in
                    </router-link>
                </div>
            </div>
        </div>

        <router-view v-slot="{ Component }">
            <component :is="Component" @setFixedHeader="onSetFixedHeader" />
        </router-view>
    </div>
</template>

<style lang="scss" scoped>
@import "../styles/vars.scss";

$navHeight: 100px;

.fixed-navbar {
    .my-navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        width: 100vw;
        margin-bottom: 0;
        background-color: #000;
        backdrop-filter: blur(16px);
    }
}

.my-navbar {
    height: $navHeight;
    border-bottom: 1px solid rgba(200, 241, 105, 0.14);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
    background: #000;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);

    .toolbar {
        padding: 0 30px 0 40px;
        flex: 1;
        display: flex;
        justify-content: space-between;

        & > div {
            flex-grow: 4;
            display: flex;
            column-gap: 50px;

            &.left {
                justify-content: flex-start;
            }

            &.right {
                justify-content: flex-end;
            }

            & > a {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                gap: 5px;
                color: #aab5b0;
                font-size: 0.82rem;
                font-weight: 600;
                transition: color 0.18s ease, transform 0.18s ease;

                &:hover {
                    color: #c8f169;
                    transform: translateY(-1px);
                }
            }
        }

        svg {
            font-size: 18px;
        }
    }
}

.fixed-navbar {
    padding-top: $navHeight + 20px;
}

.mobile {
    $navHeightMobile: 75px;

    .my-navbar {
        height: $navHeightMobile;

        .navbar-brand {
            width: $navHeightMobile;
            height: $navHeightMobile;
            font-size: 15px;
        }

        .toolbar {
            padding: 0 0 0 10px;

            & > div {
                column-gap: 10px;
            }
        }
    }

    .fixed-navbar {
        padding-top: $navHeightMobile + 20px;
    }
}
</style>
