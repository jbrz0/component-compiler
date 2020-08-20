const head = (title) => {

  if (title === null || title === undefined) title = 'Title'

  return `<head>
  <title>${title}</title>
</head>`
}

export default head
