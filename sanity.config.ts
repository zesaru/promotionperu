import { deskTool } from 'sanity/desk';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_DATASET;
const apiVersion = process.env.API_VERSION;

export const config = {
    projectId,
    dataset,
    apiVersion,
    title: 'PeruinJapan',
    basePath: '/admin',
    plugins: [deskTool()],
};