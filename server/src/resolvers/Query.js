async function feed(root, args, context, info) {

	const where = args.filter ? {
		OR: [
			{ description_contains: args.filter },
			{ url_contains: args.filter }
		]
	} : {}


	const links = await context.prisma.links({
		where,
		skip: args.skip,
		first: args.first,
		orderBy: args.orderBy
	})

	const aggregate = await context.prisma
	.linksConnection({
      where
    })
	.aggregate()

	return {
		links,
		count: aggregate.count
	}
}

module.exports = {
	feed,
}
