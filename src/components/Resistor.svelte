<script>
  export let bands = 4;
</script>

<style>
  div {
    width: 400px;
    height: 200px;
    position: relative;
    left: 50%;
    margin-left: -200px;
    background: url('/sprite.png');
    background-repeat: no-repeat;
    background-position: 0 0;
  }

  div.bands-4 {
    background-position: 0 0;
  }
  div.bands-5 {
    background-position: -400px 0;
  }
</style>

<div class={`bands-${bands}`}></div>
