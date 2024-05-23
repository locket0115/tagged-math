<script> 
    export let data;

    let problems = data.props.problems;
    let currentPage = data.props.currentPage;
    let totalPages = data.props.totalPages;
</script>

<svelte:head>
	<title>문제 목록</title>
	<meta name="Tagged problems" content="demo web" />
</svelte:head>

<section>
    <div>
        <h1>문제 목록</h1>

        <ul>
            {#each problems as problem}
                <li>
                    <a href='/problems/{problem.id}'>
                        {problem.id}
                    </a>
                </li>
            {/each}
        </ul>
        <div>
            {#if currentPage > 1}
                <a href={`?page=${currentPage - 1}`}>Previous</a>
            {/if}
            <span>Page {currentPage} of {totalPages}</span>
            {#if currentPage < totalPages}
                <a href={`?page=${currentPage + 1}`}>Next</a>
            {/if}
        </div>
    </div>
</section>
