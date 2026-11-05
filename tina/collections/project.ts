import type { Collection } from 'tinacms';

// Same fields as the portfolio's projects, plus Arabic versions of the title and summary.
export const ProjectCollection: Collection = {
	name: 'project',
	label: 'Projects',
	path: 'src/content/project',
	format: 'json',
	ui: { router: ({ document }) => `/projects/${document._sys.filename}` },
	fields: [
		{ name: 'title', label: 'Title', type: 'string', isTitle: true, required: true },
		{ name: 'title_ar', label: 'Title (Arabic) · العنوان', type: 'string' },
		{ name: 'year', label: 'Year', type: 'string' },
		{ name: 'client', label: 'Client / context', type: 'string' },
		{ name: 'category', label: 'Category', type: 'string' },
		{ name: 'role', label: 'Role', type: 'string' },
		{ name: 'summary', label: 'Summary', type: 'string', ui: { component: 'textarea' } },
		{ name: 'summary_ar', label: 'Summary (Arabic) · الملخص', type: 'string', ui: { component: 'textarea' } },
		{ name: 'cover', label: 'Cover image', type: 'image' },
		{ name: 'tags', label: 'Tags', type: 'string', list: true },
		{ name: 'sections', label: 'Sections', type: 'object', list: true,
			ui: { itemProps: (item) => ({ label: item?.heading || 'Section' }) },
			fields: [
				{ name: 'heading', label: 'Heading', type: 'string' },
				{ name: 'body', label: 'Text', type: 'string', ui: { component: 'textarea' } },
				{ name: 'images', label: 'Images', type: 'object', list: true, fields: [
					{ name: 'src', label: 'Image', type: 'image' }, { name: 'caption', label: 'Caption', type: 'string' } ] },
			] },
		{ name: 'gallery', label: 'Gallery', type: 'object', list: true, fields: [
			{ name: 'src', label: 'Image', type: 'image' }, { name: 'caption', label: 'Caption', type: 'string' } ] },
	],
};
