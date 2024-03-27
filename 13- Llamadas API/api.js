(async () => {

  const fs = require('fs')

  try {
    // const data = []

    // for(let i = 2015; i < 2024; i++) {
  
    //   console.log('fetching data for year', i)
    //   let response = await fetch(`https://opendata.aemet.es/opendata/api/valores/climatologicos/mensualesanuales/datos/anioini/${i.toString()}/aniofin/${i.toString()}/estacion/B228/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjYXJsb3NzZWRhZ2FtYmluQGdtYWlsLmNvbSIsImp0aSI6ImM4ZjE2NDI0LTE3NjktNGNlNy1iMTNiLTVlY2FiMjY2NDc4MyIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNzExNTM0OTcxLCJ1c2VySWQiOiJjOGYxNjQyNC0xNzY5LTRjZTctYjEzYi01ZWNhYjI2NjQ3ODMiLCJyb2xlIjoiIn0.7c6cvyENJzVhTe2RJ2ZKZSyqxfC2IgK6xF3yJi4Zrxs`)
    //   let result = await response.json()
  
    //   response = await fetch(result.datos)
    //   result = await response.json()
  
    //   const yearData = result.map(data => (
    //     {
    //       mes: data.fecha,
    //       min: data.tm_min, 
    //       max: data.tm_max,
    //       media: data.tm_mes
    //     }
    //   ))
  
    //   data.push({
    //     year: i,
    //     data: yearData
    //   })
    // }

    // const data = JSON.parse(fs.readFileSync('aemet.json', 'utf-8'))
    // const data2 = JSON.parse(fs.readFileSync('aemet-2.json', 'utf-8'))
    // const finaldata = data.concat(data2)

    // fs.writeFileSync('aemet.json', JSON.stringify(finaldata, null, 2))

    // const data = JSON.parse(fs.readFileSync('aemet.json', 'utf-8'))

    // const transformedData = {};

    // data.forEach(element => {
    //   const year = element.year;

    //   element.data.forEach(monthData => {
    //     const month = monthData.mes.split('-')[1];
    //     transformedData[month] = {
    //       ...transformedData[month],
    //       [year]: {
    //         min: parseFloat(monthData.min),
    //         max: parseFloat(monthData.max),
    //         media: parseFloat(monthData.media)
    //       }
    //     }
    //   })
    // })

    const data = JSON.parse(fs.readFileSync('aemet.json', 'utf-8'))

    // Object.keys(data).forEach(month => {
    //   if(month === '13') return
    //   const years = Object.keys(data[month])
    //   const firstYear = years[0]
    //   const lastYear = years[years.length - 1]

    //   console.log('Mes:', month)
    //   console.log('Variación media:', data[month][lastYear].media - data[month][firstYear].media)
    //   console.log('Variación mínima:', data[month][lastYear].min - data[month][firstYear].min)
    //   console.log('Variación máxima:', data[month][lastYear].max - data[month][firstYear].max)
    // })

    const temperatures = {}

    Object.keys(data).forEach(month => {
      if(month === '13') return
      const years = Object.keys(data[month])
      years.forEach(year => {
        if(!temperatures[year]) temperatures[year] = []
        temperatures[year].push(data[month][year].media)
      })
    })

    const variations = {}
    const years = Object.keys(temperatures)

    years.forEach(year => {
      variations[year] = temperatures[year].map((temperature, index) => {
        if(index === 0) return temperature
        return temperature - temperatures[year][index - 1]
      })
    })

    fs.writeFileSync('variations.json', JSON.stringify(variations, null, 2))
  }catch(error){
    console.log(error)
  }
  
})()