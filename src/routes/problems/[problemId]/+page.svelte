<script>
    export let problem;
</script>

<section>
    <div>
        <p>{problem.description}</p>
        
        <br>

        <ul>
            {#each problem.tags as tag}
            <li>
                <a href='/tags/${tag}'>
                    {tag}
                </a>
            </li>
            {/each}
        </ul>
    </div>
</section>

<style>
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
