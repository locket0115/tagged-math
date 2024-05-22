import prisma from '$lib/prisma';

export async function load({ url }) {
    const page = Number(url.searchParams.get('page')) || 1;
    const pageSize = 20;
    const skip = (page - 1) * pageSize;
  
    const [totalProblems, problems] = await prisma.$transaction([
        prisma.problem.count(),
        prisma.problem.findMany({
            skip,
            take: pageSize
        })
    ]);
  
    return {
        props: {
            problems,
            currentPage: page,
            totalPages: Math.ceil(totalProblems / pageSize)
        }
    };
}