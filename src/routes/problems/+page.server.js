import prisma from '$lib/prisma';

export async function load({ url }) {
    try {
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
        
        console.log('Loaded Problems:', problems);
        console.log('Loaded Pages:', page);
        console.log('Total Pages:', Math.ceil(totalProblems / pageSize));
        
        return {
            props: {
                problems,
                currentPage: page,
                totalPages: Math.ceil(totalProblems / pageSize),
            }
        };
    } catch (error) {
        console.error('Error loading problems:', error);
        return {
          problems: [],
          currentPage: 1,
          totalPages: 1,
          error: 'Failed to load problems'
        };
    }
}