import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function load() {
    const problems = await prisma.problem.findMany();
    return { problems };
}

export const actions = {
    deleteProblem: async ({ request }) => {
        const data = await request.formData();
        const id = data.get('id');
    
        if (id) {
            await prisma.problem.delete({
                where: { id: parseInt(id, 10) }
            });
        }

        return { success: true };
    }
}