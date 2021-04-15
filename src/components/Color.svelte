<script>
  import { colorsToHex } from '../lib/constants';

  export let store;
  export let hoverStore;
  export let color;
</script>

<style>
  div {
    height: 40px;
    margin: 2px;
    padding: 0;
    background-image: linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.2));
    box-shadow: rgb(255 255 255 / 30%) 0px 1px 0px inset, rgb(37 47 61) 0px 1px 0px;
    border-radius: 2px;
    border: 1px solid rgba(0,0,0,0.4);
    cursor: pointer;
    font-size: 11px;
    font-weight: bold;
    display: block;
    color: #ffffff;
    user-select: none;
    flex: 1;
    background-color: var(--bg);
  }
</style>

<div
  on:mouseenter={() => { $hoverStore = color; }}
  on:mouseleave={() => { $hoverStore = ''; }}
  on:click={() => { $store = color; }}
  style={`--bg: ${colorsToHex[color]}`}
/>
