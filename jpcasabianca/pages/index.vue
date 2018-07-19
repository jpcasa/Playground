<template>
  <section>

    <section class="scrollSection full-row" id="short-bio">
      <div class="full-row" id="first-fold">
        <div id="scene-1">
          <div class="col-sm-6">
            <Title />
          </div>
        </div>
      </div>
      <div class="full-row" id="hi-stranger">

      </div>
    </section>



  </section>
</template>

<script type="text/javascript">

  import Butter from 'buttercms';

  import Title from '~/components/Elements/Title.vue';

  const butter = Butter('68cedcb076fd4db59533c46ab1743789a845a48d');

  export default {
    components: {
      Title,
    },
    methods: {
      get_posts() {
        butter.post.list({page: 1, page_size: 10}).then(function(response) {
          console.log(response);
        });
      },
    },
    mounted() {
      //do something after mounting vue instance
      this.get_posts();
    },
  };

</script>

<style style="scss">


  #first-fold {
    height: 850px;
  }
  #scene-1 {
    height: 100%;
    display: flex;
    background-image: url('~/static/img/background.png');
    background-size: cover;

  }
</style>
