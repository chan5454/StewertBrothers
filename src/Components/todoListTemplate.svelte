<script>
    import {todoList} from "../stores/taskStores"
    // @ts-nocheck
</script>

<style>
  .task-list {
    padding: 1rem;
    max-width: 400px;
    margin: 0 auto;
  }

  .task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    margin-bottom: 0.5rem;
    transition: all 0.2s ease;
  }

  .task-desc {
    font-size: 1rem;
  }

  .completed {
    text-decoration: line-through;
    color: gray;
  }

  button {
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 0.4rem;
    padding: 0.3rem 0.75rem;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.2s ease;
  }

  button:hover {
    background-color: #218838;
  }

  .rowCompleted {
    opacity: 0.5;
    transform: scale(0.95);
    transition: all 0.2s ease;
  }
</style>

<div class="task-list" style="height: 80vh; overflow-y: auto;">
    {#each $todoList as task, index}
        <div class="task-item {task.completed ? 'rowCompleted' : ''}">
            <span class="task-desc {task.completed ? 'completed' : ''}">
                {task.desc}
            </span>
            <button onclick={() => todoList.toggleTodo(index)}>
                {task.completed ? 'Undo' : 'Complete'}
            </button>
        </div>
    {/each}
</div>
