<script>
    export let data;

    let problem = data.props.problem;
</script>


<svelte:head>
	<title>문제 {problem.id}</title>
	<meta name="Tagged Math" content="demo web" />
</svelte:head>

<section>
    <div>
        <p><b>{problem.description}</b></p>
        
        <br>
        <br>

        <p>태그 목록</p> 
        <ul>
            {#each problem.tags as tag}
            <li>
                <a href='/tags/{tag}'>
                    {tag}
                </a>
            </li>
            {/each}
        </ul>
    </div>
</section>

<style>
    div {
        width: 100%;
    }

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

    /* ul {
        align-items:normal;
    } */
</style>
