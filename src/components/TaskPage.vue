<template>
    <q-page class="flex flex-center q-mt-xl" style="flex-direction: column;">
      <iframe :src="taskLink" width="100%" height="600px" frameborder="0"></iframe>
    </q-page>
  </template>
  
  <script>
  export default {
    name: 'TaskPage',
    computed: {
      taskLink() {
        const taskLinks = {
          1: 'https://riza-project-cv.netlify.app/',
          2: 'https://rizaaa.netlify.app/',
          3: 'https://rizaumamiayman.netlify.app/',
          4: 'https://tugas4-pbk.vercel.app/',
          5: 'https://tugas5ruapraktikumpbk.netlify.app/',
          6: 'https://tugas6riza223510374.netlify.app/',
          7: 'https://tugas7rizaumamiayman223510374.netlify.app/',
        };
        return taskLinks[this.$route.params.id];
      }
    }
  };
  </script>
  