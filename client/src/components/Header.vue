<template>
	<div class="container-fluid">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">
				<img style="color: white"
					src="../assets/wink.png"
					width="30"
					height="30"
					class="d-inline-block align-top"
					alt=""
				/>
				<span class="font1" style="color: white">&nbsp;<b>Boba chanom</b></span>
				<span class="font1">&nbsp;|&nbsp;</span>
				<span class="font1"><router-link :to="{ name: 'homepage' }"><span style="color: white"><b>Homepage</b></span></router-link></span>
				<span class="font1">&nbsp;|&nbsp;</span>
				<span class="font1"><router-link :to="{ name: 'products' }"><span style="color: white"><b>Menu</b></span></router-link></span>
				<span class="font1">&nbsp;|&nbsp;</span>
				<span class="font1"><router-link :to="{ name: 'orders' }"><span style="color: white"><b>Order</b></span></router-link></span>
				<span class="font1">&nbsp;|&nbsp;</span>
				<span class="font1"><router-link :to="{ name: 'users' }"><span style="color: white"><b>User</b></span></router-link></span>
				<span class="font1">&nbsp;|&nbsp;</span>
				<span v-on:click.prevent="logout" style="color: white"
					><i class="fas fa-sign-in-alt"></i> Logout</span
				>
			</a>
			<!-- <ul class="navbar-brand">
        <li><router-link :to="{ name: 'blogs' }">Blog</router-link></li>
        <li><router-link :to="{ name: 'users' }">Order</router-link></li>
        <li><router-link :to="{ name: 'comments' }">Product</router-link></li>
        <li><router-link :to="{ name: 'login' }">Login</router-link></li>
        <li><router-link :to="{ name: 'blogs' }">User</router-link></li>
      </ul> -->
			<div class="clearfix" />
		</nav>
	</div>
</template>
<script>
import { mapState } from "vuex";
import AuthenService from "@/services/AuthenService";

export default {
	data() {
		return {};
	},
	computed: {
		...mapState(["isUserLoggedIn", "user"]),
	},
	methods: {
		navigateTo(route) {
			this.$router.push(route);
		},
		logout() {
			this.$store.dispatch("setToken", null);
			this.$store.dispatch("setUser", null);
			this.$router.push({
				name: "login",
			});
		},
	},
};
</script>
<style scoped>
.bg-light {
	background-color: #c635ce !important;
	color: #fff !important;
}

.container-fluid {
	margin-top: -50px;
}
</style>
