import prisma from '$lib/prisma';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const description = formData.get('description');
        const tags = JSON.stringify(formData.getAll('tags'));
        
        await prisma.problem.create({
          data: {
            description,
            tags
          }
        });

        return { success: true };
    }
};