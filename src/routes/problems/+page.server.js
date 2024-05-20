import prisma from '$lib/prisma';

export async function load() {
    const problems = await prisma.problem.findMany({
        select: {
            id: true,
            description: true,
            tags: true
        }
    });

    return {
        props: {
            problems
        }
    };
}