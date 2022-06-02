<template>
  <div class="center-text">
    <h1 class="text-3xl font-italic italic">DRAG ELEMENT HERE</h1>
  </div>
</template>

<script>
const content = [
    {
         id: '{random_string}',
         name: 'heading',
         title: 'Heading Element',
         settings: {
             content: 'Enter your heading text',
             tag: 'h3'
         },
         style: {
            color: 'red',
            'font-size': '18px'
         }
    }, 

]

export default {
  setup() {
    return {
      content,
    };
  },
};
</script>

<style>
.center-text {
  display: inline-block;
  max-width: 24rem;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: #6b8e23;

}
</style>
