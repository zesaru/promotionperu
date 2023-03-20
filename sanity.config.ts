import { apiVersion, dataset, projectId } from 'lib/sanity.api'
import { deskTool } from 'sanity/desk';
import cityType from 'schemas/city'



export const config = {
    projectId,
    dataset,
    apiVersion,
    title: 'PeruinJapan',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {
        types: [cityType]
    }
};