(async () => {
  const response = await fetch('http://ip-api.com/json/85.57.72.109')
  const result = await response.json()
  console.log(result)
})()