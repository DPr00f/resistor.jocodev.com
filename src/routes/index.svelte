<script>
	import Color from '../components/Color.svelte';
	import Resistor from '../components/Resistor.svelte';
	import {
		ring1Colors,
		ring2Colors,
		ring3Colors,
		multiplierColors,
		toleranceColors,
		colorsToHex
	} from '../lib/constants';
import { firstHoverRing, firstRing, multiplierHoverRing, multiplierRing, secondHoverRing, secondRing, thirdHoverRing, thirdRing, toleranceHoverRing, toleranceRing } from '../stores/rings';

	let bands = 4;

	function addBands() {
		bands++;
	}

	function removeBands() {
		bands--;
	}
</script>

<style lang="scss">
	.bands {
		display: flex;
		width: 640px;
		margin: auto;
	}
</style>

<Resistor {bands} />

{#if bands === 4}
	<button on:click={addBands}>Add Bands</button>
{/if}
{#if bands === 5}
	<button on:click={removeBands}>Remove Bands</button>
{/if}

<div class="bands">
	{#each ring1Colors as color}
		<Color {color} hoverStore={firstHoverRing} store={firstRing} />
	{/each}
</div>

<div class="bands">
	{#each ring2Colors as color}
		<Color {color} hoverStore={secondHoverRing} store={secondRing} />
	{/each}
</div>

{#if bands === 5}
	<div class="bands">
		{#each ring3Colors as color}
			<Color {color} hoverStore={thirdHoverRing} store={thirdRing} />
		{/each}
	</div>
{/if}

<div class="bands">
	{#each multiplierColors as color}
		<Color {color} hoverStore={multiplierHoverRing} store={multiplierRing} />
	{/each}
</div>

<div class="bands">
	{#each toleranceColors as color}
		<Color {color} hoverStore={toleranceHoverRing} store={toleranceRing} />
	{/each}
</div>
