<script>
  import { multiplierBackgroundColors, ring1BackgroundPosition, ring2BackgroundPosition, ring3BackgroundPosition, toleranceBackgroundColors } from '../lib/constants';
  import { firstHoverRing, firstRing, multiplierHoverRing, multiplierRing, secondHoverRing, secondRing, thirdHoverRing, thirdRing, toleranceHoverRing, toleranceRing } from '../stores/rings';

  export let bands = 4;

  $: ring1BgPosition = `${ring1BackgroundPosition[$firstHoverRing || $firstRing] || '0 -200px'}`;
  $: ring2BgPosition = `${ring2BackgroundPosition[$secondHoverRing || $secondRing] || '0 -323px'}`;
  $: ring3BgPosition = `${ring3BackgroundPosition[$thirdHoverRing || $thirdRing] || '0 -439px'}`;
  $: multiplierPosition = `${multiplierBackgroundColors[`bands${bands}`][$multiplierHoverRing || $multiplierRing] || (bands === 4 ? '0 -439px' : '-745px -200px')}`;
  $: toleranceBgPosition = `${toleranceBackgroundColors[$toleranceHoverRing || $toleranceRing] || '0 -553px'}`;
</script>

<style lang="scss">
  .resistor {
    width: 400px;
    height: 200px;
    position: relative;
    left: 50%;
    margin-left: -200px;
    background-image: url('/sprite.png');
    background-repeat: no-repeat;
    background-position: 0 0;

    &.bands-4 {
      background-position: 0 0;
    }

    &.bands-5 {
      background-position: -400px 0;
    }

    div {
      position: absolute;
      background-image: url('/sprite.png');
    }
  }

  .first {
    width: 25px;
    height: 118px;
    top: 41px;
    left: 119px;
    background-position: var(--bg-pos);
  }

  .second {
    width: 21px;
    height: 110px;
    top: 45px;
    left: 160px;
    background-position: var(--bg-pos);
  }

  .third {
    width: 20px;
    height: 111px;
    top: 47px;
    left: 199px;
    background-position: var(--bg-pos);
  }

  .tolerance {
    width: 34px;
    height: 123px;
    top: 41px;
    left: 293px;
    background-position: var(--bg-pos);
  }

  .multiplier {
    width: 20px;
    height: 111px;
    top: 47px;
    left: 199px;
    background-position: var(--bg-pos);
  }

  .bands-5 .multiplier {
    width: 21px;
    height: 112px;
    top: 44px;
    left: 236px;
  }
</style>

<div class={`resistor bands-${bands}`}>
  <div class="first" style={`--bg-pos: ${ring1BgPosition}`}/>
  <div class="second" style={`--bg-pos: ${ring2BgPosition}`} />

  {#if bands > 4}
    <div class="third" style={`--bg-pos: ${ring3BgPosition}`} />
  {/if}

  <div class="multiplier" style={`--bg-pos: ${multiplierPosition}`}
  />

  <div class="tolerance" style={`--bg-pos: ${toleranceBgPosition}`} />
</div>
