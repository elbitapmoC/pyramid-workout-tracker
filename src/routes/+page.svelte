<script lang="ts">
	import '../app.css';
	import WorkoutForm from '$lib/WorkoutForm.svelte';
	import { workoutStore } from '../lib/store/workoutStore';

	let workoutName = '';
	let workoutReps = 15; // Default selected value

	// Function to add a new workout
	function addWorkout() {
		if (!workoutName.trim()) return; // Prevent adding empty workouts

		// Create a new workout object
		const newWorkout = { name: workoutName, reps: workoutReps };

		// Update the store with the new workout
		workoutStore.update((workouts) => [...workouts, newWorkout]);

		// Clear input after adding
		workoutName = '';
		workoutReps = 15; // Reset to default
	}

	// Function to update reps for a specific workout (decrement by 1)
	// Function to update reps for a specific workout (decrement by 1)
	function updateReps(index: number) {
		workoutStore.update((workouts) =>
			workouts
				.map((workout, i) => (i === index ? { ...workout, reps: workout.reps - 1 } : workout))
				// Filter out workouts with reps <= 0
				.filter((workout) => workout.reps > 0)
		);
	}
</script>

<!-- Main container -->
<div class="hp-m flex flex-col items-center justify-center min-h-screen bg-gray-900">
	<h1 class="text-2xl font-bold text-white mb-6">🔻 Workout Tracker</h1>
	<!-- Workout form card -->
	<div class="w-full max-w-md bg-gray-700 p-6 rounded-xl shadow-md text-center">
		<!-- Form -->
		<div class="space-y-4">
			<WorkoutForm bind:workoutName bind:workoutReps />

			<button
				on:click={addWorkout}
				class="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition"
			>
				Add
			</button>
		</div>
	</div>

	<!-- Workouts list -->
	<!-- Workouts list in a grid layout -->
	<div
		class="w-full max-w-md mt-8 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
	>
		{#if $workoutStore.length > 0}
			{#each $workoutStore as workout, index}
				<button
					on:click={() => updateReps(index)}
					class="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
				>
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{workout.reps}
					</h5>
					<p class="font-normal text-gray-700 dark:text-gray-400">
						Excercise: {workout.name}
					</p>
				</button>
			{/each}
		{:else}
			<div class="col-span-full text-white text-lg">No workouts added yet.</div>
		{/if}
	</div>
</div>

<style>
	.hp-m{
		padding: 1rem;
	}
</style>
