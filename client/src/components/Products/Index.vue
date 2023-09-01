<template>
	<div class="container-fluid">
		<back-header />

		<div class="container-fluid">
			<br />
			<button
				style="float: right"
				type="button"
				class="btn btn-success font2"
				v-on:click="navigateTo('/product/create')"
			>
				<i class="fas fa-plus-circle"></i> Add Product
			</button>
		</div>
		<br /><br /><br />

		<div class="container-fluid">
			<div
				v-for="product in products"
				v-bind:key="product.id"
				class="blog-list"
			>
				<table class="table table-sm">
					<thead class="thead-light">
						<tr>
							<th scope="col">id</th>
							<th scope="col">Picture</th>
							<th scope="col">Name</th>
							<th scope="col">Price</th>
							<th scope="col">Category</th>
							<th scope="col">Tool</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th width="5%">{{ product.id }}</th>
							<td width="15%">
								<div class="blog-pic">
									<div class="thumbnail-pic" v-if="product.thumbnail != 'null'">
										<img
											:src="BASE_URL + product.thumbnail"
											alt="thumbnail"
											width="200"
										/>
									</div>
								</div>
							</td>
							<td width="15%">{{ product.name }}</td>
							<td width="10%">{{ product.price }}</td>
							<td width="10%">{{ product.category }}</td>
							<td width="20%">
								<button
									class="btn btn-primary"
									v-on:click="navigateTo('/product/edit/' + product.id)"
								>
									<i class="fas fa-edit"></i> Edit</button
								>&nbsp; &nbsp;
								<button
									class="btn btn-danger"
									v-on:click="deleteProduct(product)"
								>
									<i class="fas fa-trash-alt"></i>
									Delete
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
import ProductService from "@/services/ProductService";
import _ from "lodash";

export default {
	data() {
		return {
			products: [],
			BASE_URL: "http://localhost:8081/assets/uploads/",
		};
	},
	async created() {
		this.products = (await ProductService.index()).data;
	},
	methods: {
		logout() {
			this.$store.dispatch("setToken", null);
			this.$store.dispatch("setBlog", null);
			this.$router.push({
				name: "login",
			});
		},
		navigateTo(route) {
			this.$router.push(route);
		},
		async deleteProduct(product) {
			let result = confirm("Want to delete?");
			if (result) {
				try {
					await ProductService.delete(product);
					this.refreshData();
				} catch (err) {
					console.log(err);
				}
			}
		},
		async refreshData() {
			this.products = (await ProductService.index()).data;
		},
	},
};
</script>
<style scoped>
img {
	border-radius: 5%;
}
</style>
