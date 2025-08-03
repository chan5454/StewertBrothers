<script>
    import TodoListTemplate from "../Components/todoListTemplate.svelte";
    import {todoList} from "../stores/taskStores"
    // @ts-ignore


    let newTask = '';
    const addTask = () => {
        if (newTask.trim()) {
            console.log("Task added:", newTask);
            todoList.addTodo(newTask)
            newTask = '';
        }
    };
</script>

<style>
    .form-container {
        display: flex;
        gap: 0.5rem;
        padding: 1rem;
        max-width: 400px;
        margin: 0 auto;
    }

    input[type="text"] {
        flex: 1;
        padding: 0.5rem 0.75rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        font-size: 1rem;
        outline: none;
    }

    input[type="text"]:focus {
        border-color: #0070f3;
        box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.2);
    }

    button {
        background-color: #0070f3;
        color: white;
        border: none;
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    button:hover {
        background-color: #005fc1;
    }
    
    .clearButton {
        background-color: #dc3545;
        color: white;
        border: none;
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .clearButton:hover {
        background-color: #c82333;
    }
</style>


<div class="form-container">
    <input
        type="text"
        bind:value={newTask}
        placeholder="Enter a new task..."
        onkeydown={(e) => e.key === 'Enter' && addTask()}
    />
    <button onclick={addTask}>Add</button>

    <button class="clearButton" onclick={todoList.clearTodos}>Clear All</button>
</div>
<TodoListTemplate />
