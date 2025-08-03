// @ts-nocheck
import { writable } from 'svelte/store';
import { browser } from '$app/environment'; 

function createTodoStore() {
    const storageKey = 'todos';
	const initial = browser ? readFromLocalStorage(storageKey) || [] : [];

	const { subscribe, set, update } = writable(initial);
    
    function addTodo(desc) {
        update(todos => {
            let newTodos = [...todos, { desc, completed: false }]
            saveToLocalStorage(storageKey, newTodos);
            return newTodos
        });
    }

    function toggleTodo(index) {
        update(todos => {
            todos[index].completed = !todos[index].completed;
            saveToLocalStorage(storageKey, todos);
            return todos;
        });
    }

    function clearTodos() {
        set([]);
        saveToLocalStorage(storageKey, []);
    }

    return {
        subscribe,
        addTodo,
        toggleTodo,
        clearTodos
    };
}

function saveToLocalStorage(key, value) {
	if (!browser) return;
	localStorage.setItem(key, JSON.stringify(value));
}

function readFromLocalStorage(key) {
	if (!browser) return null;
	const data = localStorage.getItem(key);
	return data ? JSON.parse(data) : null;
}

function clearLocalStorageKey(key) {
	if (!browser) return;
	localStorage.removeItem(key);
}

export const todoList = createTodoStore();