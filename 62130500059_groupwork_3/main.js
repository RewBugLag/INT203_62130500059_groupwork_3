const app = {
    data() {
        return {
            conts: [
                {image: "./images/1.jpg", text: "Geysers Valley, Russia", heart: false},
                {image: "./images/2.jpg", text: "Khumbu Valley, Nepal", heart: false},
                {image: "./images/3.jpg", text: "Waipi'o Valley, Hawaii", heart: false}
            ]
        }
    },
    methods: {
        toggleHeart(index) {
            this.conts[index].heart = !this.conts[index].heart
        }
    },
    computed: {
        countPhoto() {
            return this.conts.length
        }
    }
}
Vue.createApp(app).mount('#app')