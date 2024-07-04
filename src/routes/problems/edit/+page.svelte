<script>
    import { invalidate } from '$app/navigation';

    export let data;

    let problems = data.problems;

    async function deleteProblem(id) {
        const formData = new FormData();
        formData.append('id', id);

        const response = await fetch('/problems/edit?action=deleteProblem', {
            method: 'POST',
            body: formData
        });

        if(response.ok) {
            await invalidate();
        }
    }

    $: {
        problems = data.problems;
    }
</script>

<svelte:head>
	<title>문제 수정</title>
	<meta name="Tagged Math" content="demo web" />
</svelte:head>

<section>
    <h1>문제 수정</h1>
    
    <ul>
        {#each problems as problem}
            <li>
                {problem.id}
                <button type="button" on:click={() => deleteProblem(problem.id)}>삭제</button>
            </li>
        {/each}
    </ul>
</section>

<style>
    ul {
        list-style: none;
        padding: 0;
    }
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5em 0;
    }
    button {
        margin-left: 0.5em;
    }
</style>