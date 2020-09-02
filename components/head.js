const head = (title) => {

  if (title === null || title === undefined) title = 'Title'

  return `<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;900&family=Poppins&display=swap" rel="stylesheet">
  <meta content="width=1296" name="viewport">
</head>
<body>`
}

export default head
