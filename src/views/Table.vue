<template>
  <div>
    <h1 class="text-center">Repos</h1>
    <h4 class="text-center">Github Repos</h4>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Table',
  data () {
    return {
      githubUrl: 'https://api.github.com/search/repositories?q=language%3Ajavascript&sort=stars',
      response: null,
      error: null
    }
  },
  methods: {
    // callGitHub () {
    //   axios.get(this.githubUrl)
    //     .then(response => {
    //       console.log('GitHub Response:', response)

    //       if (response.status !== 200) {
    //         this.error = response.statusText
    //         return
    //       }

    //       this.response = response.data.items
    //     })
    //     .catch(error => {
    //       // Request failed.
    //       console.log('error', error.response)
    //       this.error = error.response.statusText
    //     })
    // }
  },
  mounted () {
    // this.callGitHub()
  }
}
</script>

<style>
</style>
