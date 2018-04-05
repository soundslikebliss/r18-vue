<template>
  <div id="app">
      <div id="content">
		<section id="wrapper">

			<div id="buttons">
				<ul>
					<li>
						<router-link to="about"><button v-bind:style="{backgroundColor: randoColor}">Ab</button></router-link>
					</li>
					<li>
						<router-link to="work"><button v-bind:style="{backgroundColor: randoColor}">Wo</button></router-link>
					</li>
					<li>
						<router-link to="contact"><button v-bind:style="{backgroundColor: randoColor}">Co</button></router-link>
					</li>
				</ul>
			</div>

			<div id="inner">
				<router-view/>
			</div>

		</section>
      </div>
      <img class="me" src="./assets/me2.jpg">
  </div>    
</template>



<script>
import randomColor from 'randomcolor'

export default {
	name: 'App',

	data() {
		return {
			randoColor: '#eee'
		}
	},

	created() {
		setInterval(this.changeColor, 2000)
	},


	methods: {
		changeColor() {
				let color = randomColor();
				this.randoColor = color
			
		}
	}
}

</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h2 {
	font-weight: 600;
	font-style: italic;
}
img.me {
  height: 120px;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 260px;

}
#inner {
	height: 400px;
	width: 400px;
	padding: 12px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	/* background-color: #eee; */
	background-image: url('./assets/concrete-texture.png');
	opacity: .8;
	overflow: auto;
	border-radius: 4px;
}
#wrapper {
	height: 100%;
}
#buttons {
	position: absolute;
	top: 43%;
	left: 50%;
	transform: translate(-50%, -50%);
	margin-left: -270px;
}
#buttons ul {
	list-style: none;
}
#buttons li {
	margin: 1em 0;
}
button {
	color: rgb(247, 210, 210);
	font-size: 20px;
	font-weight: 500;
	width: 60px;
	height: 60px;
	border-radius: 60px;
	border: none;
	cursor: pointer;
	transition: background 3s;
}
button:focus {
	outline: none;
}



</style>
