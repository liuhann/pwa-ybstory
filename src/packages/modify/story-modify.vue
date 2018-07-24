<template>
	<div class="story-edit">

		<vant-nav-bar
			title="标题"
			left-text="返回"
			right-text="保存"
			left-arrow
			@click-left="onClickLeft"
			@click-right="onClickRight"
		/>

		<vant-cell-group>
			<vant-field v-for="(value, key, index) in story"
				v-model="story[key]"
				:label="key"
			/>
		</vant-cell-group>
	</div>
</template>

<script>
	import Field from 'vant/lib/field'
	import CellGroup from 'vant/lib/cell-group'
	import NavBar from 'vant/lib/nav-bar'
	import 'vant/lib/vant-css/field.css'
	import 'vant/lib/vant-css/cell.css'
	import 'vant/lib/vant-css/nav-bar.css'

	export default {
		name: "story-modify",
		components: {
			'vant-field': Field,
			'vant-cell-group': CellGroup,
			'vant-nav-bar': NavBar
		},
		data () {
			return {
				story: null
			}
		},

		created () {
			// fetch the data when the view is created and the data is
			// already being observed
			this.fetchData()
		},
		watch: {
			// call again the method if the route changes
			'$route': 'fetchData'
		},

		methods: {
			async fetchData () {
				this.story = await this.ctx.appDao.getStoryById(this.$route.params.id)
			},

			onClickLeft () {
				this.$router.go(-1)
			},

			async onClickRight () {
				await this.ctx.appDao.updateStory(this.story)
			}
		}
	}
</script>

<style scoped>

</style>