<script>
    import { getDatabase, ref, set } from "firebase/database";
    import { v4 as genid } from 'uuid';
    export let todos = {}
    export let db;
    export let roomid;
    export let username = "eduard faus"
    let todotext = "";

    function addTodo() {
        if (todotext == "") {return;}
        let temp = {}
        if (username in  todos) {
            temp = todos[username]
        }
        temp[genid()] = todotext
        set(ref(db, "Rooms/"+roomid+"/Todos/"+username), temp)
    }
    console.log(todos)
</script>
<div class="box has-text-centered">
<div class="columns is-multiline is-mobile">
    {#each  Object.entries(todos) as [key, value]}
    <div class="column">
        <h1 class="title">{key}</h1>
        <hr>
        {#each Object.entries(value) as [k, v]}
        {v}
        <br>
        {/each}
    </div>
    {/each}
    <div class="column">
        <h1 class="title">Ashh</h1>
        <hr>
        random todo
    </div>
</div>
<input class="input" bind:value={todotext} placeholder="Todo Text">
<button on:click={addTodo} class="button">Add</button>
</div>