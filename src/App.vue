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

      <br>
      <footer>
        <p>This SPA was built with VueJs, Vue Router, Axios for data fetching, <br>Firebase for data storage and is version controlled with <a href="https://github.com/soundslikebliss/r18-vue" target="_blank">Git.</a></p>
      </footer>    
      
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
        setInterval(this.changeColor, 1000)
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
:root {
    /* variables */
    --box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h1 {
    font-size: 1.8em;
    margin: 0 0 .5em 0;
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
  margin-top: 214px;
  box-shadow: var(--box-shadow);

}
#inner {
	height: 400px;
	width: 400px;
	padding: 12px;
	position: absolute;
	top: 45%;
	left: 50%;
	transform: translate(-50%, -50%);
	/* background-color: #eee; */
	background-image: url('./assets/concrete-texture.png');
	opacity: .8;
	overflow: auto;
	border-radius: 4px;
    box-shadow: var(--box-shadow);
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
    box-shadow: var(--box-shadow);
}
button:focus {
	outline: none;
}

footer {
    position: absolute;
    top: 50%;
    left: 50%;
	transform: translate(-50%, -50%);
    margin-top: 320px;
    font-size: 12px;

}

@media screen and (max-width: 640px) {
    #buttons {
        width: 100%;
        top: 7%;
        margin-left: 0;
    }
    #buttons ul {
        padding: 0;
        text-align: center;
    }
    #buttons li {
        display: inline;
    }
    #inner {
        width: 85%;
    }
}



</style>
