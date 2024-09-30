<script lang="ts">
	import Dumbell from './Dumbell.svelte';

	// Declare props for workout name and reps with two-way binding
	export let workoutName: string;
	export let workoutReps: number;
</script>

<aside class="max-w-sm mx-auto">
	<div class="grid grid-cols-3 gap-4 my-4">
		<div class="relative max-w-sm col-span-2">
			<!-- Input for workout name -->
			<Dumbell />
			<input
				id="workout-input"
				type="text"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Add your workout"
				bind:value={workoutName}
				required
			/>
		</div>

		<div class="col-span-1">
			<!-- Input for workout reps -->
			<input
				type="number"
				id="reps-input"
				aria-describedby="helper-text-explanation"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="REPS"
				bind:value={workoutReps}
				required
			/>
		</div>
	</div>
</aside>
