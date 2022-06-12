<script>
    import { getDatabase, ref, set } from "firebase/database";
    import { v4 as genid } from 'uuid';
    import Login from "./Login.svelte";

    export let todos = {}
    export let db;
    export let roomid;
    export let user;
    let username = null
    $: if (user != null) {
        username = user.displayName;
    }
    let todotext = "";

    function addTodo() {
        let username = user.displayName;
        if (todotext == "") {return;}
        let temp = {}
        if (username in  todos) {
            temp = todos[username]
        }
        temp[genid()] = {
            text: todotext,
            done: false
        }
        set(ref(db, "Rooms/"+roomid+"/Todos/"+username), temp)
        todotext = ""
    }
    function checkTodo(k,t){
        let username = user.displayName;
        set(ref(db, "Rooms/"+roomid+"/Todos/"+username+"/"+k), {
            text: t,
            done: !todos[username][k].done
        })
    }
    function deleteTodo(k){
        let username = user.displayName;
        delete todos[username][k]
        set(ref(db, "Rooms/"+roomid+"/Todos/"+username+"/"+k), {})
    }
</script>
<div class=" has-text-centered">
    <h1 class="title"> Todos</h1>
    <hr>
    <br>
<div class="columns is-multiline is-mobile">
    {#each  Object.entries(todos) as [key, value]}
    <div class="column">

        <h1 class="title">{key}</h1>
        <hr>
        {#each Object.entries(value) as [k, v]}
        {v.text}
        {#if key==username}
        <input type=checkbox on:click={() => {checkTodo(k,v.text)}} bind:checked={v.done}>
        <button on:click={()=>{deleteTodo(k)}} class="button is-danger is-small">
            Delete
          </button>
        {/if}
        <br>
        <br>
        {/each}
    </div>
    {/each}
</div>
{#if user != null}
<input class="input" bind:value={todotext} placeholder="Todo Text">
<button on:click={addTodo} class="button">Add</button>
{:else}
<p>Please login to add todos</p>
<Login></Login>
{/if}
</div>