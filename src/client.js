import sanityClient from '@sanity/client'

export default sanityClient({
	projectId: 'px98c8o5',
	dataset: 'production',
	useCdn: true,
})
