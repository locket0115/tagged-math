
<script context="module">
    import { error } from '@sveltejs/kit';
    import prisma from '$lib/prisma';
    import { renderLatex } from '$lib/katex';
    
    export async function load({ params }) {
        const problem = await prisma.problem.findUnique({
            where: { id: parseInt(params.problemId) }
        });
        
        console.log(problem);

        if (!problem) {
            throw error(404, 'Problem not found');
        }
        
        return { problem };
    }
</script>

<script>
    export let problem;
</script>

<svelte:head>
	<title>문제 {problem.id}</title>
	<meta name="Tagged Math" content="demo web" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css">
</svelte:head>

<section>
    <div>
        <h1>문제</h1>
        
        {#if problem.imageUrl}
            <img src="{problem.imageUrl}" alt="문제 사진"/>
        {/if}
        
        <!-- <p><b>{problem.description}</b></p> -->
        <p><b>{@html renderLatex(problem.description)}</b></p>
        
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
