import { writable } from 'svelte/store';

// Key for localStorage
const LOCAL_STORAGE_KEY = 'workout-tracker';

// Check if running in the browser
function loadWorkouts() {
	if (typeof window !== 'undefined') {
		const storedWorkouts = localStorage.getItem(LOCAL_STORAGE_KEY);
		return storedWorkouts ? JSON.parse(storedWorkouts) : [];
	}
	return []; // Return empty array during SSR
}

// Create a Svelte writable store with initial value from localStorage (only in the browser)
export const workoutStore = writable<Workout[]>(loadWorkouts());

// Subscribe to the store and update localStorage whenever the store changes (only in the browser)
workoutStore.subscribe((workouts) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(workouts));
	}
});
``;
