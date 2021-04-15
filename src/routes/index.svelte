<script>
	import Resistor from '../components/Resistor.svelte';

	let bands = 4;

	function addBands() {
		bands++;
	}

	function removeBands() {
		bands--;
	}
</script>

<Resistor {bands} />

{#if bands === 4}
	<button on:click={addBands}>Add Bands</button>
{/if}
{#if bands === 5}
	<button on:click={removeBands}>Remove Bands</button>
{/if}
